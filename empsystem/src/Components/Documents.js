import React, { useState } from 'react';
import './Documents.css';

function Documents() {
  const [activeTab, setActiveTab] = useState('verified');

  return (
    <div className="documents-container">
      <h2>📁 Employee Documents</h2>

      <div className="tab-buttons">
        <button className={activeTab === 'verified' ? 'active' : ''} onClick={() => setActiveTab('verified')}>
          Verified Documents
        </button>
        <button className={activeTab === 'review' ? 'active' : ''} onClick={() => setActiveTab('review')}>
          HR Reviews
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'verified' && (
          <div className="verified-docs">
            <ul>
              <li>✅ PAN Card</li>
              <li>✅ Aadhar Card</li>
              <li>✅ Passport</li>
              <li>✅ Bank Passbook</li>
              <li>✅ Address Proof</li>
              <li>✅ Mark Sheets (10th, 12th, Degree)</li>
            </ul>
          </div>
        )}

        {activeTab === 'review' && (
          <div className="hr-reviews">
            <h4>HR Verification Status</h4>
            <p>Status: ✅ All documents verified by HR</p>

            <h4>Feedback / Remarks</h4>
            <p>“All documents are properly submitted and verified. Employee is compliant with documentation policies.”</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Documents;