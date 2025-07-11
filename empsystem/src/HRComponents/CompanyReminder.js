// File: CompanyReminder.js
import React, { useState } from 'react';
import './CompanyReminder.css';

const reminders = [
  { icon: "🗓️", title: "Project Deadlines", message: "Client dashboard due.", dueDate: "2025-07-10", category: "Projects" },
  { icon: "📄", title: "Timesheet Submission", message: "Submit timesheet by Friday.", dueDate: "2025-07-05", category: "HR" },
  { icon: "💳", title: "Salary Credit", message: "Salary credited on 1st.", dueDate: "2025-07-01", category: "Finance" },
  { icon: "📊", title: "Performance Reviews", message: "Reviews start soon.", dueDate: "2025-07-15", category: "HR" },
  { icon: "📥", title: "Leave Expiry", message: "Leaves expire Dec 31.", dueDate: "2025-12-31", category: "HR" },
  { icon: "🧾", title: "Tax Declarations", message: "Submit tax details.", dueDate: "2025-07-20", category: "Finance" },
];

function getCountdownColor(days) {
  if (days > 5) return "green";
  if (days >= 1) return "orange";
  return "red";
}

function CompanyReminder() {
  const [subscribedCategories, setSubscribedCategories] = useState(["HR", "Projects", "Finance"]);

  const toggleCategory = (category) => {
    setSubscribedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const today = new Date();
  const filtered = reminders.filter(r => subscribedCategories.includes(r.category));

  return (
    <div className="reminder-container">
      <h2>🔔 Company Reminders</h2>

      <div className="category-toggle">
        {['HR', 'Projects', 'Finance'].map((cat) => (
          <label key={cat}>
            <input
              type="checkbox"
              checked={subscribedCategories.includes(cat)}
              onChange={() => toggleCategory(cat)}
            />
            {cat}
          </label>
        ))}
      </div>

      {filtered.map((r, index) => {
        const due = new Date(r.dueDate);
        const diffDays = Math.ceil((due - today) / (1000 * 60 * 60 * 24));
        const countdownText =
          diffDays < 0
            ? `❌ Overdue by ${Math.abs(diffDays)} days`
            : `⏳ ${diffDays} days remaining`;

        return (
          <div className="reminder-card" key={index}>
            <h3>{r.icon} {r.title}</h3>
            <p>{r.message}</p>
            <p className="due-text" style={{ color: getCountdownColor(diffDays) }}>{countdownText}</p>
            <div className="notification-placeholder">
              📧 Reminder will be sent via Email / SMS / Push
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CompanyReminder;