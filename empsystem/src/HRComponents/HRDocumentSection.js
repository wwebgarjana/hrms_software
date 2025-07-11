import React, { useState } from 'react';
import axios from 'axios';
import './HRDocumentSection.css';
import { Link } from 'react-router-dom';

export default function HRDocumentSection() {
  const [email, setEmail] = useState('');
  const [offerLetter, setOfferLetter] = useState(null);
  const [idCard, setIdCard] = useState(null);
  const [hrPolicies, setHrPolicies] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!offerLetter || !idCard) {
      alert('Please select both Offer Letter and ID Card files.');
      return;
    }

    const formData = new FormData();
    formData.append('email', email);
    formData.append('offerLetter', offerLetter);
    formData.append('idCard', idCard);
    formData.append('hrPolicies', hrPolicies);

    try {
      await axios.post('http://localhost:8081/api/docs/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      alert('Document details uploaded successfully!');
      // Clear form
      setEmail('');
      setOfferLetter(null);
      setIdCard(null);
      setHrPolicies('');
      // Reset file input manually
      document.getElementById('offerLetter').value = '';
      document.getElementById('idCard').value = '';
    } catch (error) {
      console.error('Error uploading documents:', error);
      alert('Failed to upload document data');
    }
  };

  return (
    <div>
       {/* 🔙 Back to Dashboard */}
      <div className="hrleave-back-wrapper">
        <Link to="/hr" className="hrleave-back-link">← Back to Dashboard</Link>
      </div>
    <div className="hr-upload">
      <h2>📤 Upload Documents for Employee</h2>
      <form onSubmit={handleSubmit}>

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Choose Offer Letter PDF</label>
        <input
          type="file"
          id="offerLetter"
          name="offerLetter"
          accept="application/pdf"
          onChange={(e) => setOfferLetter(e.target.files[0])}
          required
        />

        <label>Choose ID Card PDF</label>
        <input
          type="file"
          id="idCard"
          name="idCard"
          accept="application/pdf"
          onChange={(e) => setIdCard(e.target.files[0])}
          required
        />

        <label>HR Policies (Text)</label>
        <textarea
          name="hrPolicies"
          value={hrPolicies}
          onChange={(e) => setHrPolicies(e.target.value)}
        />

        <button type="submit">Upload Documents</button>
      </form>
    </div>
    </div>
  );
}
