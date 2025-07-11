import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HRTaskProject.css'; // ✅ Use matching CSS class names below

export default function HRTaskProject() {
  const [task, setTask] = useState({
    employeeEmail: '',
    title: '',
    description: '',
    tools: '',
    deadline: ''
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:8081/api/tasks/assign', task);
      alert('Task Assigned Successfully');
      setTask({ employeeEmail: '', title: '', description: '', tools: '', deadline: '' });
    } catch (err) {
      console.error(err);
      alert('Failed to assign task');
    }
  };

  return (
    <div className="hrtask-container">
      <div className="hrtask-back-wrapper">
        <Link to="/hr" className="hrtask-back-link">← Back to Dashboard</Link>
      </div>

      <div className="hrtask-form">
        <h2>Assign Task to Employee</h2>
        <input
          type="email"
          name="employeeEmail"
          value={task.employeeEmail}
          onChange={handleChange}
          placeholder="Employee Email"
        />
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          placeholder="Task Title"
        />
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="Task Description"
        />
        <input
          type="text"
          name="tools"
          value={task.tools}
          onChange={handleChange}
          placeholder="Tools Required"
        />
        <input
          type="date"
          name="deadline"
          value={task.deadline}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Assign Task</button>
      </div>
    </div>
  );
}
