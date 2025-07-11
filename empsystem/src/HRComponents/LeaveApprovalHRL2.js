import React, { useState } from 'react';
import './LeaveApprovalHRL2.css';

const initialRequests = [
  {
    id: 1,
    employee: 'Pooja Lakhangave',
    empId: 'EMP001',
    department: 'HR',
    leaveType: 'Sick',
    from: '2025-07-01',
    to: '2025-07-03',
    reason: 'Fever and cold',
    status: 'Pending',
    document: 'medical-certificate.pdf',
    comment: '',
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
    status: 'Pending',
    document: '',
    comment: '',
  },
];

function LeaveApprovalHRL2() {
  const [requests, setRequests] = useState(initialRequests);
  const [filter, setFilter] = useState({ department: '', type: '', status: '', from: '', to: '' });

  const handleAction = (id, action, comment = '') => {
    const updated = requests.map((req) => {
      if (req.id === id) {
        return { ...req, status: action, comment };
      }
      return req;
    });
    setRequests(updated);
  };

  const filteredRequests = requests.filter((req) => {
    return (
      (filter.department === '' || req.department === filter.department) &&
      (filter.type === '' || req.leaveType === filter.type) &&
      (filter.status === '' || req.status === filter.status) &&
      (filter.from === '' || req.from >= filter.from) &&
      (filter.to === '' || req.to <= filter.to)
    );
  });

  return (
    <div className="approval-container">
      <h2>Leave Approval Panel</h2>

      <div className="filter-panel">
        <select onChange={(e) => setFilter({ ...filter, department: e.target.value })}>
          <option value="">All Departments</option>
          <option value="HR">HR</option>
          <option value="IT">IT</option>
          <option value="Marketing">Marketing</option>
        </select>
        <select onChange={(e) => setFilter({ ...filter, type: e.target.value })}>
          <option value="">All Leave Types</option>
          <option value="Sick">Sick</option>
          <option value="Casual">Casual</option>
          <option value="Paid">Paid</option>
        </select>
        <select onChange={(e) => setFilter({ ...filter, status: e.target.value })}>
          <option value="">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
        <input type="date" onChange={(e) => setFilter({ ...filter, from: e.target.value })} />
        <input type="date" onChange={(e) => setFilter({ ...filter, to: e.target.value })} />
      </div>

      {filteredRequests.map((req) => (
        <div key={req.id} className="request-card">
          <p><strong>Employee:</strong> {req.employee} ({req.empId})</p>
          <p><strong>Department:</strong> {req.department}</p>
          <p><strong>Leave Type:</strong> {req.leaveType}</p>
          <p><strong>Date Range:</strong> {req.from} to {req.to}</p>
          <p><strong>Reason:</strong> {req.reason}</p>
          {req.document && <p><strong>Document:</strong> <a href={`/${req.document}`} target="_blank" rel="noreferrer">{req.document}</a></p>}

          <div className="approval-actions">
            {req.status === 'Pending' ? (
              <>
                <textarea
                  placeholder="Comment (if rejecting)"
                  value={req.comment}
                  onChange={(e) => {
                    const comment = e.target.value;
                    setRequests((prev) => prev.map((r) => r.id === req.id ? { ...r, comment } : r));
                  }}
                />
                <button className="approve-btn" onClick={() => handleAction(req.id, 'Approved')}>Approve ✅</button>
                <button className="reject-btn" onClick={() => handleAction(req.id, 'Rejected', req.comment)}>Reject ❌</button>
              </>
            ) : (
              <p><strong>Status:</strong> {req.status} {req.status === 'Rejected' && `(Comment: ${req.comment})`}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default LeaveApprovalHRL2;