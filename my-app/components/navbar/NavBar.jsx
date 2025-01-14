'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';  // Font Awesome icons

const NavBar = () => {
  const [theme, setTheme] = useState(true); // Light theme by default
  const [activeLink, setActiveLink] = useState('#profile');  // Track active link

  const NavLinks = [
    { icon: <FaWhatsapp className="text-success display-6" />, link: 'https://wa.me/message/VI3BD7PEX4PWF1' },
    { icon: <FaInstagram className="text-danger display-6" />, link: 'https://www.instagram.com/azizahmed_2nd/' },
  ];

  const handleLinkClick = (link) => {
    setActiveLink(link);  // Update active link on click
  };

  return (
    <div className={`${theme ? 'bg-white' : 'bg-dark'} w-100 h-100`}>
      <div className="d-flex flex-column align-items-center py-5">
        {/* Logo Section */}
        <div className="logo text-center rounded-circle my-4" style={{ overflow: 'hidden', height: '200px', width: '200px' }}>
          <Image src='/logo.jpg' height={300} width={300} alt="Logo" />
        </div>
        <hr className={`${theme ? 'text-dark' : 'text-light'}`} />
        {/* Heading */}
        <div className="display-6 my-3 text-center" style={{ color: theme ? '#444' : '#ddd' }}>
          Connect With Me
        </div>
        
        {/* Navigation Links */}
        <div className="d-flex justify-content-center align-items-center gap-4 py-3 w-100">
          {NavLinks.map((nav, id) => (
            <div
              className={`nav-item py-3 px-4 rounded-circle text-center ${activeLink === nav.link ? (theme ? 'bg-light' : 'bg-secondary') : ''}`}  // Highlight active link
              key={id}
            >
              <Link
                className={`nav-link ${theme ? (activeLink === nav.link ? 'text-primary' : 'text-dark') : (activeLink === nav.link ? 'text-primary' : 'text-light')}`}
                href={nav.link}
                target="blank"
                onClick={() => handleLinkClick(nav.link)}  // Update active link on click
                style={{
                  transition: 'all 0.3s ease',
                  fontSize: '2rem',
                }}
              >
                {nav.icon}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
