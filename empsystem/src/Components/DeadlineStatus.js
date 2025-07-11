import React from 'react';
import './DeadlineStatus.css';

function DeadlineStatus() {
  const tasks = [
    {
      id: 1,
      name: 'UI Redesign',
      startDate: '01 July 2025',
      deadline: '10 July 2025',
      status: 'In Progress',
      progress: 60,
      assignedTo: 'Pooja Lakhangave',
      lastUpdated: '03 July 2025',
      remarks: 'Awaiting approval from UI team'
    },
    {
      id: 2,
      name: 'API Integration',
      startDate: '03 July 2025',
      deadline: '07 July 2025',
      status: 'Pending',
      progress: 0,
      assignedTo: 'Rohit Patil',
      lastUpdated: '02 July 2025',
      remarks: 'Backend not ready yet'
    },
    {
      id: 3,
      name: 'Payroll Export',
      startDate: '25 June 2025',
      deadline: '01 July 2025',
      status: 'Completed',
      progress: 100,
      assignedTo: 'Sneha More',
      lastUpdated: '30 June 2025',
      remarks: 'Tested and verified'
    }
  ];

  return (
    <div className="deadline-status">
      <h2>Deadline & Task Status</h2>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Start Date</th>
            <th>Deadline</th>
            <th>Status</th>
            <th>Progress</th>
            <th>Assigned To</th>
            <th>Last Updated</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.name}</td>
              <td>{task.startDate}</td>
              <td>{task.deadline}</td>
              <td>
                <span className={`status ${task.status.toLowerCase().replace(' ', '-')}`}>
                  {task.status}
                </span>
              </td>
              <td>
                <div className="progress-bar">
                  <div className="fill" style={{ width: `${task.progress}%` }}></div>
                </div>
                <small>{task.progress}%</small>
              </td>
              <td>{task.assignedTo}</td>
              <td>{task.lastUpdated}</td>
              <td>{task.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DeadlineStatus;
