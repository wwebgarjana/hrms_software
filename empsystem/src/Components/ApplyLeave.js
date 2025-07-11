import React, { useState } from 'react';
import axios from 'axios';
import './ApplyLeave.css';

function ApplyLeave() {
  const userEmail = localStorage.getItem('userEmail'); // ✅ Get email from login

  const [leave, setLeave] = useState({
    leaveType: '',
    fromDate: '',
    toDate: '',
    reason: '',
  });

  const handleChange = (e) => {
    setLeave({ ...leave, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      ...leave,
      email: userEmail, // ✅ Inject email from localStorage before sending
    };

    try {
      await axios.post('http://localhost:8081/api/leave/apply', data);
      alert('Leave request submitted!');
    } catch (err) {
      console.error('Submit Error:', err);
      alert('Failed to submit leave');
    }
  };

  return (
    <div className="apply-leave">
      <h2>Apply for Leave</h2>
      <form onSubmit={handleSubmit}>
        <label>Leave Type:</label>
        <select name="leaveType" onChange={handleChange} required>
          <option value="">Select</option>
          <option value="Sick">Sick</option>
          <option value="Casual">Casual</option>
          <option value="Paid">Paid</option>
          <option value="Unpaid">Unpaid</option>
        </select>

        <label>From Date:</label>
        <input type="date" name="fromDate" onChange={handleChange} required />

        <label>To Date:</label>
        <input type="date" name="toDate" onChange={handleChange} required />

        <label>Reason:</label>
        <textarea name="reason" rows="4" onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ApplyLeave;
