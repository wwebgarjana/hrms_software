import React from 'react';
import './Monthly.css';

function Monthly() {
  return (
    <div className="monthly-container">
      <h2>Download Monthly Report</h2>
      
      <div className="monthly-row">
        <label>Select month:</label>
        <select>
          <option>June 2025</option>
          <option>May 2025</option>
          <option>April 2025</option>
        </select>
      </div>

      <div className="monthly-buttons">
        <button>Generate Report</button>
        <button>Download PDF</button>
        <button>Download Excel</button>
      </div>
    </div>
  );
}

export default Monthly;
