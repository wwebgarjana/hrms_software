// File: ViewPay.js
import React, { useEffect, useState } from 'react';
import './ViewPay.css';
import axios from 'axios';

export default function ViewPay() {
  const [payslips, setPayslips] = useState([]);
  const email = localStorage.getItem('userEmail'); // ✅ get logged-in email

  useEffect(() => {
    if (!email) {
      console.warn("No email found in localStorage.");
      return;
    }

    axios.get(`http://localhost:8081/api/payroll/payslip/${email}`)
      .then((res) => setPayslips(res.data))
      .catch((err) => console.error('Error fetching payslips:', err));
  }, [email]);

  return (
    <div className="payslip-view-container">
      <h2>Your Payslips</h2>
      {payslips.length === 0 ? (
        <p>No payslips available.</p>
      ) : (
        payslips.map((p, index) => (
          <div className="payslip-card" key={index}>
            <p><strong>Month:</strong> {p.month}</p>
            <p><strong>Net Salary:</strong> ₹{p.netSalary}</p>
            {p.pdfUrl && <a href={p.pdfUrl} download>📄 Download PDF</a>}
          </div>
        ))
      )}
    </div>
  );
}
