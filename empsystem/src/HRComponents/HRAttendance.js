import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HRAttendance.css'; // make sure styles match new class names

function HRAttendance() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/api/attendance/all')
      .then((res) => res.json())
      .then((data) => setRecords(data))
      .catch((err) => console.error('Error fetching attendance:', err));
  }, []);

  return (
    <div className="hratt-container">
      {/* 🔙 Back to Dashboard Button */}
      <div className="hratt-back-btn-wrapper">
        <Link to="/hr" className="hratt-back-btn">← Back to Dashboard</Link>
      </div>

      <h2>All Employee Attendance Records</h2>

      <table className="hratt-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Date</th>
            <th>Clock In</th>
            <th>Clock Out</th>
            <th>Total Hours</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {records.length === 0 ? (
            <tr><td colSpan="7">No records found</td></tr>
          ) : (
            records.map((rec, i) => (
              <tr key={i}>
                <td>{rec.id}</td>
                <td>{rec.email}</td>
                <td>{rec.date}</td>
                <td>{rec.inTime || '-'}</td>
                <td>{rec.outTime || '-'}</td>
                <td>{rec.totalHours || '-'}</td>
                <td>{rec.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default HRAttendance;
