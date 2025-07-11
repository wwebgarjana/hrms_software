// File: HRRaise.js
import React, { useEffect, useState } from 'react';
import './HRRaise.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function HRRaise() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/api/hr/tickets')
      .then((res) => setTickets(res.data))
      .catch((err) => console.error("Error fetching tickets:", err));
  }, []);

  return (
     <div>
           {/* 🔙 Back to Dashboard */}
          <div className="hrleave-back-wrapper">
            <Link to="/hr" className="hrleave-back-link">← Back to Dashboard</Link>
          </div>
    <div className="hr-raise-container">
      <h2>🎫 Raised Tickets</h2>
      {tickets.length === 0 ? (
        <p>No tickets available.</p>
      ) : (
        <table className="ticket-table">
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Email</th>
              <th>Issue Description</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, i) => (
              <tr key={i}>
                <td>{ticket.empId}</td>
                <td>{ticket.empName}</td>
                <td>{ticket.email}</td>
                <td>{ticket.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
     </div>
  );
}
