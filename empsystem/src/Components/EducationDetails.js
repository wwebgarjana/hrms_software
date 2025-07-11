// EducationDetails.js
import React from 'react';
import './EducationDetails.css';

function EducationDetails() {
  const educationList = [
    {
      qualification: 'B.Tech',
      major: 'Computer Science',
      institute: 'SITCOE',
      university: 'Shivaji University',
      year: '2025',
      cgpa: '7.9',
      type: 'Full-time',
      certifications: 'Java Developer - NPTEL'
    },
    {
      qualification: 'HSC',
      major: 'Science',
      institute: 'Govindrav Jr College',
      university: 'State Board',
      year: '2021',
      cgpa: '78.6%',
      type: 'Full-time',
      certifications: '-'
    }
  ];

  return (
    <div className="education-section">
      <h2>🎓 Education Details</h2>
      <table>
        <thead>
          <tr>
            <th>Qualification</th>
            <th>Major</th>
            <th>Institute</th>
            <th>University</th>
            <th>Passing Year</th>
            <th>CGPA / %</th>
            <th>Type</th>
            <th>Certifications</th>
          </tr>
        </thead>
        <tbody>
          {educationList.map((edu, index) => (
            <tr key={index}>
              <td>{edu.qualification}</td>
              <td>{edu.major}</td>
              <td>{edu.institute}</td>
              <td>{edu.university}</td>
              <td>{edu.year}</td>
              <td>{edu.cgpa}</td>
              <td>{edu.type}</td>
              <td>{edu.certifications}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EducationDetails;