import React, { useState } from 'react';
import './EmpOtherClaim.css';

function EmpOtherClaim() {
  const [form, setForm] = useState({
    employeeId: '', name: '', designation: '', title: '',
    incidentDate: '', description: '', amount: '', proof: null,
    submittedOn: new Date().toISOString().slice(0, 10),
    status: 'Pending', approvedBy: '', payoutDate: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: name === 'proof' ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    for (const key in form) {
      if (key === 'proof' && form.proof) {
        formData.append('proof', form.proof);
      } else {
        formData.append(key, form[key]);
      }
    }

    try {
      const res = await fetch('http://localhost:8081/api/other-claims', {
        method: 'POST',
        body: formData
      });

      if (res.ok) {
        alert("✅ Claim submitted successfully!");
        setForm({
          employeeId: '', name: '', designation: '', title: '',
          incidentDate: '', description: '', amount: '', proof: null,
          submittedOn: new Date().toISOString().slice(0, 10),
          status: 'Pending', approvedBy: '', payoutDate: ''
        });
      } else {
        alert("❌ Submission failed. Try again.");
      }
    } catch (err) {
      console.error("Error submitting:", err);
      alert("❌ Server error");
    }
  };

  return (
    <div className="claims-container">
      <h2>🗂️ Other Claims Form</h2>
      <form onSubmit={handleSubmit} className="claims-form">
        <div className="row">
          <div className="field">
            <span>🧑‍💼 Employee ID</span>
            <input type="text" name="employeeId" value={form.employeeId} onChange={handleChange} required />
          </div>
          <div className="field">
            <span>Name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="field">
            <span>Designation</span>
            <input type="text" name="designation" value={form.designation} onChange={handleChange} required />
          </div>
        </div>

        <div className="row">
          <div className="field">
            <span>📝 Claim Title</span>
            <input type="text" name="title" value={form.title} onChange={handleChange} required />
          </div>
          <div className="field">
            <span>📅 Incident Date</span>
            <input type="date" name="incidentDate" value={form.incidentDate} onChange={handleChange} required />
          </div>
          <div className="field">
            <span>💸 Amount Requested</span>
            <input type="number" name="amount" value={form.amount} onChange={handleChange} required />
          </div>
        </div>

        <div className="row">
          <div className="field" style={{ flex: '1 1 100%' }}>
            <span>🧾 Description</span>
            <textarea name="description" value={form.description} onChange={handleChange} rows={3} required />
          </div>
        </div>

        <div className="row">
          <div className="field">
            <span>📎 Upload Proof</span>
            <input type="file" name="proof" onChange={handleChange} accept=".pdf,.jpg,.png" />
          </div>
          <div className="field">
            <span>📤 Submitted On</span>
            <input type="date" name="submittedOn" value={form.submittedOn} onChange={handleChange} required />
          </div>
        </div>

        <button type="submit">📤 Submit Claim</button>
      </form>
    </div>
  );
}

export default EmpOtherClaim;