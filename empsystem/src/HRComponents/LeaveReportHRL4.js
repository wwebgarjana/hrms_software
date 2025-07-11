import React, { useState } from 'react';
import './LeaveReportHRL4.css';
import { Bar, Pie } from 'react-chartjs-2';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';

// Chart.js required element registration
import {
  Chart as ChartJS,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
);

const dummyData = [
  {
    employee: 'Pooja Lakhangave',
    department: 'HR',
    sick: 2,
    casual: 3,
    paid: 5,
    balance: 10,
    total: 10,
    approved: 8,
    rejected: 1,
    pending: 1,
  },
  {
    employee: 'Rahul Verma',
    department: 'IT',
    sick: 1,
    casual: 2,
    paid: 4,
    balance: 13,
    total: 7,
    approved: 6,
    rejected: 0,
    pending: 1,
  },
];

function LeaveReportHRL4() {
  const [filter, setFilter] = useState({ month: '', year: '', department: '', type: '' });

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text('Leave Report', 14, 16);
    autoTable(doc, {
      startY: 20,
      head: [['Employee', 'Dept', 'Sick', 'Casual', 'Paid', 'Balance', 'Total', 'Approved', 'Rejected', 'Pending']],
      body: dummyData.map((d) => [d.employee, d.department, d.sick, d.casual, d.paid, d.balance, d.total, d.approved, d.rejected, d.pending]),
    });
    doc.save('leave-report.pdf');
  };

  const exportExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(dummyData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Leave Report');
    XLSX.writeFile(workbook, 'leave-report.xlsx');
  };

  const pieData = {
    labels: ['Approved', 'Rejected', 'Pending'],
    datasets: [
      {
        label: 'Leave Status',
        data: [15, 1, 2],
        backgroundColor: ['#28a745', '#dc3545', '#ffc107'],
      },
    ],
  };

  const barData = {
    labels: dummyData.map((d) => d.employee),
    datasets: [
      {
        label: 'Sick Leaves',
        data: dummyData.map((d) => d.sick),
        backgroundColor: '#17a2b8',
      },
      {
        label: 'Casual Leaves',
        data: dummyData.map((d) => d.casual),
        backgroundColor: '#ffc107',
      },
      {
        label: 'Paid Leaves',
        data: dummyData.map((d) => d.paid),
        backgroundColor: '#007bff',
      },
    ],
  };

  return (
    <div className="report-container">
      <h2>Leave Report & Analytics</h2>

      <div className="filter-controls">
        <select onChange={(e) => setFilter({ ...filter, month: e.target.value })}>
          <option value="">Month</option>
          <option value="01">January</option>
          <option value="02">February</option>
          <option value="03">March</option>
          <option value="04">April</option>
        </select>
        <select onChange={(e) => setFilter({ ...filter, year: e.target.value })}>
          <option value="">Year</option>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
        </select>
        <select onChange={(e) => setFilter({ ...filter, department: e.target.value })}>
          <option value="">Department</option>
          <option value="HR">HR</option>
          <option value="IT">IT</option>
        </select>
        <select onChange={(e) => setFilter({ ...filter, type: e.target.value })}>
          <option value="">Leave Type</option>
          <option value="Sick">Sick</option>
          <option value="Casual">Casual</option>
          <option value="Paid">Paid</option>
        </select>
      </div>

      <div className="export-buttons">
        <button onClick={exportPDF}>Export PDF</button>
        <button onClick={exportExcel}>Export Excel</button>
      </div>

      <div className="summary-table">
        <table>
          <thead>
            <tr>
              <th>Employee</th><th>Dept</th><th>Sick</th><th>Casual</th><th>Paid</th><th>Balance</th><th>Total</th><th>Approved</th><th>Rejected</th><th>Pending</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((d, i) => (
              <tr key={i}>
                <td>{d.employee}</td><td>{d.department}</td><td>{d.sick}</td><td>{d.casual}</td><td>{d.paid}</td><td>{d.balance}</td><td>{d.total}</td><td>{d.approved}</td><td>{d.rejected}</td><td>{d.pending}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="charts">
        <div className="bar-chart">
          <Bar data={barData} />
        </div>
        <div className="pie-chart">
          <Pie data={pieData} />
        </div>
      </div>
    </div>
  );
}

export default LeaveReportHRL4;