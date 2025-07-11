import React, { useEffect, useState } from 'react';
import './OtherClaims.css';

function OtherClaims() {
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/api/other-claims')
      .then(res => res.json())
      .then(data => setClaims(data))
      .catch(err => console.error('Error fetching claims:', err));
  }, []);

  const handleApprove = (claimId) => {
    fetch(`http://localhost:8081/api/other-claims/approve/${claimId}`, {
      method: 'PUT',
    })
      .then(() => {
        alert(`Claim ${claimId} approved!`);
        refreshClaims();
      })
      .catch(err => console.error('Approve error:', err));
  };

  const handleReject = (claimId) => {
    fetch(`http://localhost:8081/api/other-claims/reject/${claimId}`, {
      method: 'PUT',
    })
      .then(() => {
        alert(`Claim ${claimId} rejected.`);
        refreshClaims();
      })
      .catch(err => console.error('Reject error:', err));
  };

  const refreshClaims = () => {
    fetch('http://localhost:8081/api/other-claims')
      .then(res => res.json())
      .then(data => setClaims(data));
  };

  return (
    <div className="claims-container">
      <h2>🗂️ All Other Employee Claims</h2>
      <table className="claims-table">
        <thead>
          <tr>
            <th>Claim ID</th>
            <th>Employee</th>
            <th>Title</th>
            <th>Incident Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Submitted On</th>
            <th>Approved By</th>
            <th>Payout Date</th>
            <th>📎 Proof</th>
            <th>✅ Actions</th>
          </tr>
        </thead>
        <tbody>
          {claims.map((claim, i) => {
            const fileUrl = `http://localhost:8081/api/other-claims/proof/${claim.claimId}`;
            return (
              <tr key={i}>
                <td>{claim.claimId}</td>
                <td>{claim.name}<br />{claim.designation}</td>
                <td>{claim.title}</td>
                <td>{claim.incidentDate}</td>
                <td>₹{claim.amount}</td>
                <td>{claim.status}</td>
                <td>{claim.submittedOn}</td>
                <td>{claim.approvedBy || '-'}</td>
                <td>{claim.payoutDate || '-'}</td>
                <td>
                  {claim.proofFileName ? (
                    <a href={fileUrl} download target="_blank" rel="noopener noreferrer">
                      Download
                    </a>
                  ) : (
                    <span style={{ color: 'gray' }}>No file</span>
                  )}
                </td>
                <td>
                  {claim.status === 'Pending' ? (
                    <>
                      <button className="approve-btn" onClick={() => handleApprove(claim.claimId)}>Approve</button>
                      <button className="reject-btn" onClick={() => handleReject(claim.claimId)}>Reject</button>
                    </>
                  ) : (
                    <span>{claim.status}</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default OtherClaims;