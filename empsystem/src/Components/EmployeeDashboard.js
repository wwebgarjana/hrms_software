// src/Components/EmployeeDashboard.js
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './EmployeeDashboard.css';

function EmployeeDashboard() {
  const location = useLocation();
  const isDashboardHome = location.pathname === '/employee/dashboard';

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="sidebar-title">Employee Panel</h2>
        <ul className="sidebar-menu">
          <li><Link to="/employee/dashboard">Home</Link></li>
          <li><Link to="/employee/profile">Employee Profile</Link></li>
          <li><Link to="/employee/attendance">Attendance</Link></li>
          <li><Link to="/employee/leave">Leave</Link></li>
          <li><Link to="/employee/raise">Raise</Link></li>
          <li><Link to="/employee/payroll">Payroll</Link></li>
          <li><Link to="/employee/taskproject">Task & Project</Link></li>
          <li><Link to="/employee/employeeclaim">Claim</Link></li>
           <li><Link to="/employee/empannouncement">Announcement</Link></li>
          <li><Link to="/employee/documentationpolicy">Documentation Policy</Link></li>
          <li><Link to="/employee/internalcommunication">Internal Communication</Link></li>
          <li><Link to="/employee/employeehelp">Help</Link></li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {isDashboardHome ? (
          <div className="dashboard-cards">
            <div className="card">
              <h3>Attendance</h3>
              <p>Check your daily attendance status here.</p>
              <Link to="/employee/attendance" className="card-link">View</Link>
            </div>
            <div className="card">
              <h3>Leave</h3>
              <p>Apply and view leave details.</p>
              <Link to="/employee/leave" className="card-link">Manage</Link>
            </div>
            <div className="card">
              <h3>Raise a Ticket</h3>
              <p>Submit a support ticket to HR/Admin.</p>
              <Link to="/employee/raise" className="card-link">Raise</Link>
            </div>
          </div>
        ) : (
          <Outlet />
        )}
      </main>
    </div>
  );
}

export default EmployeeDashboard;
