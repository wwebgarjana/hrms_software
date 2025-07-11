// File: DepartmentDashboard.js
import React, { useState } from 'react';
import './DepartmentDashboard.css';

function DepartmentDashboard() {
  const [form, setForm] = useState({
    employeeId: '',
    employeeName: '',
    department: '',
    designation: '',
    manager: '',
    teamName: '',
    assignmentDate: '',
    remarks: ''
  });

  const departments = ['HR', 'IT', 'Sales', 'Finance'];
  const designations = ['Developer', 'Manager', 'Team Lead', 'Tester'];
  const managers = ['EMP1001 - Mr. A', 'EMP1002 - Ms. B', 'EMP1003 - Mr. C'];

  const [assignedList, setAssignedList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).some((v) => v.trim() === '')) {
      alert('Please fill out all fields');
      return;
    }
    setAssignedList([...assignedList, form]);
    setForm({
      employeeId: '', employeeName: '', department: '', designation: '',
      manager: '', teamName: '', assignmentDate: '', remarks: ''
    });
  };

  return (
    <div className="deptdash-container">
      <h2 className="deptdash-title">Assign Department & Role</h2>
      <form onSubmit={handleSubmit} className="deptdash-form">
        <div className="deptdash-field">
          <label>Employee ID</label>
          <input name="employeeId" value={form.employeeId} onChange={handleChange} />
        </div>
        <div className="deptdash-field">
          <label>Employee Name</label>
          <input name="employeeName" value={form.employeeName} onChange={handleChange} />
        </div>
        <div className="deptdash-field">
          <label>Department</label>
          <select name="department" value={form.department} onChange={handleChange}>
            <option value="">Select Department</option>
            {departments.map((dep, idx) => <option key={idx}>{dep}</option>)}
          </select>
        </div>
        <div className="deptdash-field">
          <label>Designation / Role</label>
          <select name="designation" value={form.designation} onChange={handleChange}>
            <option value="">Select Role</option>
            {designations.map((des, idx) => <option key={idx}>{des}</option>)}
          </select>
        </div>
        <div className="deptdash-field">
          <label>Manager / Supervisor</label>
          <select name="manager" value={form.manager} onChange={handleChange}>
            <option value="">Select Manager</option>
            {managers.map((mgr, idx) => <option key={idx}>{mgr}</option>)}
          </select>
        </div>
        <div className="deptdash-field">
          <label>Team Name / Project</label>
          <input name="teamName" value={form.teamName} onChange={handleChange} />
        </div>
        <div className="deptdash-field">
          <label>Assignment Date</label>
          <input type="date" name="assignmentDate" value={form.assignmentDate} onChange={handleChange} />
        </div>
        <div className="deptdash-field deptdash-textarea">
          <label>Remarks</label>
          <textarea name="remarks" value={form.remarks} onChange={handleChange}></textarea>
        </div>
        <button type="submit" className="deptdash-btn">Assign Role</button>
      </form>

      <div className="deptdash-list">
        <h3 className="deptdash-subtitle">Assigned Roles</h3>
        {assignedList.map((item, index) => (
          <div className="deptdash-card" key={index}>
            <strong>{item.employeeId} - {item.employeeName}</strong>
            <p>Department: {item.department}</p>
            <p>Role: {item.designation}</p>
            <p>Manager: {item.manager}</p>
            <p>Project: {item.teamName}</p>
            <p>Date: {item.assignmentDate}</p>
            <p>Remarks: {item.remarks}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DepartmentDashboard;
