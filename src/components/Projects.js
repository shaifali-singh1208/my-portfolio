// src/components/Projects.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaInfoCircle,
  FaTimes,
  FaCheckCircle,
  FaProjectDiagram,
} from "react-icons/fa";
import "./Projects.css";

const projects = [
  // Clinic / Telemedicine (Laravel) — detailed, with WebSocket/WebRTC/AJAX tags
  {
    title: "Clinic & Telemedicine Platform (Laravel)",
    description:
      "Multi-role clinic system: separate Doctor/Patient auth, schedule & holiday management, appointment booking, video consult, ratings, and payments with admin panel.",
    detailedDescription: `
🩺 Overview
End-to-end clinic management with separate Doctor/Patient portals and a powerful Admin Panel.

✨ Key Features
- Separate Doctor & Patient authentication (role-based)
- Doctor schedule management + holiday support
- Patient search & filter (speciality, date, fees) and appointment booking
- Video consultations using WebRTC and signaling via WebSocket
- Real-time status updates and notifications (WebSocket)
- Ratings & Reviews after consultations
- Payment gateway integration and receipts
- Admin panel: manage doctors, schedules, holidays, patients, appointments, payouts, and reports

🛠️ Tech Stack & Implementation Notes
- Backend: PHP (Laravel) — REST APIs, role-based middleware, queued jobs (Redis/Queue)
- Frontend: Blade or React (hybrid), AJAX for partial updates
- Real-time: WebSocket (Laravel Echo / Pusher or socket.io bridge)
- Video: WebRTC for peer-to-peer video; signaling via WebSocket
- DB: MySQL, migrations & seeders
- Extras: File uploads, email notifications, scheduled tasks (cron)
    `,
    tags: [
      "PHP",
      "Laravel",
      "MySQL",
      "AJAX",
      "HTML",
      "CSS",
      "JavaScript",
      "WebSocket",
      "WebRTC",
      "Redis",
    ],
    github: "", // add repo link if public
    liveDemo: "",
    features: [
      "Separate Doctor/Patient Auth",
      "Schedule & Holiday Management",
      "Filtered Appointment Booking",
      "Video Consult (WebRTC)",
      "Realtime Notifications (WebSocket)",
      "Ratings & Reviews",
      "Payment Gateway Integration",
      "Admin Panel & Reports",
    ],
    screenshots: ["/images/clinic-admin-1.png", "/images/clinic-admin-2.png"],
  },

  // Travel Booking — flight, bus, hotel
  {
    title: "Travel Booking — Flights, Bus & Hotel",
    description:
      "Unified booking with search, fare rules, PNR, wallet, and payment gateway. Caching and failover handling for robust flows.",
    detailedDescription: `
✈ Project Summary
Search and book flights, buses and hotels with secure payments and a booking lifecycle (PNR, ticketing, cancellations).

✨ Highlights
- Multi-provider search & filters
- Fare quote, PNR & ticket status tracking
- Wallet balance checks, order ids, UPI/PG flows
- Robust error logging, retries, and cache expiry
- Admin settlement & reconciliation views

🛠️ Stack
- React frontend, Laravel backend
- REST APIs, Redis cache/queues
- Secure PG/UPI integration
    `,
    tags: ["React", "Laravel", "REST API", "Redis", "UPI/PG", "Caching", "Error Handling"],
    github: "",
    liveDemo: "",
    features: [
      "Multi-provider Search",
      "PNR & Ticketing",
      "Wallet/UPI/PG",
      "Cache & Retry",
      "Admin Reconciliation",
    ],
    screenshots: ["/images/travel-admin-1.png"],
  },

  // Recharge & Bill Payments
  {
    title: "Recharge & Bill Payments",
    description:
      "Mobile/DTH recharges and utility bill payments with secure transactions, receipts and history.",
    detailedDescription: `
💳 Features
- Prepaid/DTH recharge
- Utility bill payments (electricity, water, etc.)
- Transaction receipts & history
- Admin dispute management and reconciliation

🛠️ Tech
- Laravel backend, React or Blade frontend
- REST APIs, PG integration
- Role-based admin controls
    `,
    tags: ["Laravel", "React", "REST API", "Payments", "RBAC", "AJAX"],
    github: "",
    liveDemo: "",
    features: ["Recharges & Bills", "Receipts/History", "Payment Gateway", "Admin Disputes"],
    screenshots: [],
  },

 
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React and enhanced with smooth animations using Framer Motion and AnimeJS for an engaging user experience.",
    detailedDescription: `
🎨 Design Philosophy
Created a cutting-edge portfolio website that showcases my skills and projects through immersive animations and modern design principles. The site focuses on user experience and performance optimization.

✨ Key Features
- Interactive Animations with Framer Motion
- Responsive design & performance optimizations
- Contact form (EmailJS), SEO-friendly

🛠️ Stack
- React, Framer Motion, AnimeJS, CSS3
    `,
    tags: ["React", "Framer Motion", "AnimeJS", "CSS3", "Responsive Design", "Performance Optimization", "SEO", "EmailJS"],
    github: "https://github.com/shaifali-singh1208/my-portfolio",
    features: ["Responsive Design", "Smooth Animations", "Modern UI", "Performance Optimized", "Contact Form", "SEO Friendly", "Email Integration"],
    screenshots: [],
  },
 
