const Profile = () => {
    return (
      <>
        <div className="container text-light py-5" id="profile" style={{ position: 'relative', zIndex: 1 }}>
          {/* Background */}
          <div className="background-overlay"></div>
  
          <div className="text-center">
            <div className="h1 mb-4 fadeInUp">
              My name is <span className="text-warning">Syed Muhammad Aziz Ahmed</span>
            </div>
            <hr className="text-light" />
  
            <div className="h4 mx-5 text-light fadeInUp">
              and I have been honing my skills in web development since 2018. Over the years, I have gained extensive experience in building dynamic, user-friendly web applications, specializing in full-stack development with React, Next.js, and Django.
              <br />
              <br />
              I am passionate about creating clean, efficient code and delivering high-quality solutions that meet both technical and business requirements. Additionally, I leverage Bootstrap for responsive, mobile-first design to ensure an optimal user experience across devices.
              <br />
              <br />
              My continuous drive to learn and adapt to new technologies allows me to stay at the forefront of web development trends and best practices, apart from this I teach online to motivate young developers and guide them to the right path of Dev.
            </div>
          </div>
          <hr className="text-light" />
        </div>
      </>
    );
  }
  
  export default Profile;
  