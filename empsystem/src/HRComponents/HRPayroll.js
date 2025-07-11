import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ViewBankDetails from './ViewBankDetails';
import GeneratePayslip from './GeneratePayslip';
import './HRPayroll.css'; // Make sure this has payroll-specific class names

function HRPayroll() {
  const [activeComponent, setActiveComponent] = useState('bank');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'bank':
        return <ViewBankDetails />;
      case 'payslip':
        return <GeneratePayslip />;
      default:
        return null;
    }
  };

  return (
    <div className="hrpayroll-container">
      {/* Sidebar */}
      <aside className="hrpayroll-sidebar">
        <h2 className="hrpayroll-sidebar-title">💼 HR Payroll Panel</h2>
        <ul className="hrpayroll-sidebar-menu">
          <li>
            <Link to="/hr" className="hrpayroll-dashboard-link">🏠 Dashboard</Link>
          </li>
          <li onClick={() => setActiveComponent('bank')}>🏦 View Bank Details</li>
          <li onClick={() => setActiveComponent('payslip')}>💸 Generate Payslip</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="hrpayroll-main">
        {renderComponent()}
      </main>
    </div>
  );
}

export default HRPayroll;