{
  title: "Online Mockup Test",
  description:
    "A comprehensive full-stack learning management system with role-based access control, course creation, mock test functionality, and progress tracking for educational institutions.",
  detailedDescription: `
🎓 Educational Platform
Built a full-featured Learning Management System that facilitates online education with course management, student progress tracking, and assessment tools.

📝 Mock Test Feature
Students can attempt online mock tests with real-time evaluation and result generation, implemented using AJAX for seamless, no-page-reload experience.

🛠️ Tech
- React, PHP, Laravel, MySQL, JWT, Bootstrap
  `,
  tags: ["Laravel", "React", "MySQL", "JWT", "Bootstrap", "REST API", "AJAX"],
  liveDemo: "",
  features: [
    "Multi-role Access",
    "Course Builder",
    "Progress Tracking",
    "Mock Test System (AJAX)",
    "Assessment Tools",
    "Certificate Generation"
  ],
  screenshots: [],
}

  
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <>
      <motion.div
        id="projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="projects-container"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="projects-header"
        >
          <div className="header-title-row">
            <FaProjectDiagram className="section-icon" />
            <h2 className="projects-title">My Projects</h2>
          </div>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.08, duration: 0.5 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 20px rgba(0, 240, 255, 0.15)",
              }}
              className="project-card"
            >
              <h3>{project.title}</h3>
              <p className="project-short-desc">{project.description}</p>

              <div className="tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <FaGithub /> Code
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
                <button
                  onClick={() => openModal(project)}
                  className="project-button more-info-btn"
                  aria-label={`More info about ${project.title}`}
                >
                  <FaInfoCircle /> More Info
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal} aria-label="Close">
                <FaTimes />
              </button>

              <h2 className="modal-title">{selectedProject.title}</h2>

              <div className="modal-body">
                <div className="modal-section">
                  <h3>Description</h3>
                  <div style={{ whiteSpace: "pre-line" }}>
                    {selectedProject.detailedDescription}
                  </div>
                </div>

                {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                  <div className="modal-section">
                    <h3>Admin Panel Screenshots</h3>
                    <div className="screens-grid">
                      {selectedProject.screenshots.map((src, i) => (
                        <img key={i} src={src} alt={`${selectedProject.title}-ss-${i}`} className="screen-img" />
                      ))}
                    </div>
                  </div>
                )}

                <div className="modal-section">
                  <h3>Key Features</h3>
                  <ul className="features-list">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i}>
                        <FaCheckCircle className="feature-icon" /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h3>Technologies Used</h3>
                  <div className="modal-tags">
                    {selectedProject.tags.map((tag, i) => (
                      <span key={i} className="modal-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-button primary"
                    >
                      <FaGithub /> View Code
                    </a>
                  )}
                  {selectedProject.liveDemo && (
                    <a
                      href={selectedProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-button secondary"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
