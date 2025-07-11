// File: ManageEmployeeDocuments.js
import React, { useState } from 'react';
import './ManageEmployeeDocuments.css';

const ManageEmployeeDocuments = () => {
  const [documents, setDocuments] = useState([]);
  const [form, setForm] = useState({
    employeeId: '',
    employeeName: '',
    documentType: '',
    uploadDate: '',
    file: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDoc = {
      ...form,
      id: Date.now()
    };
    setDocuments([...documents, newDoc]);
    setForm({
      employeeId: '',
      employeeName: '',
      documentType: '',
      uploadDate: '',
      file: null
    });
    alert('Document uploaded successfully');
  };

  const handleDelete = (id) => {
    setDocuments(documents.filter(doc => doc.id !== id));
  };

  return (
    <div className="employee-documents-container">
      <h2>Manage Employee Documents</h2>

      <form className="employee-doc-form" onSubmit={handleSubmit}>
        <label>Employee ID</label>
        <input
          name="employeeId"
          value={form.employeeId}
          onChange={handleChange}
          required
        />

        <label>Employee Name</label>
        <input
          name="employeeName"
          value={form.employeeName}
          onChange={handleChange}
          required
        />

        <label>Document Type</label>
        <select name="documentType" value={form.documentType} onChange={handleChange} required>
          <option value="">Select</option>
          <option>Aadhaar</option>
          <option>PAN</option>
          <option>Resume</option>
          <option>Offer Letter</option>
          <option>Experience Letter</option>
        </select>

        <label>Upload File</label>
        <input type="file" name="file" onChange={handleChange} required />

        <label>Upload Date</label>
        <input type="date" name="uploadDate" value={form.uploadDate} onChange={handleChange} required />

        <button type="submit">Upload Document</button>
      </form>

      <div className="document-table">
        <h3>Uploaded Documents</h3>
        {documents.length === 0 ? (
          <p>No documents uploaded yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Document Type</th>
                <th>Upload Date</th>
                <th>Preview</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc) => (
                <tr key={doc.id}>
                  <td>{doc.employeeId}</td>
                  <td>{doc.employeeName}</td>
                  <td>{doc.documentType}</td>
                  <td>{doc.uploadDate}</td>
                  <td>
                    {doc.file && (
                      <a href={URL.createObjectURL(doc.file)} target="_blank" rel="noreferrer">
                        View
                      </a>
                    )}
                  </td>
                  <td>
                    <button className="delete-btn" onClick={() => handleDelete(doc.id)}>
                      Delete
                    </button>
                    {doc.file && (
                      <a href={URL.createObjectURL(doc.file)} download={doc.file.name}>
                        <button className="download-btn">Download</button>
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ManageEmployeeDocuments;