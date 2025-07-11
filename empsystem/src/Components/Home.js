import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/login'); // Make sure your route for login page is "/login"
  };

  return (
    <>
      <section className="hero">
        <div className="background-image"></div>
        <div className="hero-content-area">
          <h1>Employee Management</h1>
          <h3>
            A strong employee management system helps organizations streamline
            tasks, improve productivity.
          </h3>
          <button className="btn" onClick={handleStartClick}>
            Let's Start
          </button>
        </div>
      </section>

      <section className="features">
        <div className="card-container">
          <div className="card">
            <img
              src="https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg?auto=compress&cs=tinysrgb&h=300"
              alt="Team Member 1"
            />
            <h4>John Doe</h4>
            <p>Project Manager</p>
          </div>

          <div className="card">
            <img
              src="https://www.shrmpro.com/wp-content/uploads/2020/08/Employee-Management.png"
              alt="Team Member 2"
            />
            <h4>Jane Smith</h4>
            <p>UX Designer</p>
          </div>

          <div className="card">
            <img
              src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&h=300"
              alt="Team Member 3"
            />
            <h4>David Lee</h4>
            <p>Software Engineer</p>
          </div>
        </div>

        <div className="info-text">
          <h3>Rest information will go here</h3>
          <p>
            Efficient employee management systems improve engagement, ensure
            compliance, and support overall business growth.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
