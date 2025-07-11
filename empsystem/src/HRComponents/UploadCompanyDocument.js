// File: UploadCompanyDocument.js
import React, { useState } from 'react';
import './UploadCompanyDocument.css';

const UploadCompanyDocument = () => {
  const [documents, setDocuments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [form, setForm] = useState({
    name: '',
    type: '',
    file: null,
    effectiveDate: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setForm({ ...form, file: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDocuments([...documents, { ...form, id: Date.now() }]);
    alert('Document uploaded successfully');
    setForm({
      name: '',
      type: '',
      file: null,
      effectiveDate: '',
      description: '',
    });
  };

  const filteredDocs = documents.filter((doc) =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="upload-doc-container">
      <h2>📂 Upload Company Document</h2>
      <p className="doc-subtitle">Upload company-wide policies (PDF, DOCX)</p>

      <form onSubmit={handleSubmit} className="upload-doc-form">
        <label>📄 Document Name</label>
        <input name="name" value={form.name} onChange={handleChange} required />

        <label>📂 Document Type</label>
        <select name="type" value={form.type} onChange={handleChange} required>
          <option value="">Select Type</option>
          <option>Policy</option>
          <option>Template</option>
          <option>Compliance</option>
          <option>Handbook</option>
        </select>

        <label>📅 Effective Date</label>
        <input type="date" name="effectiveDate" value={form.effectiveDate} onChange={handleChange} required />

        <label>📝 Description</label>
        <textarea name="description" value={form.description} onChange={handleChange} rows="3" required />

        <label>📎 Upload File (PDF, DOCX)</label>
        <input type="file" name="file" onChange={handleChange} accept=".pdf,.doc,.docx" required />

        <button type="submit">Upload Document</button>
      </form>

      <div className="doc-list-section">
        <h3>📑 Uploaded Documents</h3>

        <input
          type="text"
          placeholder="🔍 Search by name..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {filteredDocs.length === 0 ? (
          <p>No documents found.</p>
        ) : (
          <ul className="doc-list">
            {filteredDocs.map((doc) => (
              <li key={doc.id}>
                <strong>{doc.name}</strong> ({doc.type}) <br />
                <span>📅 Effective Date: {doc.effectiveDate}</span><br />
                <span>📝 {doc.description}</span><br />
                <button onClick={() => alert('Download triggered for ' + doc.name)}>⬇ Download</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UploadCompanyDocument;