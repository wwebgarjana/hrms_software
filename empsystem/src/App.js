// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Mainnavbar';
import Home from './Components/Home';
import Services from './Components/Services';
import Help from './Components/Help';
import Login from './Components/Login';

import EmployeeDashboard from './Components/EmployeeDashboard';
import HRDashboard from './HRComponents/HRDashboard';

import EmployeeProfile from './Components/EmployeeProfile';
import Attendance from './Components/Attendance';
import Leave from './Components/Leave';
import Raise from './Components/Raise';
import Payroll from './Components/Payroll';
import TaskProject from './Components/TaskProject';
import DocumentationPolicy from './Components/DocumentationPolicy';

import Footer from './Components/Footer';

import './App.css';
import InternalCommunication from './Components/InternalCommunication';
import EmployeeHelp from './Components/EmployeeHelp';

import CompanyProfile from './HRComponents/CompanyProfile';
import HRLeave from './HRComponents/HRLeave';
import HRPayroll from './HRComponents/HRPayroll';
import HRAttendance from './HRComponents/HRAttendance';
import HRAnalytics from './HRComponents/HRAnalytics';
import HRDocumentSection from './HRComponents/HRDocumentSection';
import HRHelp from './HRComponents/HRHelp';
import HREmpManage from './HRComponents/HREmpManage';
import HRNotification from './HRComponents/HRNotification';
import HRClaim from './HRComponents/HRClaim';
import HRRaise from './HRComponents/HRRaise';
import HRInternalCommunication from './HRComponents/HRInternalCommunication';
import HRTaskProject from './HRComponents/HRTaskProject';
import EmployeeClaim from './Components/EmployeeClaim';
import EmpAnnouncement from './Components/EmpAnnouncement';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/help" element={<Help />} />

        {/* Employee Dashboard with Nested Routes */}
        <Route path="/employee" element={<EmployeeDashboard />}>
          <Route path="dashboard" element={<div />} /> {/* Shows Home inside Dashboard */}
          <Route path="profile" element={<EmployeeProfile />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="leave" element={<Leave />} />
          <Route path="raise" element={<Raise />} />
          <Route path="payroll" element={<Payroll />} />
          <Route path="employeeclaim" element={<EmployeeClaim />} />
          <Route path="empannouncement" element={<EmpAnnouncement />} />
          <Route path="taskproject" element={<TaskProject />} />
          <Route path="documentationpolicy" element={<DocumentationPolicy />} />
          <Route path="internalcommunication" element={<InternalCommunication />} />
          <Route path="employeehelp" element={<EmployeeHelp />} />
        </Route>

        {/* HR Dashboard with Nested Routes */}
        <Route>
        <Route path="/hr" element={<HRDashboard />} />
        <Route path="/hr/company-profile" element={<CompanyProfile />} />
        <Route path="/hr/hrleave" element={<HRLeave />} />
        <Route path="/hr/hrpayroll" element={<HRPayroll />} />
        <Route path="/hr/hrattendance" element={<HRAttendance />} />
         <Route path="/hr/hranalytics" element={<HRAnalytics />} />
         <Route path="/hr/hrdocumentsection" element={<HRDocumentSection />} />
         <Route path="/hr/hrhelp" element={<HRHelp />} />
         <Route path="/hr/hrempmanage" element={<HREmpManage />} />
         <Route path="/hr/hrnotification" element={<HRNotification />} />
          <Route path="/hr/hrclaim" element={<HRClaim />} />
          <Route path="/hr/hrraise" element={<HRRaise />} />
          <Route path="/hr/hrinternalcomm" element={<HRInternalCommunication />} />
          <Route path="/hr/hrtaskproject" element={<HRTaskProject />}/>
      </Route>
      
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
