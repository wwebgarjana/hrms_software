import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CompanyProfile.css";

const CompanyProfile = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const backgrounds = [
    "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1500&q=80')",
    "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1500&q=80')",
    "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1500&q=80')"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <>
      <header className="cp-hero" style={{ backgroundImage: backgrounds[current] }}>
        <div className="cp-overlay"></div>
        <div className="cp-hero-content">
          <h1 className="cp-fade-in"><b>Welcome to Our Web Garjana</b></h1>
          <h3>Digital Technology</h3>
          <p className="cp-fade-in cp-delay-1">Innovating the future, one idea at a time.</p>
          <br />
          <button onClick={() => alert('Contact Us Clicked!')}>Contact Us</button>
        </div>
      </header>

      {/* ✅ Back to Dashboard Button */}
      <div className="cp-back-button-container">
        <button className="cp-back-button" onClick={() => navigate("/hr")}>
          ← Back to Dashboard
        </button>
      </div>

      <section className="cp-about cp-fade-in cp-delay-2">
        <div className="cp-container">
          <h2>About Us</h2>
          <p>
            Web Garjana Digital Technology is a full-service digital agency driven by innovation,
            creativity, and a customer-centric approach...
          </p>
        </div>
      </section>

      <section className="cp-services cp-fade-in cp-delay-3">
        <div className="cp-container">
          <h2>Our Services</h2>
          <div className="cp-services-grid">
            {[
              {
                img: "https://media.istockphoto.com/id/2210688897/photo/ux-ui-design-web-and-application-user-design-concepts-web-design-application-design-user.webp?a=1&b=1&s=612x612&w=0&k=20&c=3vTDBUL24n5mH1Hpu3kf9uVqjItR6a2lboOWV_VFQlE=",
                title: "Web Design",
                desc: "Crafting responsive, modern, and user-centric designs."
              },
              {
                img: "https://plus.unsplash.com/premium_photo-1678565879444-f87c8bd9f241?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
                title: "Web Development",
                desc: "Building powerful websites with latest technologies."
              },
              {
                img: "https://media.istockphoto.com/id/841876342/photo/putting-our-minds-together.webp?a=1&b=1&s=612x612&w=0&k=20&c=kdkQyqDRTa8fmIPxEOAR3NttSEN0fP0_Bw0gkXk6LNo=",
                title: "Application Development",
                desc: "Creating native & cross-platform mobile applications."
              },
              {
                img: "https://media.istockphoto.com/id/1700567210/photo/a-software-development-designer-or-programmer-is-typing-on-a-computer-to-create-an.webp?a=1&b=1&s=612x612&w=0&k=20&c=nDrEfYYghLAaTCcl7QkyPnQWxe3_CIM5XeVEoSD8nIM=",
                title: "Software Development",
                desc: "Developing custom software to automate your business."
              },
              {
                img: "https://media.istockphoto.com/id/1652679812/photo/digital-marketing-business-technology-website-advertisement-email-social-media-network-seo.webp?a=1&b=1&s=612x612&w=0&k=20&c=J8PY0VM1n_Sw-iUFQOm5AHE57CGsfj_o4-M4AMEmygw=",
                title: "Digital Marketing",
                desc: "Promoting your brand with SEO, PPC, and social media."
              }
            ].map((service, idx) => (
              <div className="cp-service-card" key={idx}>
                <img src={service.img} alt={service.title} />
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cp-team cp-fade-in cp-delay-3">
        <div className="cp-container">
          <h2>Meet Our Team</h2>
          <div className="cp-team-cards">
            {[
              {
                name: "Jane Doe",
                role: "CEO & Founder",
                img: "https://i.pravatar.cc/150?img=1"
              },
              {
                name: "John Smith",
                role: "Lead Developer",
                img: "https://i.pravatar.cc/150?img=2"
              },
              {
                name: "Emily Davis",
                role: "UI/UX Designer",
                img: "https://i.pravatar.cc/150?img=3"
              }
            ].map((member, idx) => (
              <div className={`cp-card cp-slide-up cp-delay-${idx}`} key={idx}>
                <img src={member.img} alt="Team member" />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="cp-footer cp-fade-in cp-delay-4">
        <p>&copy; 2025 Web Garjana Digital Technology. All rights reserved.</p>
      </footer>
    </>
  );
};

export default CompanyProfile;
