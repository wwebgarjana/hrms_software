import React, { useState } from 'react';
import './HrPersonalInfo.css';

function HrPersonalInfo() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    gender: '',
    maritalStatus: '',
    bloodGroup: '',
    phone: '',
    aadhar: ''
  });

  const [profileImageFile, setProfileImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [savedData, setSavedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "profileImageUrl" && files && files[0]) {
      setProfileImageFile(files[0]);
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = () => {
    const form = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });

    if (profileImageFile) {
      form.append("profileImageBlob", profileImageFile);
    }

    fetch("http://localhost:8081/api/personal-info/save-multipart", {
      method: "POST",
      body: form
    })
      .then(res => {
        if (res.ok) {
          alert("✅ Info saved");
          setSavedData({ ...formData, image: preview });
        } else {
          alert("❌ Failed to save");
        }
      })
      .catch(err => console.error("Upload error:", err));
  };

  return (
    <div className="hrp-container">
      <h2 className="hrp-title">👥 HR - Fill Employee Info</h2>

      {preview && (
        <div className="hrp-image-preview">
          <img src={preview} alt="Preview" className="hrp-image-circle" />
        </div>
      )}

      <input className="hrp-input" name="fullName" placeholder="Full Name" onChange={handleChange} />
      <input className="hrp-input" name="email" placeholder="Email" onChange={handleChange} />
      <input className="hrp-input" name="phone" placeholder="Phone" onChange={handleChange} />
      <input className="hrp-input" name="aadhar" placeholder="Aadhar" onChange={handleChange} />

      <select className="hrp-input" name="gender" onChange={handleChange}>
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>

      <select className="hrp-input" name="maritalStatus" onChange={handleChange}>
        <option value="">Select Marital Status</option>
        <option>Single</option>
        <option>Married</option>
      </select>

      <select className="hrp-input" name="bloodGroup" onChange={handleChange}>
        <option value="">Blood Group</option>
        <option>A+</option><option>A-</option>
        <option>B+</option><option>B-</option>
        <option>O+</option><option>O-</option>
      </select>

      <label className="hrp-label">📷 Upload Profile Image</label>
      <input type="file" name="profileImageUrl" accept="image/*" onChange={handleChange} className="hrp-input" />

      <button type="button" onClick={handleSubmit} className="hrp-button">
        Save
      </button>

      {savedData && (
        <div className="hrp-info-box">
          <h3>📋 Submitted Employee Info</h3>
          {savedData.image && (
            <img src={savedData.image} alt="Uploaded" className="hrp-info-image" />
          )}
          <p><strong>Full Name:</strong> {savedData.fullName}</p>
          <p><strong>Email:</strong> {savedData.email}</p>
          <p><strong>Phone:</strong> {savedData.phone}</p>
          <p><strong>Aadhaar:</strong> {savedData.aadhar}</p>
          <p><strong>Gender:</strong> {savedData.gender}</p>
          <p><strong>Marital Status:</strong> {savedData.maritalStatus}</p>
          <p><strong>Blood Group:</strong> {savedData.bloodGroup}</p>
        </div>
      )}
    </div>
  );
}

export default HrPersonalInfo;
