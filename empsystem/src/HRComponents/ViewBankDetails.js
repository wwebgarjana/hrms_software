import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewBankDetails.css';

export default function ViewBankDetails() {
  const [bankData, setBankData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/api/payroll/bankdetails')
      .then((res) => setBankData(res.data))
      .catch((err) => console.error("Failed to fetch bank details", err));
  }, []);

  return (
    <div className="view-bank-details-container">
      <h2 className="view-bank-details-title">Employee Bank Details</h2>
      <table className="view-bank-details-table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Account Holder Name</th>
            <th>Account Number</th>
            <th>IFSC Code</th>
            <th>Bank Name</th>
          </tr>
        </thead>
        <tbody>
          {bankData.map((b, i) => (
            <tr key={i}>
              <td>{b.email}</td>
              <td>{b.accountHolderName}</td>
              <td>{b.accountNumber}</td>
              <td>{b.ifscCode}</td>
              <td>{b.bankName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
