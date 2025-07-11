import React, { useState, useEffect } from "react";
import axios from "axios";
import './InternalCommunication.css';
import { useAuth } from "../contexts/AuthContext";

export default function InternalCommunication() {
  const { userEmail } = useAuth(); // 👈 Logged-in employee
  const sender = userEmail;
  const receiver = "hr@company.com";

  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    if (!sender) return;

    // Get 1-to-1 chat + HR broadcast (receiver: all)
    axios.get(`http://localhost:8081/api/chat/employee/${sender}`)
      .then(res => setChat(res.data));
  }, [sender]);

  const sendMessage = () => {
    if (!message.trim()) return;
    const msg = { sender, receiver, message };
    axios.post("http://localhost:8081/api/chat/send", msg).then(() => {
      setChat([...chat, msg]);
      setMessage("");
    });
  };

  return (
    <div className="employee-chat-container">
      <h2>Chat with HR</h2>
      <div className="employee-chat-box">
        {chat.map((msg, i) => (
          <div key={i} className={msg.sender === sender ? "employee-message" : "hr-message"}>
            <p><strong>{msg.sender}</strong>: {msg.message}</p>
          </div>
        ))}
      </div>
      <div className="employee-input-area">
        <input value={message} onChange={e => setMessage(e.target.value)} placeholder="Type message..." />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
