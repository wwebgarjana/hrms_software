import React, { useState } from 'react';
import './ExperienceInfo.css';

function ExperienceInfo() {
  const [companies, setCompanies] = useState([
    { id: Date.now(), name: '', role: '', duration: '' }
  ]);
  const [skills, setSkills] = useState('');
  const [internship, setInternship] = useState('');
  const [achievements, setAchievements] = useState('');

  const handleCompanyChange = (id, field, value) => {
    const updated = companies.map((company) =>
      company.id === id ? { ...company, [field]: value } : company
    );
    setCompanies(updated);
  };

  const addCompany = () => {
    setCompanies([
      ...companies,
      { id: Date.now() + Math.random(), name: '', role: '', duration: '' }
    ]);
  };

  const removeCompany = (id) => {
    const updated = companies.filter((company) => company.id !== id);
    setCompanies(updated);
  };

  return (
    <div className="experience-info">
      <h2>Work Experience & Skills</h2>

      {companies.map((comp) => (
        <div className="company-entry" key={comp.id}>
          <input
            type="text"
            placeholder="Company Name"
            value={comp.name}
            onChange={(e) => handleCompanyChange(comp.id, 'name', e.target.value)}
          />
          <input
            type="text"
            placeholder="Role"
            value={comp.role}
            onChange={(e) => handleCompanyChange(comp.id, 'role', e.target.value)}
          />
          <input
            type="text"
            placeholder="Duration"
            value={comp.duration}
            onChange={(e) => handleCompanyChange(comp.id, 'duration', e.target.value)}
          />
          {companies.length > 1 && (
            <button className="remove-btn" onClick={() => removeCompany(comp.id)}>
              Remove
            </button>
          )}
        </div>
      ))}

      <button onClick={addCompany}>+ Add Company</button>

      <div className="form-group">
        <label>Skills & Technologies</label>
        <textarea
          rows="3"
          placeholder="e.g. Java, React, SQL, etc."
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Internship / Training</label>
        <textarea
          rows="2"
          value={internship}
          onChange={(e) => setInternship(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Achievements</label>
        <textarea
          rows="2"
          value={achievements}
          onChange={(e) => setAchievements(e.target.value)}
        />
      </div>
    </div>
  );
}

export default ExperienceInfo;