import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
// import FamilyInfo from './FamilyInfo';
// import ContactInfo from './ContactInfo';
// import EducationDetails from './EducationDetails';
// import ExperienceInfo from './ExperienceInfo';
// import Documents from './Documents';
// import HealthDetails from './HealthDetails';
// import OfficialInfo from './OfficialInfo'; // ✅ NEW

function EmployeeProfile() {
  const [activeTab, setActiveTab] = useState('personal');

  const renderTab = () => {
    switch (activeTab) {
      case 'personal':
        return <PersonalInfo />;
      // case 'family':
      //   return <FamilyInfo />;
      // case 'contact':
      //   return <ContactInfo />;
      // case 'education':
      //   return <EducationDetails />;
      // case 'experience':
      //   return <ExperienceInfo />;
      // case 'documents':
      //   return <Documents />;
      // case 'health':
      //   return <HealthDetails />;
      //  case 'official':
      //   return <OfficialInfo />;   
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Segoe UI' }}>
     

      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button onClick={() => setActiveTab('personal')}>Personal Info</button>
        {/* <button onClick={() => setActiveTab('family')}>Family Info</button>
        <button onClick={() => setActiveTab('contact')}>Contact Info</button>
        <button onClick={() => setActiveTab('education')}>Education</button>
        <button onClick={() => setActiveTab('experience')}>Experience</button>
        <button onClick={() => setActiveTab('documents')}>Documents</button>
        <button onClick={() => setActiveTab('health')}>Health Info</button> */}
        {/* <button onClick={() => setActiveTab('official')}>Official Info</button> ✅ NEW */}
      </div>

      <div>
        {renderTab()}
      </div>
    </div>
  );
}

export default EmployeeProfile;