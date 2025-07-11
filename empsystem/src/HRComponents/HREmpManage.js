import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HrPersonalInfo from './HrPersonalInfo';
//import DepartmentDashboard from './DepartmentDashboard';
import EmployeeOnboarding from './EmployeeOnboarding';
import './HREmpManage.css'; // Make sure this file exists

function HREmpManage() {
  const [activeComponent, setActiveComponent] = useState('profile');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'profile':
        return <HrPersonalInfo />;
      case 'onboarding':
        return <EmployeeOnboarding />;
      default:
        return null;
    }
  };

  return (
    <div className="empmanage-container">
      {/* Sidebar */}
      <aside className="empmanage-sidebar">
        <h2 className="empmanage-sidebar-title">HR Panel</h2>
        <ul className="empmanage-sidebar-menu">
          {/* ✅ Home navigates to /hr route */}
          <li>
            <Link to="/hr" style={{ color: 'white', textDecoration: 'none' }}>🏠 Dashboard</Link>
          </li>
          {/* Others use useState */}
          <li onClick={() => setActiveComponent('profile')}>👤 Profile</li>
          <li onClick={() => setActiveComponent('onboarding')}>📥 Onboarding</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="empmanage-main">
        {renderComponent()}
      </main>
    </div>
  );
}

export default HREmpManage;
