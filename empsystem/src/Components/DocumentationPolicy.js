import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DocumentationPolicy.css';
import { useAuth } from '../contexts/AuthContext';

export default function DocumentationPolicy() {
  const { userEmail } = useAuth();
  const [docs, setDocs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!userEmail) return;

    const fetchDocs = async () => {
      try {
        const email = userEmail.toLowerCase();
        const res = await axios.get(`http://localhost:8081/api/docs/employee?email=${email}`);
        if (res.data) {
          setDocs(res.data);
        } else {
          setError('No documents found for your account.');
        }
      } catch (err) {
        setError('Failed to fetch documents.');
      } finally {
        setLoading(false);
      }
    };

    fetchDocs();
  }, [userEmail]);

  if (!userEmail) return <p>Please log in to view your documents.</p>;
  if (loading) return <p>Loading documents...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="employee-docs">
      <h2>📑 Your Documents</h2>

      <div className="doc-section">
        <h3>Offer Letter</h3>
        {docs.offerLetterAvailable ? (
          <a
            href={`http://localhost:8081/api/docs/download/offer-letter?email=${userEmail}`}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            📄 Download Offer Letter (PDF)
          </a>
        ) : (
          <p>Not uploaded</p>
        )}
      </div>

      <div className="doc-section">
        <h3>ID Card</h3>
        {docs.idCardAvailable ? (
          <a
            href={`http://localhost:8081/api/docs/download/id-card?email=${userEmail}`}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            🆔 Download ID Card (PDF)
          </a>
        ) : (
          <p>Not uploaded</p>
        )}
      </div>

      <div className="doc-section">
        <h3>HR Policies</h3>
        {docs.hrPolicies ? <pre>{docs.hrPolicies}</pre> : <p>No policy uploaded</p>}
      </div>
    </div>
  );
}
