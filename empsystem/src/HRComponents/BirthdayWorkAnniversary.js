// File: BirthdayWorkAnniversary.js
import React from 'react';
import './BirthdayWorkAnniversary.css';

const today = new Date().toISOString().slice(5, 10); // Format: MM-DD

const employees = [
  {
    name: 'Anjali Verma',
    department: 'Design',
    dob: '1998-07-03',
    doj: '2019-07-03',
    photo: '/photos/anjali.jpg',
  },
  {
    name: 'Rohit Mehta',
    department: 'Engineering',
    dob: '1995-02-20',
    doj: '2020-07-03',
    photo: '/photos/rohit.jpg',
  },
  {
    name: 'Pooja Sharma',
    department: 'HR',
    dob: '1997-03-15',
    doj: '2021-09-10',
    photo: '/photos/pooja.jpg',
  },
];

function calculateYears(doj) {
  const joinYear = new Date(doj).getFullYear();
  const currentYear = new Date().getFullYear();
  return currentYear - joinYear;
}

function BirthdayWorkAnniversary() {
  const birthdays = employees.filter(emp => emp.dob.slice(5, 10) === today);
  const anniversaries = employees.filter(emp => emp.doj.slice(5, 10) === today);

  return (
    <div className="bday-anniv-container">
      <h2>🎉 Birthday & Work Anniversary Announcements</h2>

      {birthdays.length > 0 && <h3>🎂 Birthdays Today</h3>}
      <div className="card-group">
        {birthdays.map((emp, index) => (
          <div className="card" key={`bday-${index}`}>
            <img src={emp.photo} alt={emp.name} className="employee-photo" />
            <p><strong>{emp.name}</strong> ({emp.department})</p>
            <p>Wishing {emp.name} a very Happy Birthday 🎉🎈</p>
          </div>
        ))}
      </div>

      {anniversaries.length > 0 && <h3>🏅 Work Anniversaries Today</h3>}
      <div className="card-group">
        {anniversaries.map((emp, index) => (
          <div className="card" key={`anniv-${index}`}>
            <img src={emp.photo} alt={emp.name} className="employee-photo" />
            <p><strong>{emp.name}</strong> ({emp.department})</p>
            <p>Congratulations {emp.name} on completing {calculateYears(emp.doj)} years at our company! 💼🎉</p>
          </div>
        ))}
      </div>

      {birthdays.length === 0 && anniversaries.length === 0 && (
        <p style={{ textAlign: 'center' }}>No birthdays or work anniversaries today.</p>
      )}
    </div>
  );
}

export default BirthdayWorkAnniversary;