import React, { useState } from 'react';
import './AdminAnnouncementForm.css';

function AdminAnnouncementForm({ onSave }) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    department: 'All',
    location: '',
    attachment: null,
    schedule: '',
    publishNow: true,
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    alert('Announcement saved!');
    setFormData({
      title: '',
      content: '',
      department: 'All',
      location: '',
      attachment: null,
      schedule: '',
      publishNow: true,
    });
  };

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
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
        <div className="preview-box">
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

      <label className="checkbox-inline">
        <input
          type="checkbox"
          name="publishNow"
          checked={formData.publishNow}
          onChange={handleChange}
        />
        Publish Immediately
      </label>

      <button type="submit">✅ Save Announcement</button>
    </form>
  );
}

export default AdminAnnouncementForm;