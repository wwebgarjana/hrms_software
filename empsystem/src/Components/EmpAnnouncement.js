import React, { useEffect, useState } from 'react';
import './EmpAnnouncement.css';

function EmpAnnouncement() {
  const [announcements, setAnnouncements] = useState([]);
  const [celebrations, setCelebrations] = useState([]);
  const [visiblePDF, setVisiblePDF] = useState(null); // To toggle iframe

  useEffect(() => {
    // ✅ Corrected endpoint for announcements
    fetch('http://localhost:8081/api/announcements/dashboard/announcements/today')
      .then((res) => res.json())
      .then((data) => setAnnouncements(data))
      .catch((err) => console.error("Error fetching announcements:", err));

    // ✅ Corrected endpoint for celebrations
    fetch('http://localhost:8081/api/announcements/dashboard/celebrations/today')
      .then((res) => res.json())
      .then((data) => setCelebrations(data))
      .catch((err) => console.error("Error fetching celebrations:", err));
  }, []);

  return (
    <div className="announcement-box">
      <h2>📢 Today’s Announcements</h2>
      {announcements.length === 0 && <p>No announcements today.</p>}

      {announcements.map((a, index) => (
        <div key={index} className="announcement-card">
          <h4>{a.title}</h4>
          <p>{a.content}</p>
          <p>🏢 {a.department} | 📍 {a.location}</p>

          {/* Toggle PDF Preview */}
          {a.attachmentFilename && (
            <>
              <button
                className="toggle-pdf-btn"
                onClick={() => setVisiblePDF(visiblePDF === a.id ? null : a.id)}
              >
                {visiblePDF === a.id ? '🔽 Hide Attachment' : '📎 View Attachment'}
              </button>

              {visiblePDF === a.id && (
                <div className="pdf-preview">
                  <h5>📎 {a.attachmentFilename}</h5>
                  <iframe
                    src={`http://localhost:8081/api/announcements/download/${a.id}`}
                    width="100%"
                    height="400px"
                    title={`PDF Preview ${a.id}`}
                  ></iframe>
                </div>
              )}
            </>
          )}
        </div>
      ))}

      <h2>🎉 Celebrations</h2>
      {celebrations.length === 0 && <p>No birthdays or anniversaries today.</p>}
      {celebrations.map((c, idx) => (
        <div key={idx} className="celebration-card">
          <p><strong>{c.type}:</strong> {c.name}</p>
        </div>
      ))}
    </div>
  );
}

export default EmpAnnouncement;