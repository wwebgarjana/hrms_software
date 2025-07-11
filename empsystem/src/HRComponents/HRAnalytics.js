// File: PayrollModule/HRAnalyticsModule.js
import React, { useState } from 'react';
import './HRAnalytics.css';

const HRAnalytics = () => {
  const [filters, setFilters] = useState({
    month: '',
    year: '',
    department: '',
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const exportReport = (type) => {
    alert(`Exporting ${type} report...`);
  };

  return (
    <div className="analytics-container">
      <h2>HR Analytics Dashboard</h2>

      {/* Filters */}
      <div className="filters">
        <div>
          <label>Month</label>
          <select name="month" onChange={handleChange}>
            <option value="">Select</option>
            <option>January</option>
            <option>February</option>
            <option>March</option>
          </select>
        </div>
        <div>
          <label>Year</label>
          <select name="year" onChange={handleChange}>
            <option value="">Select</option>
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>
          </select>
        </div>
        <div>
          <label>Department</label>
          <select name="department" onChange={handleChange}>
            <option value="">Select</option>
            <option>HR</option>
            <option>Engineering</option>
            <option>Finance</option>
          </select>
        </div>
        <button onClick={() => exportReport('PDF')}>Export PDF</button>
        <button onClick={() => exportReport('Excel')}>Export Excel</button>
      </div>

      {/* 1. Attendance Trends */}
      <div className="section">
        <h3>1. Monthly Attendance Trends</h3>
        <p>Present vs Leave vs Absent over the months</p>
        <input placeholder="Graph (dummy placeholder)" readOnly />
      </div>

      {/* 2. Top Punctual / Irregular Employees */}
      <div className="section">
        <h3>2. Top Punctual vs Irregular Employees</h3>
        <label>Punctual Employees</label>
        <input placeholder="Pooja Lakhangave, Aditya Verma" readOnly />
        <label>Irregular Employees</label>
        <input placeholder="Ravi Kumar, Sneha Patil" readOnly />
      </div>

      {/* 3. Department-wise Summary */}
      <div className="section">
        <h3>3. Department-wise Attendance Summary</h3>
        <input placeholder="Engineering - 95% | HR - 88% | Finance - 91%" readOnly />
      </div>

      {/* 4. Leave Type Breakdown */}
      <div className="section">
        <h3>4. Leave Type Breakdown</h3>
        <input placeholder="Sick: 20%, Casual: 30%, Earned: 35%, Maternity: 15%" readOnly />
      </div>

      {/* 5. Performance vs Attendance */}
      <div className="section">
        <h3>5. Performance vs Attendance Correlation</h3>
        <label>Employee</label>
        <input placeholder="Name" />
        <label>Present Days</label>
        <input placeholder="Number of Days" />
        <label>Performance Score</label>
        <input placeholder="Out of 10" />
      </div>

      {/* 6. Export Summary */}
      <div className="section">
        <h3>6. Export Summary</h3>
        <p>Download or email analytics summary</p>
        <button onClick={() => exportReport('PDF')}>Download PDF</button>
        <button onClick={() => exportReport('Excel')}>Download Excel</button>
      </div>
    </div>
  );
};

export default HRAnalytics;