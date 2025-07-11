import React, { useState } from 'react';
import './FamilyInfo.css';

function FamilyInfo() {
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [spouseName, setSpouseName] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [children, setChildren] = useState([
    { id: Date.now(), name: '', age: '' }
  ]);

  const handleChildChange = (id, field, value) => {
    const updatedChildren = children.map((child) =>
      child.id === id ? { ...child, [field]: value } : child
    );
    setChildren(updatedChildren);
  };

  const addChild = () => {
    setChildren([
      ...children,
      { id: Date.now() + Math.random(), name: '', age: '' }
    ]);
  };

  const removeChild = (id) => {
    const updated = children.filter((child) => child.id !== id);
    setChildren(updated);
  };

  return (
    <div className="family-info">
      <h2>Family Details</h2>

      <div className="form-group">
        <label>Father's Name:</label>
        <input value={fatherName} onChange={(e) => setFatherName(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Mother's Name:</label>
        <input value={motherName} onChange={(e) => setMotherName(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Spouse Name:</label>
        <input value={spouseName} onChange={(e) => setSpouseName(e.target.value)} />
      </div>

      <div className="form-group">
        <label>Emergency Contact Person:</label>
        <input value={emergencyContact} onChange={(e) => setEmergencyContact(e.target.value)} />
      </div>

      <div className="children-section">
        <label>Children Details:</label>
        {children.map((child) => (
          <div key={child.id} className="child-row">
            <input
              placeholder="Name"
              value={child.name}
              onChange={(e) => handleChildChange(child.id, 'name', e.target.value)}
            />
            <input
              placeholder="Age"
              value={child.age}
              onChange={(e) => handleChildChange(child.id, 'age', e.target.value)}
            />
            {children.length > 1 && (
              <button className="remove-btn" onClick={() => removeChild(child.id)}>Remove</button>
            )}
          </div>
        ))}
        <button onClick={addChild}>+ Add Child</button>
      </div>
    </div>
  );
}

export default FamilyInfo;