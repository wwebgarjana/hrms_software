import React from 'react';
import './ProjectReports.css';

function ProjectReports() {
  const reports = [
    {
      id: 1,
      projectName: 'Payroll Management System',
      duration: '01 June 2025 – 30 July 2025',
      teamMembers: ['Pooja', 'Rahul', 'Sneha'],
      completedTasks: 12,
      totalTasks: 15,
      status: 'On Track',
      bugs: 3,
      manager: 'Mr. Sharma',
      lastUpdated: '28 June 2025',
      feedback: 'System is working well, minor UI issues.',
      rating: 4.5
    },
    {
      id: 2,
      projectName: 'Leave Management System',
      duration: '05 June 2025 – 25 July 2025',
      teamMembers: ['Aarti', 'Kiran'],
      completedTasks: 10,
      totalTasks: 10,
      status: 'Completed',
      bugs: 0,
      manager: 'Ms. Rathi',
      lastUpdated: '25 June 2025',
      feedback: 'Delivered before deadline. Excellent!',
      rating: 5
    }
  ];

  return (
    <div className="project-reports">
      <h2>Project Reports</h2>

      {reports.map(report => (
        <div className="report-card" key={report.id}>
          <h3>{report.projectName}</h3>
          <p><strong>Duration:</strong> {report.duration}</p>
          <p><strong>Team:</strong> {report.teamMembers.join(', ')}</p>
          <p><strong>Manager:</strong> {report.manager}</p>
          <p>
            <strong>Status:</strong>{' '}
            <span className={`status ${report.status.toLowerCase().replace(' ', '-')}`}>
              {report.status}
            </span>
          </p>
          <p><strong>Tasks:</strong> {report.completedTasks} / {report.totalTasks}</p>
          <p><strong>Bugs Resolved:</strong> {report.bugs}</p>
          <p><strong>Feedback:</strong> {report.feedback}</p>
          <p><strong>Rating:</strong> ⭐ {report.rating} / 5</p>
          <p><small>Last Updated: {report.lastUpdated}</small></p>
        </div>
      ))}
    </div>
  );
}

export default ProjectReports;
