import React, { useState } from 'react';
import './EmployeeHelp.css';

function EmployeeHelp() {
  const [query, setQuery] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (query.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="employee-help">
      <h2>Employee Help & Support</h2>

      {/* FAQs */}
      <section><h3>1. How do I mark attendance?</h3><p>Go to the <strong>Attendance</strong> section and click <strong>Clock In</strong> and <strong>Clock Out</strong>.</p></section>
      <section><h3>2. How can I apply for leave?</h3><p>Use the <strong>Apply Leave</strong> section, choose type and date, then submit.</p></section>
      <section><h3>3. Where can I see my leave balance?</h3><p>Check the <strong>Leave Balance</strong> tab for remaining leaves.</p></section>
      <section><h3>4. How do I know if my leave is approved?</h3><p>Go to the <strong>Leave Status</strong> page to view status.</p></section>
      <section><h3>5. Can I cancel a submitted leave?</h3><p>If it's still pending, click <strong>Cancel</strong> under <strong>Leave Status</strong>.</p></section>
      <section><h3>6. Where can I download my salary slip?</h3><p>Go to <strong>Payslip</strong>, select month, and click <strong>Download</strong>.</p></section>
      <section><h3>7. How do I update personal info?</h3><p>Click <strong>Edit</strong> in the <strong>Profile</strong> section and save changes.</p></section>
      <section><h3>8. What if my attendance is wrong?</h3><p>Contact <strong>HR</strong> or raise a request from <strong>Attendance Issues</strong>.</p></section>
      <section><h3>9. Can I track daily hours?</h3><p>Yes, in <strong>Attendance History</strong> you can see daily timings.</p></section>
      <section><h3>10. Who to contact for technical issues?</h3><p>Email <a href="mailto:support@yourcompany.com">support@yourcompany.com</a> or contact HR.</p></section>

      {/* Chat Section */}
      {/* <div className="chat-box">
        <h3>Still have a question?</h3>
        {!submitted ? (
          <>
            <textarea
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type your question or issue here..."
              rows={4}
            />
            <button onClick={handleSubmit}>Submit</button>
          </>
        ) : (
          <p className="submitted-msg">✅ Thank you! Your query has been received. We’ll get back to you soon.</p>
        )}
      </div> */}
    </div>
  );
}

export default EmployeeHelp;