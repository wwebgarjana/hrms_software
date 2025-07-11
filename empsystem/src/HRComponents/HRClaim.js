import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MedicalClaim from './MedicalClaim';
// import AllowanceClaim from './AllowanceClaim';
import OtherClaims from './OtherClaims';
import './HRClaim.css'; // ✅ Make sure this CSS file exists

function HRClaim() {
  const [activeTab, setActiveTab] = useState('medical');

  const renderComponent = () => {
    switch (activeTab) {
      case 'medical':
        return <MedicalClaim />;
      // case 'allowance':
      //   return <AllowanceClaim />;
      case 'other':
        return <OtherClaims />;
      default:
        return null;
    }
  };

  return (
    <div className="hrclaim-container">
      {/* Sidebar */}
      <aside className="hrclaim-sidebar">
        <h2 className="hrclaim-sidebar-title">📝 HR Claims</h2>
        <ul className="hrclaim-sidebar-menu">
          <li>
            <Link to="/hr" className="hrclaim-dashboard-link">🏠 Dashboard</Link>
          </li>
          <li onClick={() => setActiveTab('medical')}>🩺 Medical Claim</li>
          {/* <li onClick={() => setActiveTab('allowance')}>💰 Allowance Claim</li> */}
          <li onClick={() => setActiveTab('other')}>📂 Other Claims</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="hrclaim-main">
        {renderComponent()}
      </main>
    </div>
  );
}

export default HRClaim;