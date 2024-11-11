import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaPython } from 'react-icons/fa';  // Font Awesome icons
import { SiNextdotjs, SiDjango } from 'react-icons/si'; // Other useful icons

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 />, description: 'Proficient in HTML5, structuring web pages.', progress:'90' },
    { name: 'CSS', icon: <FaCss3Alt />, description: 'Advanced styling with CSS3, Flexbox, and Grid.', progress:'90'  },
    { name: 'JavaScript', icon: <FaJs />, description: 'Strong knowledge of JavaScript for dynamic web applications.', progress:'60'  },
    { name: 'React', icon: <FaReact />, description: 'Experience building dynamic UIs using React.', progress:'70'  },
    { name: 'Next.js', icon: <SiNextdotjs />, description: 'Building fast, scalable web applications using Next.js.', progress:'70'  },
    { name: 'Bootstrap', icon: <FaBootstrap />, description: 'Responsive web design with Bootstrap.', progress:'90'  },
    { name: 'Django', icon: <SiDjango />, description: 'Backend development with Django and Python.', progress:'70'  },
  ];

  return (
    <div className="container my-5 text-white">
      <div className="text-center mb-5">
        <h1 id="skills" className="display-4">Skills</h1>
        <hr className="mb-5" />
      </div>

      <div className="row">
        {skills.map((skill, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card bg-dark text-white shadow-lg">
              <div className="card-body text-center">
                <div className="mb-3" style={{ fontSize: '3rem' }}>
                  {skill.icon}
                </div>
                <h3 className="h4">{skill.name}</h3>
                <p>{skill.description}</p>
                {/* Optional: You can add a progress bar here if you'd like */}
                <div className="progress mt-3" style={{ height: '5px' }}>
                  <div className="progress-bar" role="progressbar" style={{ width: `${skill.progress}%` }} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="mt-5" />
    </div>
  );
};

export default Skills;
