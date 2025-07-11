// HealthDetails.js
import React from 'react';
import './HealthDetails.css';

function HealthDetails() {
  return (
    <div className="health-section">
      <h2>🩺 Health Information</h2>

      <table>
        <tbody>
          <tr>
            <th>Blood Group</th>
            <td>O+</td>
          </tr>
          <tr>
            <th>Medical History</th>
            <td>None</td>
          </tr>
          <tr>
            <th>Allergies</th>
            <td>Peanuts</td>
          </tr>
          <tr>
            <th>Insurance Policy No.</th>
            <td>INSU-4589321</td>
          </tr>
          <tr>
            <th>Insurance Provider</th>
            <td>LIC Health Cover</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default HealthDetails;