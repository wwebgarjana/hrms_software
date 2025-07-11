// src/pages/Services.js
import React from 'react';
import './Services.css';
import img2 from '../Assets/img2.png';
import img4 from '../Assets/img4.png';
import img5 from '../Assets/img5.png';
import img6 from '../Assets/img6.png';


const services = [
  {
    title: 'Website Development',
    image: 'https://img.freepik.com/free-photo/web-design-technology-browsing-programming-concept_53876-163260.jpg?semt=ais_items_boosted&w=740',
    icon: '🖥️',
  },
  {
    title: 'Mobile App Development',
    image: img2,
    icon: '📱',
  },
  {
    title: 'UI/UX Design',
    image: 'https://cdn.pixabay.com/photo/2016/11/19/14/00/web-1839406_960_720.jpg',
    icon: '🎨',
  },
  {
    title: 'Digital Marketing',
    image: img4,
    icon: '📊',
  },
  {
    title: 'Graphics & Branding',
    image: img5,
    icon: '🖌️',
  },
  {
    title: 'Software Development',
    image: img6,
    icon: '💻',
  },
];

const Services = () => {
  return (
    <div className="services-container">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <img src={service.image} alt={service.title} className="service-image" />
          <div className="service-overlay">
            <div className="service-icon">{service.icon}</div>
            <h4 className="service-title">{service.title}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
