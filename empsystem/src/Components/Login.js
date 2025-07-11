
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// function Login() {
//   const [activeRole, setActiveRole] = useState('employee');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:8081/api/onboarding/login',  {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, password, role: activeRole }),
//       });

//       if (response.ok) {
//         const user = await response.json();

//         if (!user.active) {
//           alert('🚫 Access not granted yet. Please contact Admin.');
//           return;
//         }

//         localStorage.setItem('userEmail', user.email);
//         localStorage.setItem('userRole', user.role);

//         if (user.role === 'employee') {
//           navigate('/employee/dashboard');
//         } else {
//           navigate('/hr');
//         }

//       } else {
//         alert('❌ Invalid Email or Password');
//       }
//     } catch (error) {
//       console.error(error);
//       alert('❌ Invalid User');
//     }
//   };

//   const switchRole = () => {
//     setActiveRole(activeRole === 'employee' ? 'hr' : 'employee');
//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <div className="login-main-container">
//       <div className="login-card">
//         <div className="login-left">
//           <h2>{activeRole === 'employee' ? 'EMPLOYEE' : 'HR'} LOGIN</h2>
//           <form onSubmit={handleSubmit} className="login-form">
//             <input
//               type="email"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <input
//               type="password"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <p className="forgot">
//               Forgot your {activeRole} password?
//             </p>
//             <button type="submit">LOGIN</button>
//           </form>
//         </div>

//         <div className="login-right">
//           <h2>{activeRole === 'employee' ? 'HR Portal' : 'Employee Portal'}</h2>
//           <p>Please enter your credentials to continue</p>
//           <button onClick={switchRole}>
//             {activeRole === 'employee' ? 'LOGIN AS HR' : 'LOGIN AS EMPLOYEE'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

//////////////////////
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { useAuth } from '../contexts/AuthContext'; // ✅ import context

function Login() {
  const [activeRole, setActiveRole] = useState('employee');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // ✅ get login function from context

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8081/api/onboarding/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role: activeRole }),
      });

      if (response.ok) {
        const user = await response.json();

        if (!user.active) {
          alert('🚫 Access not granted yet. Please contact Admin.');
          return;
        }

        // ✅ Save to localStorage
        localStorage.setItem('userEmail', user.email);
        localStorage.setItem('userRole', user.role);

        // ✅ Set in AuthContext so attendance works
        login(user.email);

        // ✅ Redirect based on role
        if (user.role === 'employee') {
          navigate('/employee/dashboard');
        } else {
          navigate('/hr');
        }
      } else {
        alert('❌ Invalid Email or Password');
      }
    } catch (error) {
      console.error(error);
      alert('❌ Invalid User');
    }
  };

  const switchRole = () => {
    setActiveRole(activeRole === 'employee' ? 'hr' : 'employee');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-main-container">
      <div className="login-card">
        <div className="login-left">
          <h2>{activeRole === 'employee' ? 'EMPLOYEE' : 'HR'} LOGIN</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className="forgot">
              Forgot your {activeRole} password?
            </p>
            <button type="submit">LOGIN</button>
          </form>
        </div>

        <div className="login-right">
          <h2>{activeRole === 'employee' ? 'HR Portal' : 'Employee Portal'}</h2>
          <p>Please enter your credentials to continue</p>
          <button onClick={switchRole}>
            {activeRole === 'employee' ? 'LOGIN AS HR' : 'LOGIN AS EMPLOYEE'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

