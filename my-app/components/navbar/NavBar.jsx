'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NavBar = () => {
  const [theme, setTheme] = useState(true);
  const [activeLink, setActiveLink] = useState('#profile');  // Track active link

  const NavLinks = [
    { title: 'Profile', link: '#profile' },
    { title: 'Education', link: '#edu' },
    { title: 'Certifications', link: '#cert' },
    { title: 'Skills', link: '/' },
    { title: 'Experience', link: '/' },
  ];

  const handleLinkClick = (link) => {
    setActiveLink(link);  // Update active link on click
  };

  return (
    <div className={`${theme ? 'bg-white' : 'bg-dark'} w-100 h-100`}>
      <div className="d-flex flex-column align-items-center">
        <div className="logo text-center rounded-circle" style={{ overflow: 'hidden', height: '250px', width: '250px' }}>
          <Image src='/logo.jpg' height={300} width={300} alt="Logo" />
        </div>
        <hr />
        <div className="d-flex flex-column gap-3 w-100">
          {NavLinks.map((nav, id) => (
            <div
              className={`nav-item py-3 px-2 rounded text-center ${activeLink === nav.link ? 'bg-slate-200' : ''}`}  // Highlight active link
              key={id}
            >
              <Link
                className={`nav-link ${theme ? (activeLink === nav.link ? 'text-primary' : '') : (activeLink === nav.link ? 'text-primary' : 'text-light')}`}
                href={nav.link}
                onClick={() => handleLinkClick(nav.link)}  // Update active link on click
              >
                {nav.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default NavBar