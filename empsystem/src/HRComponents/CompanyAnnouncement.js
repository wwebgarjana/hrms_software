import React, { useState } from 'react';
import './CompanyAnnouncement.css';

const defaultAnnouncements = [
  {
    title: "🎯 Policy Updates",
    content: "We have updated our Work From Home policy. Please refer to the attached document.",
    attachment: "WFH_Policy.pdf",
    department: "All",
    location: "Head Office",
  },
  {
    title: "🚀 New Projects / Product Launches",
    content: "We’re excited to announce the launch of our new CRM platform next quarter!",
    attachment: null,
    department: "Sales",
    location: "Mumbai",
  },
  {
    title: "🏢 Office Relocation or Renovation Notices",
    content: "The Mumbai office will be relocated to a new premise from August 15th.",
    attachment: "Mumbai_Office_Map.docx",
    department: "All",
    location: "Mumbai",
  },
  {
    title: "📈 Performance Highlights",
    content: "We’ve achieved 120% of our quarterly goals! Amazing job everyone!",
    attachment: null,
    department: "All",
    location: "Head Office",
  },
  {
    title: "🧑‍💼 New Joinee Announcements",
    content: "Please welcome Priya Sharma, who has joined us as an HR Executive.",
    attachment: null,
    department: "HR",
    location: "Delhi",
  },
  {
    title: "🔐 Security or Compliance Guidelines",
    content: "Mandatory password update every 90 days. Refer to the guideline document.",
    attachment: "Security_Policy.pdf",
    department: "IT",
    location: "Head Office",
  },
  {
    title: "📅 Upcoming Events",
    content: "Join us for the leadership workshop on July 10th in the conference hall.",
    attachment: "Workshop_Schedule.pdf",
    department: "All",
    location: "Pune",
  },
];

function CompanyAnnouncement({ externalAnnouncements = [] }) {
  const [filterDept, setFilterDept] = useState("All");
  const [filterLoc, setFilterLoc] = useState("All");
  const [comments, setComments] = useState({});

  const combinedAnnouncements = [...externalAnnouncements, ...defaultAnnouncements];

  const handleAcknowledgment = (title) => {
    alert(`Acknowledged: ${title}`);
  };

  const handleCommentChange = (index, value) => {
    setComments({ ...comments, [index]: value });
  };

  const filtered = combinedAnnouncements.filter((a) =>
    (filterDept === "All" || a.department === filterDept) &&
    (filterLoc === "All" || a.location === filterLoc)
  );

  return (
    <div className="announcement-container">
      <h2>📢 Company Announcements</h2>

      <div className="filter-section">
        <label>Department: </label>
        <select onChange={(e) => setFilterDept(e.target.value)}>
          <option value="All">All</option>
          <option value="HR">HR</option>
          <option value="Sales">Sales</option>
          <option value="IT">IT</option>
        </select>

        <label>Location: </label>
        <select onChange={(e) => setFilterLoc(e.target.value)}>
          <option value="All">All</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Head Office">Head Office</option>
          <option value="Pune">Pune</option>
        </select>
      </div>

      {filtered.map((a, index) => (
        <div key={index} className="announcement-card">
          <h3>{a.title}</h3>
          <p>📝 {a.content}</p>
          <p>🏢 <strong>Department:</strong> {a.department} | 📍 <strong>Location:</strong> {a.location}</p>
          {a.attachment && (
            <p className="attachment">
              📎 <a href={`/${a.attachment}`} download>{a.attachment}</a>
            </p>
          )}
          <button onClick={() => handleAcknowledgment(a.title)}>✅ Acknowledge</button>

          <div className="comment-box">
            💬 <input
              type="text"
              placeholder="Add comment..."
              value={comments[index] || ''}
              onChange={(e) => handleCommentChange(index, e.target.value)}
            />
          </div>

          <div className="notification-placeholder">
            🔔 <em>Push/Email Notification Sent</em>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CompanyAnnouncement;