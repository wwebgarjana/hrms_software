import React, { useState } from 'react';
import './AddBankDetails.css';
import axios from 'axios';

export default function AddBankDetails() {
  const [details, setDetails] = useState({
    email: '',
    accountHolderName: '',
    accountNumber: '',
    ifscCode: '', // ✅ Correct key
    bankName: ''
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:8081/api/payroll/bankdetails', details);
      alert("✅ Bank details submitted successfully!");
      setDetails({
        email: '',
        accountHolderName: '',
        accountNumber: '',
        ifscCode: '',
        bankName: ''
      });
    } catch (error) {
      console.error("Error submitting bank details:", error);
      alert("❌ Failed to submit bank details.");
    }
  };

  return (
    <div className="bank-form">
      <h2>Add Bank Details</h2>

      <div className="form-group">
        <label>Email</label>
        <input name="email" value={details.email} onChange={handleChange} placeholder="Enter your email" />
      </div>

      <div className="form-group">
        <label>Account Holder Name</label>
        <input name="accountHolderName" value={details.accountHolderName} onChange={handleChange} placeholder="Enter account holder name" />
      </div>

      <div className="form-group">
        <label>Account Number</label>
        <input name="accountNumber" value={details.accountNumber} onChange={handleChange} placeholder="Enter account number" />
      </div>

      <div className="form-group">
        <label>IFSC Code</label>
        <input name="ifscCode" value={details.ifscCode} onChange={handleChange} placeholder="Enter IFSC code" />
      </div>

      <div className="form-group">
        <label>Bank Name</label>
        <input name="bankName" value={details.bankName} onChange={handleChange} placeholder="Enter bank name" />
      </div>

      <button className="submit-btn" onClick={handleSubmit}>Submit</button>
    </div>
  );
}
