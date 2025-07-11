import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './LeaveStatus.css';

function LeaveStatus() {
  const [leaves, setLeaves] = useState([]);
  const userEmail = localStorage.getItem('userEmail');

  useEffect(() => {
    fetchMyLeaves();
  }, []);

  const fetchMyLeaves = async () => {
    try {
      const res = await axios.get(`http://localhost:8081/api/leave/user?email=${userEmail}`);
      setLeaves(res.data);
    } catch (err) {
      alert('Failed to load leave data');
    }
  };

  return (
    <div className="my-leave-status">
      <h2>My Leave Requests</h2>
      <table>
        <thead>
          <tr>
            <th>Type</th><th>From</th><th>To</th><th>Status</th><th>Message</th>
          </tr>
        </thead>
        <tbody>
          {leaves.map((leave) => (
            <tr key={leave.id}>
              <td>{leave.leaveType}</td>
              <td>{leave.fromDate}</td>
              <td>{leave.toDate}</td>
              <td>{leave.status}</td>
              <td>{leave.hrMessage || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaveStatus;
