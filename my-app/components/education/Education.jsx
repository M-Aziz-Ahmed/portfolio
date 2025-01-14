'use client'
import { useState } from 'react';

const Education = () => {
  const [selectedEducation, setSelectedEducation] = useState(null);

  const educationList = [
    {
      title: 'Matriculation In Science (Biology)',
      duration: '2020 - 2022',
      institute: 'Divisional Public School (DPS) Model Town, Lahore',
    },
    {
      title: 'Intermediate of Computer Science (ICS)',
      duration: '2022 - 2024',
      institute: 'Government College of Science (GCS), Wahdat Road, Lahore',
    },
    {
      title: 'Bachelor of Business & Information Technology (BBIT)',
      duration: 'First Semester',
      institute: 'VU, Lahore',
    }
  ];

  // Function to open the modal
  const openModal = (education) => {
    setSelectedEducation(education);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedEducation(null);
  };

  return (
    <>
      <div className="container text-white my-5" id="edu">
        <h1 className="text-center mb-5">EDUCATION</h1>
        <hr className="mb-5" />

        <div className="row g-4">
          {educationList.map((edu, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                className="card bg-dark text-white shadow-sm rounded-lg overflow-hidden clickable-card"
                onClick={() => openModal(edu)} // Clicking the education item opens the modal
              >
                <div className="card-body text-center py-4">
                  <h3 className="h4 mb-2">{edu.title}</h3>
                  {/* <p className="text-muted mb-2">{edu.institute}</p> */}
                  <span className="d-block mb-3 text-secondary">{edu.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal to show the details when clicked */}
      {selectedEducation && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-center mb-4">{selectedEducation.title}</h2>
            <p className="text-center">{selectedEducation.institute}</p>
            <p className="text-center text-muted">{selectedEducation.duration}</p>
            <div className="text-center mt-4">
              <button onClick={closeModal} className="btn btn-secondary">Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Education;
