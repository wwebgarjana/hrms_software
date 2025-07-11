// File: src/HelpPage.js
import React, { useState } from 'react';
import './HRHelp.css';
import { Link } from 'react-router-dom';


const faqs = [
  { q:"How do I approve or reject a pending leave request?", a:"Navigate to Leave Requests, click Approve/Reject." },
  { q:"How can I upload a new company policy or circular?", a:"Go to Upload Company Document, fill form, click Upload." },
  { q:"How do I view and download employee payslips?", a:"In Payroll → Salary Slips, filter and click Download/Export." },
  { q:"How do I assign or update performance goals?", a:"In Performance Review → Assigned Goals, use Add Goal form." },
  { q:"Where can I see department-wise summaries?", a:"In HR Analytics → Department-wise Attendance Summary." },
  { q:"How do I generate appointment or offer letters?", a:"In Generate Letters, select type, fill details, Generate & Download." },
  { q:"Can I export reports?", a:"Yes—use Export to Excel/PDF buttons in each module." },
  { q:"How do I manage individual employee documents?", a:"In Manage Employee Documents, select employee & upload file." },
  { q:"How do I track reimbursements?", a:"Under Reimbursement, submit claims and use status filters." },
  { q:"How to enable email notifications?", a:"Toggle Email Notifications before submitting actions." },
  { q:"How to update employee details?", a:"In Employee Management, search/edit and save changes." },
  { q:"How to configure leave policies?", a:"In Settings → Leave Policies, adjust rules and Save Policy." },
  { q:"Where to view leave balances?", a:"In Leave Report, filter to see balances per employee." },
  { q:"How to finalize payroll?", a:"In Salary Processing, Finalize Payroll then Mark as Paid." },
  { q:"How to reset a password?", a:"In Settings → User Accounts, click Reset Password." },
];

export default function HelpPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [chatLog, setChatLog] = useState([]);
  const [chatInput, setChatInput] = useState("");

  const toggleFAQ = i => setOpenIndex(openIndex===i ? null : i);
  const sendChat = () => {
    if (!chatInput.trim()) return;
    setChatLog(log=>[...log, {from:'You',text:chatInput}]);
    setChatInput("");
    setTimeout(()=> setChatLog(log=>[...log, {from:'Support',text:"Thanks! We'll get back to you soon."}]),800);
  };

  return (
    <div>
           {/* 🔙 Back to Dashboard */}
          <div className="hrleave-back-wrapper">
            <Link to="/hr" className="hrleave-back-link">← Back to Dashboard</Link>
          </div>
    <div className="help-container">
      <h2>Help & User Guide</h2>
      <div className="faq-section">
        {faqs.map((f,i)=>(
          <div key={i} className="faq-item">
            <div className="faq-question" onClick={()=>toggleFAQ(i)}>
              {f.q}<span className={openIndex===i?'arrow open':'arrow'}>▶</span>
            </div>
            {openIndex===i && <div className="faq-answer">{f.a}</div>}
          </div>
        ))}
      </div>

      {/* <div className="chatbox-container">
        <h3>Support Chat</h3>
        <div className="chat-log">
          {chatLog.map((m,idx)=>(
            <div key={idx} className={`chat-message ${m.from==='You'?'user':'support'}`}>
              <strong>{m.from}:</strong> {m.text}
            </div>
          ))}
        </div> */}
        {/* <div className="chat-input-area">
          <input
            type="text"
            placeholder="Type your message..."
            value={chatInput}
            onChange={e=>setChatInput(e.target.value)}
            onKeyDown={e=>e.key==='Enter'&&sendChat()}
          />
          <button onClick={sendChat}>Send</button>
        </div> */}
      </div>
     </div>
  );
}