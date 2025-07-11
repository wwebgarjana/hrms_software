import React from 'react';
import './TotalHours.css';

function TotalHours() {
  const data = [
    { date: '01/06/2025', in: '09:00 AM', out: '06:00 PM', total: '9h 0m' },
    { date: '02/06/2025', in: '09:10 AM', out: '06:05 PM', total: '8h 55m' },
  ];

  return (
    <div className="totalhours-container">
      <h2>Total Working Hours</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>Date</th><th>In</th><th>Out</th><th>Total</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, i) => (
            <tr key={i}>
              <td>{entry.date}</td><td>{entry.in}</td><td>{entry.out}</td><td>{entry.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TotalHours;