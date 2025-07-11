import React from 'react';
import './LeaveBalance.css';

function LeaveBalance() {
  return (
    <div className="leave-balance">
      <h2>Leave Balance</h2>
      <ul>
        <li><strong>Sick Leaves:</strong> 4 remaining</li>
        <li><strong>Casual Leaves:</strong> 2 remaining</li>
        <li><strong>Paid Leaves:</strong> 5 remaining</li>
        <li><strong>Unpaid Leaves:</strong> Unlimited</li>
      </ul>
    </div>
  );
}

export default LeaveBalance;