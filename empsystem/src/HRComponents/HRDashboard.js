import React from 'react';
import { Link } from 'react-router-dom';
import './HRDashboard.css';
import image1 from '../Assets/image1.png';
import image2 from '../Assets/image2.png';
import image3 from '../Assets/image3.png';
import image4 from '../Assets/image4.png';
import image5 from '../Assets/image5.png';
import image6 from '../Assets/image6.png';
import image7 from '../Assets/image7.png';
import image8 from '../Assets/image8.png';
import image9 from '../Assets/image9.png'; 
import image10 from '../Assets/image10.png';
import image11 from '../Assets/image11.png';
import image12 from '../Assets/image12.png';
import image13 from '../Assets/image13.png'; // ✅ Correct image import

function HRDashboard() {
  return (
    <div className="hr-dashboard">
      <Link to="/hr/company-profile" className="hr-card-link">
        <div className="hr-card">
            <h3>Company Profile</h3>
          <img src={image1} alt="Company Profile" className="hr-card-img" />
          
        </div>
      </Link>

     <Link to="/hr/hrempmanage" className="hr-card-link">
        <div className="hr-card">
            <h3>Employee Management</h3>
          <img src={image2} alt="Employee Management" className="hr-card-img" />
          
        </div>
      </Link>
      <Link to="/hr/hrattendance" className="hr-card-link">
        <div className="hr-card">
            <h3>Attendance</h3>
          <img src={image3} alt="Attendance" className="hr-card-img" />
          
        </div>
      </Link>
      <Link to="/hr/hrtaskproject" className="hr-card-link">
        <div className="hr-card">
            <h3>Task & Project</h3>
          <img src={image13} alt="Task & Project" className="hr-card-img" />
          
        </div>
      </Link>
      <Link to="/hr/hrleave" className="hr-card-link">
        <div className="hr-card">
            <h3>Leave</h3>
          <img src={image4} alt="Leave" className="hr-card-img" />
          
        </div>
      </Link>
      <Link to="/hr/hrpayroll" className="hr-card-link">
        <div className="hr-card">
            <h3>Pay Roll</h3>
          <img src={image5} alt="Pay Roll" className="hr-card-img" />
          
        </div>
      </Link>
      <Link to="/hr/hranalytics" className="hr-card-link">
        <div className="hr-card">
            <h3>HR Analytics</h3>
          <img src={image6} alt="HR Analytics" className="hr-card-img" />
          
        </div>
      </Link>
      <Link to="/hr/hrdocumentsection" className="hr-card-link">
        <div className="hr-card">
            <h3>Documents & Policy Control</h3>
          <img src={image7} alt="Documents & Policy Control" className="hr-card-img" />
          
        </div>
      </Link>
      <Link to="/hr/hrclaim" className="hr-card-link">
        <div className="hr-card">
            <h3>Claim</h3>
          <img src={image8} alt="Claim" className="hr-card-img" />
          
        </div>
      </Link>
      <Link to="/hr/hrnotification" className="hr-card-link">
        <div className="hr-card">
            <h3>Notifications / Announcements</h3>
          <img src={image9} alt="Notifications / Announcements" className="hr-card-img" />
          
        </div>
      </Link>
      <Link to="/hr/hrinternalcomm" className="hr-card-link">
        <div className="hr-card">
            <h3>Internal Communication</h3>
          <img src={image12} alt="Internal Communication" className="hr-card-img" />
          
        </div>
      </Link>
      <Link to="/hr/hrraise" className="hr-card-link">
        <div className="hr-card">
            <h3>Raise Ticket</h3>
          <img src={image11} alt="Raise Ticket" className="hr-card-img" />
          
        </div>
      </Link>
      <Link to="/hr/hrhelp" className="hr-card-link">
        <div className="hr-card">
            <h3>Help</h3>
          <img src={image10} alt="Help" className="hr-card-img" />
          
        </div>
      </Link>
      
      
      
    </div>
  );
}

export default HRDashboard;
