import React, { useState } from 'react';
import './OfficialInfo.css';

function OfficialInfo() {
  const [formData, setFormData] = useState({
    employeeId: '',
    department: '',
    designation: '',
    officialEmail: '',
    dateOfJoining: '',
    employmentType: '',
    shiftTiming: '',
    workLocation: '',
    reportingManager: '',
    employeeStatus: '',
    probationStatus: '',
    grade: '',
    costCenter: '',
    officePhone: '',
    workstation: '',
    pfNumber: '',
    esicNumber: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert('Official Info submitted!');
    console.log(formData);
  };

  return (
    <div className="official-info">
      <h2>🏢 Official Information</h2>
      <div className="form-grid">
        <input name="employeeId" placeholder="Employee ID" onChange={handleChange} />
        <input name="department" placeholder="Department" onChange={handleChange} />
        <input name="designation" placeholder="Designation" onChange={handleChange} />
        <input name="officialEmail" type="email" placeholder="Official Email" onChange={handleChange} />
        <input name="dateOfJoining" type="date" placeholder="Date of Joining" onChange={handleChange} />
        <select name="employmentType" onChange={handleChange}>
          <option value="">Employment Type</option>
          <option>Full-Time</option>
          <option>Part-Time</option>
          <option>Intern</option>
          <option>Contract</option>
        </select>
        <input name="shiftTiming" placeholder="Shift Timing" onChange={handleChange} />
        <input name="workLocation" placeholder="Work Location" onChange={handleChange} />
        <input name="reportingManager" placeholder="Reporting Manager" onChange={handleChange} />
        <select name="employeeStatus" onChange={handleChange}>
          <option value="">Employee Status</option>
          <option>Active</option>
          <option>Resigned</option>
          <option>Terminated</option>
          <option>On Leave</option>
        </select>
        <select name="probationStatus" onChange={handleChange}>
          <option value="">Probation Status</option>
          <option>Completed</option>
          <option>In Progress</option>
        </select>
        <input name="grade" placeholder="Employee Grade (optional)" onChange={handleChange} />
        <input name="costCenter" placeholder="Cost Center / Project Code" onChange={handleChange} />
        <input name="officePhone" placeholder="Office Phone Ext." onChange={handleChange} />
        <input name="workstation" placeholder="Workstation No." onChange={handleChange} />
        <input name="pfNumber" placeholder="PF Number" onChange={handleChange} />
        <input name="esicNumber" placeholder="ESIC Number" onChange={handleChange} />
      </div>
      <button onClick={handleSubmit}>Save Official Info</button>
    </div>
  );
}

export default OfficialInfo;