'use client'
import { useState } from 'react';
import Image from "next/image";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      title: 'Web Designing',
      duration: '2 Months',
      institute: 'House Of Professionals (HOP), Johar Town, Lahore',
      imageSrc: '/certificate2.jpg',
    },
    {
      title: 'Web Development',
      duration: '6 Months',
      institute: 'House Of Professionals (HOP), Johar Town, Lahore',
      imageSrc: '/certificate1.png',
    },
    {
      title: 'Data Science and Machine Learning',
      duration: '6 Months',
      institute: 'From Ideoversity, Arfa Kareem Tower, Lahore',
      imageSrc: '/certificate3.jpg',
    }
  ];

  // Function to open the modal
  const openModal = (cert) => {
    setSelectedCertificate(cert);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <>
      <div className="container text-white py-5" id="cert">
        <h1 className="text-center mb-5">Certifications</h1>
        <hr className="mb-5" />

        <div className="row g-4">
          {certificates.map((cert, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                className="card bg-dark text-white shadow-sm rounded-lg overflow-hidden clickable-card"
                onClick={() => openModal(cert)} // Clicking the certificate opens the modal
              >
                <div className="card-body text-center py-4">
                  <div className="mb-3" style={{ fontSize: '2.5rem', color: '#ff6600' }}>
                    <Image
                      src={cert.imageSrc}
                      width={150}
                      height={150}
                      alt="Certificate"
                      className="img-fluid"
                    />
                  </div>
                  <h3 className="h4 mb-2">{cert.title}</h3>
                  {/* <p className="text-muted mb-2">{cert.institute}</p> */}
                  <span className="d-block mb-3 text-secondary">{cert.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal to show the details when clicked */}
      {selectedCertificate && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-center mb-4">{selectedCertificate.title}</h2>
            <p className="text-center">{selectedCertificate.institute}</p>
            <p className="text-center text-muted">{selectedCertificate.duration}</p>
            <div className="mt-4 text-center">
              <Image
                src={selectedCertificate.imageSrc}
                width={650}
                height={650}
                alt="Certificate Image"
                className="img-fluid rounded-lg shadow-sm"
              />
            </div>
            <div className="text-center mt-4">
              <button onClick={closeModal} className="btn btn-secondary">Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Certificates;
