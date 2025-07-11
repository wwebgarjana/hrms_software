import React from 'react';
import './AssignedTask.css';

function AssignedTask() {
  const tasks = [
    {
      id: 1,
      title: 'Build Login Page UI',
      description: 'Design a responsive login screen using React and Tailwind CSS.',
      assignedBy: 'Mr. Sharma (Project Manager)',
      assignedDate: '2 July 2025',
      priority: 'High',
      project: 'Payroll Management System',
      resourceLink: 'https://www.figma.com/file/sample-login-design'
    },
    {
      id: 2,
      title: 'Integrate Leave API',
      description: 'Connect backend leave API with frontend form and validate responses.',
      assignedBy: 'Ms. Rathi (Backend Lead)',
      assignedDate: '4 July 2025',
      priority: 'Medium',
      project: 'Leave Management System',
      resourceLink: 'https://www.example.com/api-docs'
    }
  ];

  return (
    <div className="assigned-task">
      <h2>Assigned Tasks</h2>

      {tasks.map(task => (
        <div className="task-card" key={task.id}>
          <h3>{task.title}</h3>
          <p><strong>Description:</strong> {task.description}</p>
          <p><strong>Assigned By:</strong> {task.assignedBy}</p>
          <p><strong>Assigned Date:</strong> {task.assignedDate}</p>
          <p>
            <strong>Priority:</strong>{' '}
            <span className={`priority ${task.priority.toLowerCase()}`}>
              {task.priority}
            </span>
          </p>
          <p><strong>Project:</strong> {task.project}</p>
          <p>
            <strong>Resources:</strong>{' '}
            <a href={task.resourceLink} target="_blank" rel="noreferrer">Click to open</a>
          </p>
        </div>
      ))}
    </div>
  );
}

export default AssignedTask;
