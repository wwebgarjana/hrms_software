import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HRLeavePanel.css';

function HRLeavePanel() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    fetchLeaves();
  }, []);

  const fetchLeaves = async () => {
    try {
      const res = await axios.get('http://localhost:8081/api/leave/all');
      setLeaves(res.data);
    } catch (error) {
      console.error('Error fetching leaves:', error);
    }
  };

  const handleUpdate = async (id, status) => {
    const msg = prompt(`Enter message for ${status} leave:`);

    try {
      await axios.put(`http://localhost:8081/api/leave/status/${id}`, {
        status,
        hrMessage: msg || '',
      });
      fetchLeaves();
    } catch (err) {
      alert('Failed to update status');
    }
  };

  const pending = leaves.filter(l => l.status === 'Pending');
  const approved = leaves.filter(l => l.status === 'Approved');
  const rejected = leaves.filter(l => l.status === 'Rejected');

  return (
    <div className="hr-leave-panel">
      <h2>⏳ Pending Leave Requests</h2>
      {pending.length === 0 ? (
        <p>No pending requests</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Type</th>
              <th>From</th>
              <th>To</th>
              <th>Reason</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {pending.map((leave) => (
              <tr key={leave.id}>
                <td>{leave.email || <i>Not Available</i>}</td>
                <td>{leave.leaveType}</td>
                <td>{leave.fromDate}</td>
                <td>{leave.toDate}</td>
                <td>{leave.reason}</td>
                <td style={{ color: 'orange' }}>⏳ Pending</td>
                <td>
                  <button
                    onClick={() => handleUpdate(leave.id, 'Approved')}
                    style={{ backgroundColor: 'green', color: 'white', marginRight: '10px' }}
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleUpdate(leave.id, 'Rejected')}
                    style={{ backgroundColor: 'red', color: 'white' }}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <h3>✅ Approved Leaves</h3>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Type</th>
            <th>From</th>
            <th>To</th>
            <th>Reason</th>
            <th>HR Message</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {approved.map((l) => (
            <tr key={l.id}>
              <td>{l.email}</td>
              <td>{l.leaveType}</td>
              <td>{l.fromDate}</td>
              <td>{l.toDate}</td>
              <td>{l.reason}</td>
              <td>{l.hrMessage || '-'}</td>
              <td style={{ color: 'green' }}>✔️ Approved</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>❌ Rejected Leaves</h3>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Type</th>
            <th>From</th>
            <th>To</th>
            <th>Reason</th>
            <th>HR Message</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rejected.map((l) => (
            <tr key={l.id}>
              <td>{l.email}</td>
              <td>{l.leaveType}</td>
              <td>{l.fromDate}</td>
              <td>{l.toDate}</td>
              <td>{l.reason}</td>
              <td>{l.hrMessage || '-'}</td>
              <td style={{ color: 'red' }}>❌ Rejected</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HRLeavePanel;
