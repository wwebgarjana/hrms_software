// components/NavigationPanel.js
import React, { useState } from 'react';
import ApplyLeave from './ApplyLeave';
import LeaveStatus from './LeaveStatus';
import LeaveBalance from './LeaveBalance';
import './Leave.css';

function Leave() {
  const [activeComponent, setActiveComponent] = useState('leave');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'leave':
        return <ApplyLeave />;
      case 'requests':
        return <LeaveStatus />;
      case 'balance':
        return <LeaveBalance />;
      default:
        return <ApplyLeave />;
    }
  };

  return (
    <div className="panel-container">
      <div className="button-group">
        <button
          className={activeComponent === 'leave' ? 'active' : ''}
          onClick={() => setActiveComponent('leave')}
        >
          Apply Leave
        </button>
        <button
          className={activeComponent === 'requests' ? 'active' : ''}
          onClick={() => setActiveComponent('requests')}
        >
         Leave Status
        </button>
        <button
          className={activeComponent === 'balance' ? 'active' : ''}
          onClick={() => setActiveComponent('balance')}
        >
          Leave Balance
        </button>
      </div>
      {renderComponent()}
    </div>
  );
}

export default Leave;