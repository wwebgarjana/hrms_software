import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Mainnavbar.css';

const Mainnavbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const dropdownRef = useRef(null);
  const { userEmail, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleProfilePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img
          src="https://webgarjana.com/wp-content/uploads/2021/09/1746793576466-e1746851437889.png"
          alt="Company Logo"
          className="nav-logo"
        />
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/help">Help</Link>

        {userEmail ? (
          <div className="profile-container" ref={dropdownRef}>
            <div
              className="profile-circle"
              onClick={() => setShowDropdown((prev) => !prev)}
            >
              {profileImage ? (
                <img src={profileImage} alt="Profile" className="profile-img" />
              ) : (
                userEmail.charAt(0).toUpperCase()
              )}
            </div>

            {showDropdown && (
              <div className="profile-dropdown">
                <div className="email-display">{userEmail}</div>

                {/* <label className="upload-label">
                  Upload Photo
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleProfilePhotoUpload}
                    className="upload-input"
                  />
                </label> */}

                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="login-link">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Mainnavbar;
