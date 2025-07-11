import React, { useEffect, useState } from 'react';
import './Daily.css';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext'; // context for logged-in email

function Daily() {
  const { userEmail } = useAuth(); // ✅ Get logged in user email
  const [inTime, setInTime] = useState('');
  const [outTime, setOutTime] = useState('');
  const [status, setStatus] = useState('Absent');
  const [total, setTotal] = useState('');
  const [clockedIn, setClockedIn] = useState(false);
  const [clockOutDone, setClockOutDone] = useState(false);

  // ✅ Check if already clocked in on component load
  useEffect(() => {
    const checkClockIn = async () => {
      try {
        const res = await axios.get('http://localhost:8081/api/attendance/check-clock-in', {
          params: { email: userEmail }
        });
        setClockedIn(res.data); // true if clocked in already
      } catch (err) {
        console.error('Failed to check clock-in status', err);
      }
    };

    if (userEmail) checkClockIn();
  }, [userEmail]);

  // ✅ Clock In
  const handleClockIn = async () => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setInTime(time);
    setStatus('Present');

    try {
      await axios.post('http://localhost:8081/api/attendance/clock-in', {
        email: userEmail,
        date: new Date().toISOString().split('T')[0], // ✅ format: yyyy-MM-dd
        inTime: time,
        status: 'Present'
      });
      alert('Clock In saved!');
      setClockedIn(true);
    } catch (err) {
      console.error('Clock In error:', err);
      alert('Failed to clock in');
    }
  };

  // ✅ Clock Out
  const handleClockOut = async () => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setOutTime(time);

    const [inH, inM] = inTime.split(':').map(Number);
    const [outH, outM] = time.split(':').map(Number);

    let hours = outH - inH;
    let mins = outM - inM;
    if (mins < 0) {
      hours -= 1;
      mins += 60;
    }

    const totalTime = `${hours}h ${mins}m`;
    setTotal(totalTime);

    try {
      await axios.post('http://localhost:8081/api/attendance/clock-out', {
        email: userEmail,
        date: new Date().toISOString().split('T')[0], // ✅ format: yyyy-MM-dd
        outTime: time,
        totalHours: totalTime
      });
      alert('Clock Out saved!');
      setClockOutDone(true);
    } catch (err) {
      console.error('Clock Out error:', err);
      alert('Failed to clock out');
    }
  };

  return (
    <div className="daily-container">
      <h2>Daily Attendance</h2>
      <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>

      {!clockedIn && (
        <div className="row">
          <label>Clock In:</label>
          <input value={inTime} readOnly />
          <button onClick={handleClockIn}>Clock In</button>
        </div>
      )}

      {clockedIn && (
        <div className="row">
          <label>Clock Out:</label>
          <input value={outTime} readOnly />
          <button onClick={handleClockOut} disabled={clockOutDone}>Clock Out</button>
        </div>
      )}

      <div className="summary">
        <p>Status: {status} &nbsp;&nbsp;&nbsp; Total Hours: {total}</p>
      </div>
    </div>
  );
}

export default Daily;
