import React, { useState } from 'react';
import axios from 'axios';
import './GeneratePayslip.css';

export default function GeneratePayslip() {
  const [form, setForm] = useState({
    email: '',
    month: '',
    basicSalary: '',
    totalWorkingDays: '',
    presentDays: '',
    sickLeave: '',
    casualLeave: '',
    unpaidLeave: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generate = async () => {
    try {
      await axios.post('http://localhost:8081/api/payroll/payslip', form);
      alert("✅ Payslip Generated!");
    } catch (err) {
      console.error("Error generating payslip:", err);
      alert("❌ Failed to generate payslip.");
    }
  };

  return (
    <div className="generate-payslip-container">
      <h2 className="generate-payslip-title">Generate Payslip</h2>
      <div className="generate-payslip-form">

        <label>Email</label>
        <input name="email" value={form.email} onChange={handleChange} placeholder="Enter employee email" />

        <label>Month</label>
        <input name="month" value={form.month} onChange={handleChange} placeholder="e.g. July 2025" />

        <label>Basic Salary</label>
        <input name="basicSalary" value={form.basicSalary} onChange={handleChange} placeholder="Enter basic salary" />

        <label>Total Working Days</label>
        <input name="totalWorkingDays" value={form.totalWorkingDays} onChange={handleChange} placeholder="e.g. 26" />

        <label>Present Days</label>
        <input name="presentDays" value={form.presentDays} onChange={handleChange} placeholder="e.g. 22" />

        <label>Sick Leave</label>
        <input name="sickLeave" value={form.sickLeave} onChange={handleChange} placeholder="e.g. 2" />

        <label>Casual Leave</label>
        <input name="casualLeave" value={form.casualLeave} onChange={handleChange} placeholder="e.g. 1" />

        <label>Unpaid Leave</label>
        <input name="unpaidLeave" value={form.unpaidLeave} onChange={handleChange} placeholder="e.g. 1" />

        <button className="generate-payslip-button" onClick={generate}>Generate</button>
      </div>
    </div>
  );
}
