import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HRLeavePanel from './HRLeavePanel';
import './HRLeave.css'; // Should match the updated CSS classes

function HRLeave() {
  const [active, setActive] = useState('request');

  return (
    <div className="hrleave-container">
      {/* 🔙 Back to Dashboard */}
      <div className="hrleave-back-wrapper">
        <Link to="/hr" className="hrleave-back-link">← Back to Dashboard</Link>
      </div>

      {/* Toggle Buttons */}
      <div className="hrleave-buttons">
        <button
          className={active === 'request' ? 'hrleave-active' : ''}
          onClick={() => setActive('request')}
        >
          Leave Panel
        </button>
      </div>

      {/* Content Area */}
      <div className="hrleave-content">
        {active === 'request' && <HRLeavePanel />}
      </div>
    </div>
  );
}

export default HRLeave;
