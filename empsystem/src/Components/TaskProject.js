import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TaskProject.css'; // ✅ Only this file will be applied
import { useAuth } from '../contexts/AuthContext';

export default function TaskProject() {
  const { userEmail } = useAuth();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (userEmail) {
      axios
        .get(`http://localhost:8081/api/tasks/employee?email=${userEmail}`)
        .then((res) => setTasks(res.data))
        .catch((err) => console.error(err));
    }
  }, [userEmail]);

  return (
    <div className="employee-task-view">
      <h2 className="employee-task-title">My Assigned Tasks</h2>
      {tasks.map((task) => (
        <div key={task.id} className="employee-task-card">
          <h3>{task.title}</h3>
          <p><strong>Description:</strong> {task.description}</p>
          <p><strong>Tools:</strong> {task.tools}</p>
          <p><strong>Deadline:</strong> {task.deadline}</p>
        </div>
      ))}
    </div>
  );
}
