import React, { useState } from 'react';
import './RejectedLeaveHRL3.css';

const initialRejectedLeaves = [
  {
    id: 1,
    employee: 'Pooja Lakhangave',
    empId: 'EMP001',
    department: 'HR',
    leaveType: 'Sick',
    from: '2025-07-01',
    to: '2025-07-03',
    reason: 'Fever and cold',
    rejectionReason: 'Insufficient medical proof',
    rejectedBy: 'Admin01',
    rejectedOn: '2025-07-02',
  },
  {
    id: 2,
    employee: 'Rahul Verma',
    empId: 'EMP002',
    department: 'IT',
    leaveType: 'Casual',
    from: '2025-07-05',
    to: '2025-07-06',
    reason: 'Family function',
    rejectionReason: 'Too many leaves in same period',
    rejectedBy: 'HR01',
    rejectedOn: '2025-07-05',
  },
];

function RejectedLeaveHRL3() {
  const [filter, setFilter] = useState({ department: '', employee: '', leaveType: '', from: '', to: '' });

  const filteredLeaves = initialRejectedLeaves.filter((leave) => {
    return (
      (filter.department === '' || leave.department === filter.department) &&
      (filter.employee === '' || leave.employee.toLowerCase().includes(filter.employee.toLowerCase())) &&
      (filter.leaveType === '' || leave.leaveType === filter.leaveType) &&
      (filter.from === '' || leave.rejectedOn >= filter.from) &&
      (filter.to === '' || leave.rejectedOn <= filter.to)
    );
  });

  return (
    <div className="rejected-container">
      <h2>Rejected Leave Records</h2>

      <div className="filter-section">
        <select onChange={(e) => setFilter({ ...filter, department: e.target.value })}>
          <option value="">All Departments</option>
          <option value="HR">HR</option>
          <option value="IT">IT</option>
          <option value="Marketing">Marketing</option>
        </select>
        <input
          type="text"
          placeholder="Search Employee"
          onChange={(e) => setFilter({ ...filter, employee: e.target.value })}
        />
        <select onChange={(e) => setFilter({ ...filter, leaveType: e.target.value })}>
          <option value="">All Leave Types</option>
          <option value="Sick">Sick</option>
          <option value="Casual">Casual</option>
          <option value="Paid">Paid</option>
        </select>
        <input type="date" onChange={(e) => setFilter({ ...filter, from: e.target.value })} />
        <input type="date" onChange={(e) => setFilter({ ...filter, to: e.target.value })} />
      </div>

      {filteredLeaves.map((leave) => (
        <div key={leave.id} className="leave-card">
          <p><strong>Employee:</strong> {leave.employee} ({leave.empId})</p>
          <p><strong>Department:</strong> {leave.department}</p>
          <p><strong>Leave Type:</strong> {leave.leaveType}</p>
          <p><strong>Date Range:</strong> {leave.from} to {leave.to}</p>
          <p><strong>Reason:</strong> {leave.reason}</p>
          <p><strong>Rejection Reason:</strong> {leave.rejectionReason}</p>
          <p><strong>Rejected By:</strong> {leave.rejectedBy}</p>
          <p><strong>Rejected On:</strong> {leave.rejectedOn}</p>
        </div>
      ))}
    </div>
  );
}

export default RejectedLeaveHRL3;