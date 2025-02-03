'use client'
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { FaSuitcase, FaCss3Alt, FaJs, FaReact, FaLinkedin } from 'react-icons/fa'; 
import { SiNextdotjs, SiDjango, SiFigma, SiFiverr, SiDiscord } from 'react-icons/si';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const experience = [
    { 
      title: 'Web Developer', 
      icon: <FaSuitcase />, 
      address: 'Oxibit Technologies, DHA Phase 2, Lahore.', 
      duration: '1 year', 
      link: 'https://www.linkedin.com/company/oxibit',
      linkIcon: <FaLinkedin />,
      imageSrc: null
    },
    {
      title: 'Web Designing', 
      icon: <FaCss3Alt />, 
      address: 'House Of Professionals (HOP), Johar Town, Lahore', 
      duration: '6 months',
      link: '',
      linkIcon: null,
      imageSrc: null
    },
    {
      title: 'Personal Project', 
      icon: <SiNextdotjs />, 
      address: 'MOUSE DPI FINDER', 
      duration: 'still making it better but it works',
      link: 'https://mousedpi.vercel.app/',
      linkIcon: null,
      imageSrc: null
    },
    {
      title: 'Freelance',
      icon: <SiFiverr />,
      address: 'Freelance Project',
      duration: '1 project (live)',
      link: 'https://www.medecose.com/',
      linkIcon: null,
      imageSrc: '/project1.png'
    },
    {
      title: 'Online Teaching',
      icon: <SiDiscord />,
      address: 'Discord Community',
      duration: 'above 100 students',
      link: 'https://discord.gg/cAb8ej98NV',
      linkIcon: null,
      imageSrc: null
    }
  ];

  // Function to open the modal
  const openModal = (exp) => {
    setSelectedExperience(exp);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedExperience(null);
  };

  return (
    <>
      <div className="container text-white py-5" id="exp">
        <h1 className="text-center mb-5">Experience</h1>
        <hr className="mb-5" />
        
        <div className="row g-4">
          {experience.map((exp, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                className="card bg-dark text-white shadow-sm rounded-lg overflow-hidden clickable-card"
                onClick={() => openModal(exp)} // Clicking the card opens the modal
              >
                <div className="card-body text-center py-4">
                  <div className="mb-3" style={{ fontSize: '2.5rem' }}>
                    {exp.icon}
                  </div>
                  <h3 className="h4 mb-2">{exp.title}</h3>
                  {/* <p className="text-muted mb-2">{exp.address}</p> */}
                  <span className="d-block mb-3 text-secondary">{exp.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal to show the details when clicked */}
      {selectedExperience && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-center mb-4">{selectedExperience.title}</h2>
            <p className="text-center">{selectedExperience.address}</p>
            <p className="text-center text-muted">{selectedExperience.duration}</p>
            {selectedExperience.imageSrc && (
              <div className="mt-4 text-center">
                <Image src={selectedExperience.imageSrc} width={650} height={650} alt="Project Image" className="img-fluid rounded-lg shadow-sm" />
                <div className="mt-3">
                  <Link href={selectedExperience.link} className="btn btn-outline-warning cer" target="_blank">Check out live project</Link>
                </div>
              </div>
            )}
            {selectedExperience.link && !selectedExperience.imageSrc && (
              <div className="mt-3 text-center">
                <Link href={selectedExperience.link} className="btn btn-outline-warning cer" target="_blank">Visit</Link>
              </div>
            )}
            <div className="text-center mt-4">
              <button onClick={closeModal} className="btn btn-secondary">Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Experience;
