import React, { useState } from 'react';
import './HRNotification.css';
import { Link } from 'react-router-dom';

function HRNotification({ onSave }) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    department: 'All',
    location: '',
    attachment: null,
    schedule: '',
    publishNow: true,
  });

  const [localAnnouncements, setLocalAnnouncements] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else if (type === 'file') {
      setFormData({ ...formData, attachment: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formPayload = new FormData();
    formPayload.append('title', formData.title);
    formPayload.append('content', formData.content);
    formPayload.append('department', formData.department);
    formPayload.append('location', formData.location);
    formPayload.append('publishNow', formData.publishNow);
    if (formData.attachment) {
      formPayload.append('attachment', formData.attachment);
    }

    try {
      const response = await fetch('http://localhost:8081/api/announcements/add', {
        method: 'POST',
        body: formPayload,
      });

      if (response.ok) {
        const savedAnnouncement = await response.json();
        setLocalAnnouncements([savedAnnouncement, ...localAnnouncements]);

        alert('✅ Announcement send successfully');
        setFormData({
          title: '',
          content: '',
          department: 'All',
          location: '',
          attachment: null,
          schedule: '',
          publishNow: true,
        });
      } else {
        alert('❌ Failed to save. Server error.');
      }
    } catch (error) {
      console.error('Error saving announcement:', error);
      alert('❌ Network or server error.');
    }
  };

  return (
    <div>
           {/* 🔙 Back to Dashboard */}
          <div className="hrleave-back-wrapper">
            <Link to="/hr" className="hrleave-back-link">← Back to Dashboard</Link>
          </div>
    <div className="hrn-wrapper">
      <form className="hrn-form" onSubmit={handleSubmit}>
        <h2>🛠️ Admin: Add/Edit Announcement</h2>

        <label>📌 Title:</label>
        <input name="title" value={formData.title} onChange={handleChange} required />

        <label>📝 Content:</label>
        <textarea name="content" value={formData.content} onChange={handleChange} required />

        <label>🏢 Department:</label>
        <select name="department" value={formData.department} onChange={handleChange}>
          <option value="All">All</option>
          <option value="HR">HR</option>
          <option value="Sales">Sales</option>
          <option value="IT">IT</option>
        </select>

        <label>📍 Location:</label>
        <input name="location" value={formData.location} onChange={handleChange} required />

        <label>📎 Attachment:</label>
        <input type="file" name="attachment" onChange={handleChange} accept=".pdf,.doc,.docx" />

        {formData.attachment && (
          <div className="hrn-preview">
            📄 Preview: <strong>{formData.attachment.name}</strong>
          </div>
        )}

        <label>
          ⏰ Schedule (optional):
          <input
            type="datetime-local"
            name="schedule"
            value={formData.schedule}
            onChange={handleChange}
            disabled={formData.publishNow}
          />
        </label>

        {/* <label className="hrn-checkbox">
          <input
            type="checkbox"
            name="publishNow"
            checked={formData.publishNow}
            onChange={handleChange}
          />
          Publish Immediately
        </label> */}

        <button type="submit">✅ Send Announcement </button>
      </form>

      {/* <div className="hrn-submitted">
        <h3>📢 Submitted Announcements</h3>
        <div className="hrn-scroll-box">
          {localAnnouncements.map((a, index) => (
            <div key={index} className="hrn-card">
              <h4>{a.title}</h4>
              <p>{a.content}</p>
              <p>🏢 {a.department} | 📍 {a.location}</p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
    </div>
  );
}

export default HRNotification;
