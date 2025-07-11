// File: GenerateLetters.js
import React, { useState, useRef } from 'react';
import './GenerateLetters.css';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const GenerateLetters = () => {
  const [form, setForm] = useState({
    letterType: '',
    employeeName: '',
    employeeId: '',
    designation: '',
    joiningDate: '',
    relievingDate: '',
    salary: '',
    reason: '',
  });

  const [preview, setPreview] = useState('');
  const previewRef = useRef(); // Ref for PDF content

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const generateLetter = () => {
    let content = '';
    const {
      letterType,
      employeeName,
      employeeId,
      designation,
      joiningDate,
      relievingDate,
      salary,
      reason,
    } = form;

    switch (letterType) {
      case 'Offer Letter':
        content = `Dear ${employeeName},\n\nWe are pleased to offer you the position of ${designation} at our company. Your employee ID will be ${employeeId}, and your salary will be ₹${salary} per annum.\n\nJoining Date: ${joiningDate}\n\nWelcome aboard!`;
        break;
      case 'Appointment Letter':
        content = `Dear ${employeeName},\n\nThis is your official appointment letter for the role of ${designation}. Your joining date is ${joiningDate}.\n\nRegards.`;
        break;
      case 'Promotion Letter':
        content = `Dear ${employeeName},\n\nCongratulations! You are being promoted to the position of ${designation}. Reason: ${reason}.\n\nEffective Date: ${joiningDate}`;
        break;
      case 'Relieving Letter':
        content = `Dear ${employeeName},\n\nThis is to confirm that you have been relieved from your duties as of ${relievingDate}. Reason: ${reason}.\n\nWe wish you all the best.`;
        break;
      case 'Experience Letter':
        content = `To whom it may concern,\n\nThis is to certify that ${employeeName} worked with us as a ${designation} from ${joiningDate} to ${relievingDate}.\n\nWe found them sincere and hardworking.`;
        break;
      default:
        content = 'Please select a valid letter type.';
    }

    setPreview(content);
  };

  const generatePDF = () => {
    const input = previewRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfHeight = (imgProps.height * pageWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 10, pageWidth, pdfHeight);
      pdf.save(`${form.letterType}_${form.employeeName}.pdf`);
    });
  };

  return (
    <div className="generate-letters-container">
      <h2>Generate Letters</h2>
      <p><strong>Letter Types Supported:</strong></p>
      <ul className="letter-types">
        <li>a) Offer Letter</li>
        <li>b) Appointment Letter</li>
        <li>c) Promotion Letter</li>
        <li>d) Relieving Letter</li>
        <li>e) Experience Letter</li>
      </ul>

      <form className="letter-form">
        <label>Letter Type</label>
        <select name="letterType" onChange={handleChange} required>
          <option value="">Select</option>
          <option>Offer Letter</option>
          <option>Appointment Letter</option>
          <option>Promotion Letter</option>
          <option>Relieving Letter</option>
          <option>Experience Letter</option>
        </select>

        <label>Employee Name</label>
        <input name="employeeName" onChange={handleChange} required />

        <label>Employee ID</label>
        <input name="employeeId" onChange={handleChange} required />

        <label>Designation</label>
        <input name="designation" onChange={handleChange} required />

        <label>Joining Date</label>
        <input type="date" name="joiningDate" onChange={handleChange} />

        <label>Relieving Date</label>
        <input type="date" name="relievingDate" onChange={handleChange} />

        <label>Salary (if applicable)</label>
        <input name="salary" type="number" onChange={handleChange} />

        <label>Reason (if applicable)</label>
        <input name="reason" onChange={handleChange} />

        <button type="button" onClick={generateLetter}>Generate Letter</button>
      </form>

      {preview && (
        <div>
          <div className="letter-preview" ref={previewRef}>
            <h3>Letter Preview</h3>
            <pre>{preview}</pre>
          </div>
          <button className="letter-form" onClick={generatePDF}>Download as PDF</button>
        </div>
      )}
    </div>
  );
};

export default GenerateLetters;