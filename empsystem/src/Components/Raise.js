import React, { useState } from 'react';
import axios from 'axios';
import './Raise.css';

function Raise() {
  const [formData, setFormData] = useState({
    empId: '',
    empName: '',
    email: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8081/api/raise', formData);
      alert('🎫 Ticket submitted successfully!');
      setFormData({
        empId: '',
        empName: '',
        email: '',
        description: '',
      });
    } catch (error) {
      console.error('Error submitting ticket:', error);
      alert('❌ Failed to submit ticket.');
    }
  };

  return (
    <div className="raise-form-container">
      <h2>📝 Raise a Ticket</h2>
      <form onSubmit={handleSubmit}>
        <label>Employee ID</label>
        <input type="text" name="empId" value={formData.empId} onChange={handleChange} required />

        <label>Employee Name</label>
        <input type="text" name="empName" value={formData.empName} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Problem Description</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required />

        <button type="submit" className="raise-submit-button">Submit Ticket</button>
      </form>
    </div>
  );
}

export default Raise;
