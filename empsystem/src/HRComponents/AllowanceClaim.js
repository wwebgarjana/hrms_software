import React, { useState } from 'react';
import './AllowanceClaim.css';

function AllowanceClaim() {
  const [form, setForm] = useState({
    employeeId: '', name: '', department: '', allowanceType: '',
    expenseDate: '', claimAmount: '', location: '',
    purpose: '', supportingFile: null,
    submittedOn: new Date().toISOString().slice(0, 10),
    status: 'Pending'
  });

  const [claims, setClaims] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: name === 'supportingFile' ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const claimData = {
      ...form,
      claimId: `ALW${Date.now()}`
    };

    if (editingIndex !== null) {
      const updated = [...claims];
      updated[editingIndex] = { ...claimData };
      setClaims(updated);
      setEditingIndex(null);
    } else {
      setClaims([...claims, claimData]);
    }

    setForm({
      employeeId: '', name: '', department: '', allowanceType: '',
      expenseDate: '', claimAmount: '', location: '',
      purpose: '', supportingFile: null,
      submittedOn: new Date().toISOString().slice(0, 10),
      status: 'Pending'
    });
  };

  const handleEdit = (index) => {
    setForm(claims[index]);
    setEditingIndex(index);
  };

  return (
    <div className="allowance-container">
      <h2>💼 Allowance Claim Form</h2>
      <form onSubmit={handleSubmit} className="allowance-form">
        <div className="row">
          <div className="field">
            <span>🧑‍💼 Employee ID</span>
            <input type="text" name="employeeId" value={form.employeeId} onChange={handleChange} required />
          </div>
          <div className="field">
            <span>Full Name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="field">
            <span>Department</span>
            <input type="text" name="department" value={form.department} onChange={handleChange} required />
          </div>
        </div>

        <div className="row">
          <div className="field">
            <span>💼 Allowance Type</span>
            <select name="allowanceType" value={form.allowanceType} onChange={handleChange} required>
              <option value="">-- Select Type --</option>
              <option value="Travel">Travel</option>
              <option value="Internet">Internet</option>
              <option value="Phone">Phone</option>
              <option value="Work-from-home Setup">Work-from-home Setup</option>
            </select>
          </div>
          <div className="field">
            <span>📅 Expense Date</span>
            <input type="date" name="expenseDate" value={form.expenseDate} onChange={handleChange} required />
          </div>
          <div className="field">
            <span>💰 Claim Amount</span>
            <input type="number" name="claimAmount" value={form.claimAmount} onChange={handleChange} required />
          </div>
        </div>

        <div className="row">
          <div className="field">
            <span>🌐 Location/Destination</span>
            <input type="text" name="location" value={form.location} onChange={handleChange} />
          </div>
          <div className="field">
            <span>🧾 Purpose/Justification</span>
            <input type="text" name="purpose" value={form.purpose} onChange={handleChange} required />
          </div>
          <div className="field">
            <span>📎 Upload Documents</span>
            <input type="file" name="supportingFile" accept=".pdf,.jpg,.png" onChange={handleChange} />
          </div>
        </div>

        <button type="submit">{editingIndex !== null ? '✏️ Update Claim' : '📤 Submit Claim'}</button>
      </form>

      <h3>📋 Submitted Allowance Claims</h3>
      <table className="allowance-table">
        <thead>
          <tr>
            <th>Claim ID</th>
            <th>Employee</th>
            <th>Type</th>
            <th>Expense Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Submitted</th>
            <th>📄 Acknowledgment</th>
            <th>✏️ Edit</th>
          </tr>
        </thead>
        <tbody>
          {claims.map((c, i) => (
            <tr key={i}>
              <td>{c.claimId}</td>
              <td>{c.name}<br />{c.department}</td>
              <td>{c.allowanceType}</td>
              <td>{c.expenseDate}</td>
              <td>₹{c.claimAmount}</td>
              <td>{c.status}</td>
              <td>{c.submittedOn}</td>
              <td><button onClick={() => alert("📄 PDF Download Placeholder")}>Download</button></td>
              <td><button onClick={() => handleEdit(i)}>Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllowanceClaim;