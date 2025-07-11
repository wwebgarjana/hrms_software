import React, { useState } from 'react';
import EmpMedicalClaim from './EmpMedicalClaim';
 //import EmpClaimStatus from './EmpClaimStatus';
import EmpOtherClaim from './EmpOtherClaim';
 

function EmployeeClaim() {
  const [activeTab, setActiveTab] = useState('medical');

  const renderComponent = () => {
    switch (activeTab) {
      case 'medical':
        return <EmpMedicalClaim />;
      
      case 'other':
        return <EmpOtherClaim />;
        // case 'status':
        // return <EmpClaimStatus />;
      default:
        return null;
    }
  };

  return (
    <div className="hr-claim-container">
      <div className="button-group">
        <button onClick={() => setActiveTab('medical')}>Medical Claim</button>
       
        <button onClick={() => setActiveTab('other')}>Other Claims</button>
         {/* <button onClick={() => setActiveTab('status')}> Claim Status</button> */}
      </div>
      <div className="claim-content">
        {renderComponent()}
      </div>
    </div>
  );
}

export default EmployeeClaim;