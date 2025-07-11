import React, { useState } from 'react';
import './SalaryStructure.css';

function SalaryStructure() {
  const [grossSalary] = useState(30000); // Fixed gross salary
  const [totalDays] = useState(30);      // Fixed month days
  const [presentDays, setPresentDays] = useState(0);
  const [paidLeaves, setPaidLeaves] = useState(0);

  const payableDays = parseInt(presentDays) + parseInt(paidLeaves);
  const unpaidLeaves = totalDays - payableDays;
  const perDaySalary = grossSalary / totalDays;
  const finalSalary = perDaySalary * payableDays;

  return (
    <div className="salary-structure">
      <h2>📊 Salary Structure (Based on Attendance)</h2>

      <div className="input-row">
        <label>Gross Salary (₹):</label>
        <input type="number" value={grossSalary} readOnly />
      </div>

      <div className="input-row">
        <label>Total Working Days:</label>
        <input type="number" value={totalDays} readOnly />
      </div>

      <div className="input-row">
        <label>Present Days:</label>
        <input
          type="number"
          value={presentDays}
          onChange={(e) => setPresentDays(e.target.value)}
        />
      </div>

      <div className="input-row">
        <label>Paid Leaves:</label>
        <input
          type="number"
          value={paidLeaves}
          onChange={(e) => setPaidLeaves(e.target.value)}
        />
      </div>

      <div className="output-section">
        <p><strong>Unpaid Leaves:</strong> {unpaidLeaves} days</p>
        <p><strong>Per Day Salary:</strong> ₹{perDaySalary.toFixed(2)}</p>
        <p><strong>Net Payable Days:</strong> {payableDays} days</p>
        <p className="final-pay"><strong>Final Salary:</strong> ₹{finalSalary.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default SalaryStructure;