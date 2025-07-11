import React, { useState } from 'react';
import './ContactInfo.css';

function ContactInfo() {
  const [formData, setFormData] = useState({
    permanentAddress: '',
    currentAddress: '',
    primaryMobile: '',
    alternateMobile: '',
    personalEmail: '',
    officialEmail: '',
    emergencyContactName: '',
    emergencyContactRelation: '',
    emergencyContactNumber: '',
    linkedIn: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert('Contact info submitted!');
    console.log(formData);
  };

  return (
    <div className="contact-info">
      <h2>📇 Contact Information</h2>

      <div className="form-grid">
        <label>Permanent Address</label>
        <textarea name="permanentAddress" onChange={handleChange}></textarea>

        <label>Current Address</label>
        <textarea name="currentAddress" onChange={handleChange}></textarea>

        <label>Primary Mobile Number</label>
        <input type="text" name="primaryMobile" onChange={handleChange} />

        <label>Alternate Mobile Number</label>
        <input type="text" name="alternateMobile" onChange={handleChange} />

        <label>Personal Email ID</label>
        <input type="email" name="personalEmail" onChange={handleChange} />

        <label>Official Email ID</label>
        <input type="email" name="officialEmail" onChange={handleChange} />

        <label>Emergency Contact Name</label>
        <input type="text" name="emergencyContactName" onChange={handleChange} />

        <label>Relationship</label>
        <input type="text" name="emergencyContactRelation" onChange={handleChange} />

        <label>Emergency Contact Number</label>
        <input type="text" name="emergencyContactNumber" onChange={handleChange} />

        <label>LinkedIn Profile</label>
        <input type="url" name="linkedIn" placeholder="https://linkedin.com/in/username" onChange={handleChange} />
      </div>

      <button onClick={handleSubmit}>Save Contact Info</button>
    </div>
  );
}

export default ContactInfo;