// src/Components/Attendance.js
import React, { useState } from 'react';
import Daily from './Daily';
// import TotalHours from './TotalHours';
 import StatusReport from './StatusReport';
// import Monthly from './Monthly';

import './Attendance.css';

function Attendance() {
  const [activeSection, setActiveSection] = useState('daily');

  const renderSection = () => {
    switch (activeSection) {
      case 'daily':
        return <Daily />;
      // case 'totalHours':
      //   return <TotalHours />;
      case 'statusReport':
        return <StatusReport />;
      // case 'monthlyReport':
      //   return <Monthly />;
      
      default:
        return <Daily />;
    }
  };

  return (
    <div className="attendance-wrapper">
      <h2 className="attendance-title">Attendance Dashboard</h2>

      <div className="attendance-tabs">
        <button
          className={activeSection === 'daily' ? 'active' : ''}
          onClick={() => setActiveSection('daily')}
        >
          Daily Attendance
        </button>
        {/* <button
          className={activeSection === 'totalHours' ? 'active' : ''}
          onClick={() => setActiveSection('totalHours')}
        >
          Total Hours
        </button>*/}
        <button
          className={activeSection === 'statusReport' ? 'active' : ''}
          onClick={() => setActiveSection('statusReport')}
        >
          Status Report
        </button>
        {/*<button
          className={activeSection === 'monthlyReport' ? 'active' : ''}
          onClick={() => setActiveSection('monthlyReport')}
        >
          Monthly Report
        </button> */}
        
      </div>

      <div className="attendance-content">
        {renderSection()}
      </div>
    </div>
  );
}

export default Attendance;
