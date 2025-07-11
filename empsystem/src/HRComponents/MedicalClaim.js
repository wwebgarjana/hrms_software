import React, { useEffect, useState } from 'react';
import './MedicalClaim.css';

function MedicalClaim() {
  const [claims, setClaims] = useState([]);
  const BUDGET_LIMIT = 25000;

  useEffect(() => {
    fetch('http://localhost:8081/api/medical-claims')
      .then(res => res.json())
      .then(data => setClaims(data))
      .catch(err => console.error('Error fetching claims:', err));
  }, []);

  const handleAction = async (claimId, action) => {
    const updatedStatus = action === 'approve' ? 'Approved' : 'Rejected';

    try {
      const res = await fetch(`http://localhost:8081/api/medical-claims/${claimId}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: updatedStatus,
          approvedBy: 'HR Team',
          approvedOn: new Date().toISOString().slice(0, 10)
        })
      });

      if (res.ok) {
        setClaims(prev =>
          prev.map(claim =>
            claim.claimId === claimId
              ? { ...claim, status: updatedStatus, approvedBy: 'HR Team', approvedOn: new Date().toISOString().slice(0, 10) }
              : claim
          )
        );
      } else {
        alert('❌ Failed to update status.');
      }
    } catch (error) {
      console.error('Error updating claim:', error);
    }
  };

  return (
    <div className="claim-container">
      <h2>📋 All Employee Medical Claims</h2>
      <table className="claim-table">
        <thead>
          <tr>
            <th>Claim ID</th>
            <th>Employee ID</th>
            <th>Name & Dept</th>
            <th>Medical Type</th>
            <th>Doctor/Hospital</th>
            <th>Treatment Date</th>
            <th>Claim Amount</th>
            <th>Remarks</th>
            <th>Policy #</th>
            <th>Status</th>
            <th>Approved By</th>
            <th>Approved On</th>
            <th>Note</th>
            <th>📎 Bill</th>
            <th>✅ Action</th>
          </tr>
        </thead>
        <tbody>
          {claims.map((claim, i) => {
            const isAboveLimit = parseFloat(claim.claimAmount) > BUDGET_LIMIT;
            const fileUrl = claim.claimId
              ? `http://localhost:8081/api/medical-claims/file/${claim.claimId}`
              : null;

            return (
              <tr key={i}>
                <td>{claim.claimId}</td>
                <td>{claim.employeeId}</td>
                <td>{claim.name}<br />{claim.department}</td>
                <td>{claim.medicalType}</td>
                <td>{claim.doctorName}</td>
                <td>{claim.treatmentDate}</td>
                <td>₹{claim.claimAmount}</td>
                <td>{claim.remarks || '-'}</td>
                <td>{claim.policyNumber || '-'}</td>
                <td>{claim.status}</td>
                <td>{claim.approvedBy || '-'}</td>
                <td>{claim.approvedOn || '-'}</td>
                <td style={{ fontStyle: 'italic', color: isAboveLimit ? 'orange' : 'green' }}>
                  {isAboveLimit ? 'Above budget – needs HR approval' : 'Within budget'}
                </td>
                <td>
                  {fileUrl ? (
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
                      <button onClick={() => handleAction(claim.claimId, 'approve')} style={{ color: 'green' }}>
                        Approve
                      </button>
                      <button onClick={() => handleAction(claim.claimId, 'reject')} style={{ color: 'red', marginLeft: '5px' }}>
                        Reject
                      </button>
                    </>
                  ) : (
                    <span>—</span>
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

export default MedicalClaim;