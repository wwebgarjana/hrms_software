import React, { useEffect, useState } from "react";
import axios from "axios";
import './HRInternalCommunication.css';
import { Link } from 'react-router-dom';

export default function HRInternalCommunication() {
  const sender = "hr@company.com";
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");

 useEffect(() => {
  axios.get("http://localhost:8081/api/chat/hr/all")
    .then(res => setChat(res.data))
    .catch(err => console.error("Error fetching chat:", err));
}, []);


  const sendMessage = () => {
    if (!message.trim()) return;

    const msg = {
      sender,
      receiver: "all", // Always broadcast
      message
    };

    axios.post("http://localhost:8081/api/chat/send", msg)
      .then(() => {
        setChat([...chat, msg]);
        setMessage("");
      })
      .catch(err => console.error("Error sending message:", err));
  };

  return (
    <div>
       {/* 🔙 Back to Dashboard */}
      <div className="hrleave-back-wrapper">
        <Link to="/hr" className="hrleave-back-link">← Back to Dashboard</Link>
      </div>
    <div className="hr-chat-container">
      <h2>HR Broadcast Chat</h2>

      <div className="hr-chat-box">
        {chat.map((msg, i) => (
          <div key={i} className={msg.sender === sender ? "hr-message" : "employee-message"}>
            <p><strong>{msg.sender}</strong>: {msg.message}</p>
          </div>
        ))}
      </div>

      <div className="hr-input-area">
        <input
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="Broadcast message to all employees..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
    </div>
  );
}
