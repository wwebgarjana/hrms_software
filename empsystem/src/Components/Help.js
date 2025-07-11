// File: HelpCenterHR_Employee_2025.js
import React from 'react';
import './Help.css';

const Help = () => {
  return (
    <div className="help-container">
      <h1>Help & Support</h1>

      <section>
        <h2>🔐 Login & Access Help</h2>

        <div className="help-section">
          <h3>🙋 Employee FAQs</h3>
          <ul>
            <li>How to login to the employee portal?</li>
            <li>I forgot my password. How can I reset it?</li>
            <li>My account is locked. What should I do?</li>
            <li>Can I access the portal from my mobile phone?</li>
            <li>How do I update my profile picture or contact details?</li>
            <li>I didn’t receive the OTP/email. What should I check?</li>
          </ul>
        </div>

        <div className="help-section">
          <h3>🧑‍🏫 HR/Admin FAQs</h3>
          <ul>
            <li>How do I login to the HR dashboard?</li>
            <li>How do I add/edit/delete employee profiles?</li>
            <li>I’m unable to access certain sections. What permissions do I need?</li>
            <li>How can I reset an employee’s login credentials?</li>
            <li>How do I view attendance and leave requests from employees?</li>
            <li>How to enable/disable an employee account?</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>📋 Dashboard Navigation Help</h2>

        <div className="help-section">
          <h3>Employee Side</h3>
          <ul>
            <li>Where can I apply for leave?</li>
            <li>How do I download my salary slip or tax document?</li>
            <li>How can I raise a reimbursement or medical claim?</li>
            <li>Where can I see company announcements or notifications?</li>
            <li>How can I update my health or family details?</li>
          </ul>
        </div>

        <div className="help-section">
          <h3>HR Side</h3>
          <ul>
            <li>Where to view or approve leave requests?</li>
            <li>How to upload documents like offer letters, experience letters?</li>
            <li>How to add a new department or designation?</li>
            <li>How to run salary generation or view reports?</li>
            <li>How to send announcements or push notifications to employees?</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>📁 Common Issues & Solutions</h2>
        <ul>
          <li>Page not loading?</li>
          <li>Form not submitting?</li>
          <li>Button not working?</li>
          <li>Facing issues while uploading documents?</li>
          <li>Data not saving after clicking Submit?</li>
        </ul>
      </section>

      <section>
        <h2>📞 Need More Help?</h2>
        <p>Contact our support team:</p>
        <ul>
          <li>📧 Email: support@company.com</li>
          <li>📞 Phone: +91-9876543210</li>
          <li>📅 Working Hours: Mon-Fri, 9 AM to 6 PM</li>
        </ul>
        <p>📤 <strong>Raise a Ticket</strong> | 📎 <strong>Download Help Guide</strong></p>
      </section>
    </div>
  );
};

export default Help;