// import React from 'react';
// import './StatusReport.css';

// function StatusReport() {
//   const statusData = [
//     { date: '01/06/2025', status: 'Present' },
//     { date: '02/06/2025', status: 'Absent' },
//     { date: '03/06/2025', status: 'Leave' },
//   ];

//   return (
//     <div className="status-container">
//       <h2>Status Report</h2>
//       <table className="data-table">
//         <thead>
//           <tr>
//             <th>Date</th><th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {statusData.map((entry, i) => (
//             <tr key={i}>
//               <td>{entry.date}</td><td>{entry.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default StatusReport;

import React, { useEffect, useState } from 'react';
import './StatusReport.css';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext'; // 🔐 import context for email

function StatusReport() {
  const { userEmail } = useAuth(); // ✅ get logged-in user's email
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchAttendance = async () => {
      if (!userEmail) return;

      try {
        const response = await axios.get(`http://localhost:8081/api/attendance/email/${userEmail}`);
        setRecords(response.data);
      } catch (error) {
        console.error('Error fetching attendance:', error);
      }
    };

    fetchAttendance();
  }, [userEmail]);

  return (
    <div className="hr-attendance-container">
      <h2>My Attendance Report</h2>

      <table className="hr-table">
        <thead>
          <tr>
            {/* <th>ID</th> */}
            {/* <th>Email</th> */}
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
                {/* <td>{rec.id}</td> */}
                {/* <td>{rec.email}</td> */}
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

export default StatusReport;
