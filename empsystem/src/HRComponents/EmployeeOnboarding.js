
import React, { useState } from 'react';
import './EmployeeOnboarding.css';

function EmployeeOnboarding() {
  const [form, setForm] = useState({
    offerLetter: '',
    offerDate: '',
    resume: false,
    idProof: false,
    certificates: false,
    bgvStatus: 'Pending',
    bgvReport: '',
    orientationDate: '',
    orientationDept: '',
    probationStart: '',
    probationDuration: '',
    email: '',
    password: '',
    role: 'employee',   // ✅ Role added here
    remarks: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const fieldValue =
      type === 'checkbox'
        ? checked
        : files
        ? URL.createObjectURL(files[0])
        : value;
    setForm({ ...form, [name]: fieldValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const onboardingData = {
      email: form.email,
      password: form.password,
      role: form.role,     // ✅ Send role to backend
      active: true
    };

    fetch('http://localhost:8081/api/onboarding/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(onboardingData)
    })
      .then((res) => {
        if (res.ok) {
          alert(`✅ Onboarding Complete & Access Granted to ${form.role}`);
        } else {
          alert('❌ Failed to save onboarding');
        }
      })
      .catch((err) => {
        console.error(err);
        alert('❌ Backend error occurred');
      });

    // Reset the form
    setForm({
      offerLetter: '',
      offerDate: '',
      resume: false,
      idProof: false,
      certificates: false,
      bgvStatus: 'Pending',
      bgvReport: '',
      orientationDate: '',
      orientationDept: '',
      probationStart: '',
      probationDuration: '',
      email: '',
      password: '',
      role: 'employee',
      remarks: ''
    });
  };

  return (
    <div className="onboarding-container">
      <h2>Employee Onboarding Workflow</h2>
      <form className="onboarding-form" onSubmit={handleSubmit}>
        <div className="section">
          <h3>1. Offer Letter</h3>
          <label>Upload Offer Letter</label>
          <input type="file" name="offerLetter" onChange={handleChange} required />
          <label>Issue Date</label>
          <input type="date" name="offerDate" value={form.offerDate} onChange={handleChange} required />
        </div>

        <div className="section">
          <h3>2. Documents Submitted</h3>
          <label><input type="checkbox" name="resume" checked={form.resume} onChange={handleChange} /> Resume</label>
          <label><input type="checkbox" name="idProof" checked={form.idProof} onChange={handleChange} /> ID Proof</label>
          <label><input type="checkbox" name="certificates" checked={form.certificates} onChange={handleChange} /> Certificates</label>
        </div>

        <div className="section">
          <h3>3. Background Verification</h3>
          <label>Status</label>
          <select name="bgvStatus" value={form.bgvStatus} onChange={handleChange} required>
            <option>Pending</option>
            <option>Verified</option>
          </select>
          <label>Upload BGV Report</label>
          <input type="file" name="bgvReport" onChange={handleChange} />
        </div>

        <div className="section">
          <h3>4. Orientation Scheduled</h3>
          <label>Date</label>
          <input type="datetime-local" name="orientationDate" value={form.orientationDate} onChange={handleChange} />
          <label>Department/Trainer Assigned</label>
          <input type="text" name="orientationDept" value={form.orientationDept} onChange={handleChange} />
        </div>

        <div className="section">
          <h3>5. Probation Period</h3>
          <label>Start Date</label>
          <input type="date" name="probationStart" value={form.probationStart} onChange={handleChange} />
          <label>Duration (e.g., 3/6 months)</label>
          <input type="text" name="probationDuration" value={form.probationDuration} onChange={handleChange} />
        </div>

        <div className="section">
          <h3>6. Login Access Details</h3>
          <label>Email ID</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
          <label>Password</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} required />

          {/* ✅ Step 2: Role Dropdown */}
          <label>Role</label>
          <select name="role" value={form.role} onChange={handleChange}>
            <option value="employee">Employee</option>
            <option value="hr">HR</option>
          </select>
        </div>

        <button type="submit">Save Onboarding</button>
      </form>
    </div>
  );
}

export default EmployeeOnboarding;