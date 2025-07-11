import React, { useState } from 'react';
import './EmpMedicalClaim.css';

function EmpMedicalClaim() {
  const [form, setForm] = useState({
    employeeId: '', name: '', department: '', medicalType: '',
    treatmentDate: '', claimAmount: '', doctorName: '',
    remarks: '', policyNumber: '', uploadedFile: null,
    submittedOn: new Date().toISOString().slice(0, 10),
    status: 'Pending', approvedOn: '', approvedBy: ''
  });

  const [submittedClaims, setSubmittedClaims] = useState([]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: name === 'uploadedFile' ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in form) {
      formData.append(key, form[key]);
    }

    try {
      const res = await fetch('http://localhost:8081/api/medical-claims', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        alert("✅ Medical claim submitted successfully!");

        // Generate preview link for uploaded file
        const filePreviewUrl = form.uploadedFile
          ? URL.createObjectURL(form.uploadedFile)
          : null;

        const newClaim = {
          ...form,
          claimId: `CLM${Date.now()}`,
          filePreviewUrl
        };
        setSubmittedClaims(prev => [...prev, newClaim]);

        // Reset form
        setForm({
          employeeId: '', name: '', department: '', medicalType: '',
          treatmentDate: '', claimAmount: '', doctorName: '',
          remarks: '', policyNumber: '', uploadedFile: null,
          submittedOn: new Date().toISOString().slice(0, 10),
          status: 'Pending', approvedOn: '', approvedBy: ''
        });
      } else {
        alert("❌ Failed to submit. Try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("❌ Error submitting the claim.");
    }
  };

  return (
    <div className="claim-container">
      <h2>🩺 Medical Claim Form</h2>
      <form onSubmit={handleSubmit} className="claim-form">
        <div className="row">
          <div className="field"><label>🧑‍💼 Employee ID</label>
            <input type="text" name="employeeId" value={form.employeeId} onChange={handleChange} required />
          </div>
          <div className="field"><label>Full Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="field"><label>Department</label>
            <input type="text" name="department" value={form.department} onChange={handleChange} required />
          </div>
        </div>

        <div className="row">
          <div className="field"><label>🏥 Medical Type</label>
            <select name="medicalType" value={form.medicalType} onChange={handleChange} required>
              <option value="">-- Select --</option>
              <option value="Hospitalization">Hospitalization</option>
              <option value="Consultation">Consultation</option>
              <option value="Prescription">Prescription</option>
            </select>
          </div>
          <div className="field"><label>📅 Treatment Date</label>
            <input type="date" name="treatmentDate" value={form.treatmentDate} onChange={handleChange} required />
          </div>
          <div className="field"><label>💰 Claim Amount</label>
            <input type="number" name="claimAmount" value={form.claimAmount} onChange={handleChange} required />
          </div>
        </div>

        <div className="row">
          <div className="field"><label>📝 Doctor/Hospital Name</label>
            <input type="text" name="doctorName" value={form.doctorName} onChange={handleChange} required />
          </div>
          <div className="field"><label>🧾 Remarks/Diagnosis</label>
            <input type="text" name="remarks" value={form.remarks} onChange={handleChange} />
          </div>
          <div className="field"><label>📌 Policy Number</label>
            <input type="text" name="policyNumber" value={form.policyNumber} onChange={handleChange} />
          </div>
        </div>

        <div className="row">
          <div className="field"><label>📎 Upload Bills/Receipts</label>
            <input type="file" name="uploadedFile" accept=".pdf,.jpg,.png" onChange={handleChange} />
          </div>
        </div>

        <button type="submit">📤 Submit Claim</button>
      </form>

      {/* ✅ Display submitted claim immediately below */}
      {submittedClaims.length > 0 && (
        <div className="submitted-claims">
          <h3>📄 Recently Submitted Claims</h3>
          <table className="claim-table">
            <thead>
              <tr>
                <th>Claim ID</th>
                <th>Employee</th>
                <th>Medical Type</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Upload Bills/Receipts</th>
              </tr>
            </thead>
            <tbody>
              {submittedClaims.map((claim, i) => (
                <tr key={i}>
                  <td>{claim.claimId}</td>
                  <td>{claim.name}<br />{claim.department}</td>
                  <td>{claim.medicalType}</td>
                  <td>{claim.treatmentDate}</td>
                  <td>₹{claim.claimAmount}</td>
                  <td>{claim.status}</td>
                  <td>
                    {claim.filePreviewUrl ? (
                      <a href={claim.filePreviewUrl} download target="_blank" rel="noopener noreferrer">
                        Download
                      </a>
                    ) : (
                      <span style={{ color: 'gray' }}>No file</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default EmpMedicalClaim;