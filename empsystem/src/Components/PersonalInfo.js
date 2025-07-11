import React, { useEffect, useState } from 'react';
import './PersonalInfo.css';

function PersonalInfo() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    gender: '',
    maritalStatus: '',
    bloodGroup: '',
    phone: '',
    aadhar: '',
    profileImageUrl: ''
  });

  const [imageUrl, setImageUrl] = useState(null);
  const [saved, setSaved] = useState(false);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (!email) return;

    fetch(`http://localhost:8081/api/personal-info/get-by-email/${email}`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          setFormData(data);
          setImageUrl(`http://localhost:8081/api/personal-info/profile-image/${data.email}`);
        }
      })
      .catch(err => console.error("❌ Error fetching personal info:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => {
    setEditMode(true);
    setSaved(false);
  };

  const handleSubmit = () => {
    fetch("http://localhost:8081/api/personal-info/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(res => {
        if (res.ok) {
          setSaved(true);
          setEditMode(false);
        } else {
          alert("❌ Failed to save");
        }
      })
      .catch(err => console.error("Save error:", err));
  };

  return (
    <div className="emp-container">
      <h2 className="emp-title">👤 Employee Personal Info</h2>

      {imageUrl ? (
        <div className="emp-image-preview">
          <img src={imageUrl} alt="Profile" className="emp-profile-img" />
        </div>
      ) : (
        <p className="emp-no-image">No image uploaded</p>
      )}

      <div className="emp-form-card">
        <label>Full Name</label>
        <input name="fullName" value={formData.fullName} disabled />

        <label>Email</label>
        <input name="email" value={formData.email} disabled />

        <label>Aadhaar</label>
        <input name="aadhar" value={formData.aadhar} disabled />

        <label>Gender</label>
        <input name="gender" value={formData.gender} disabled />

        <label>Marital Status</label>
        <select
          name="maritalStatus"
          value={formData.maritalStatus}
          onChange={handleChange}
          disabled={!editMode}
        >
          <option value="">Select Marital Status</option>
          <option>Single</option>
          <option>Married</option>
        </select>

        <label>Blood Group</label>
        <select
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
          disabled={!editMode}
        >
          <option value="">Blood Group</option>
          <option>A+</option><option>A-</option><option>B+</option>
          <option>B-</option><option>O+</option><option>O-</option>
        </select>

        <label>Phone</label>
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          disabled={!editMode}
        />

        {!editMode ? (
          <button onClick={handleEdit} className="emp-btn edit-btn">✏️ Edit</button>
        ) : (
          <button onClick={handleSubmit} className="emp-btn save-btn">💾 Save Changes</button>
        )}

        {saved && <div className="emp-msg-box">✅ Changes saved successfully!</div>}
      </div>

      {saved && (
        <div className="emp-display-box">
          <h3>📋 Updated Information</h3>
          <p><strong>Full Name:</strong> {formData.fullName}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <p><strong>Aadhaar:</strong> {formData.aadhar}</p>
          <p><strong>Gender:</strong> {formData.gender}</p>
          <p><strong>Marital Status:</strong> {formData.maritalStatus}</p>
          <p><strong>Blood Group:</strong> {formData.bloodGroup}</p>
        </div>
      )}
    </div>
  );
}

export default PersonalInfo;
