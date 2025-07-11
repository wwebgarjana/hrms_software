// File: Payroll.js
import React, { useState } from 'react';
import AddBankDetails from './AddBankDetails';
import ViewPay from './ViewPay'; // ✅ Ensure file name and path are correct
import './Payroll.css';

function Payroll() {
  const [activeTab, setActiveTab] = useState('view');

  const renderTab = () => {
    switch (activeTab) {
      case 'view':
        return <AddBankDetails />;
      case 'pdf':
        return <ViewPay />;
      default:
        return <AddBankDetails />;
    }
  };

  return (
    <div className="payslip-container">
      <div className="button-group">
        <button
          className={activeTab === 'view' ? 'active' : ''}
          onClick={() => setActiveTab('view')}
        >
          Add Bank Details
        </button>
        <button
          className={activeTab === 'pdf' ? 'active' : ''}
          onClick={() => setActiveTab('pdf')}
        >
          View PaySlip
        </button>
      </div>
      <div className="tab-content">
        {renderTab()}
      </div>
    </div>
  );
}

export default Payroll;
