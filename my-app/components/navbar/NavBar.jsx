'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';  // Font Awesome icons
import { SiNextdotjs, SiDjango, SiFigma } from 'react-icons/si'; // Other useful icons

const NavBar = () => {
  const [theme, setTheme] = useState(true);
  const [activeLink, setActiveLink] = useState('#profile');  // Track active link

  const NavLinks = [
    { icon: <FaWhatsapp className="text-success display-6"/>, link: 'https://wa.me/message/VI3BD7PEX4PWF1' },
    { icon: <FaInstagram className="text-danger display-6"/>, link: 'https://www.instagram.com/azizahmed_2nd/' },
  ];

  const handleLinkClick = (link) => {
    setActiveLink(link);  // Update active link on click
  };

  return (
    <div className={`${theme ? 'bg-white' : 'bg-dark'} w-100 h-100`}>
      <div className="d-flex flex-column align-items-center">
        <div className="logo text-center rounded-circle my-2" style={{ overflow: 'hidden', height: '200px', width: '200px' }}>
          <Image src='/logo.jpg' height={300} width={300} alt="Logo" />
        </div>
        <hr />
        <div className="display-6 my-3 text-slate-600">Connect With Me</div>
        <div className="d-flex align-items-center justify-center bg-slate-300 p-2 gap-3 w-100">
          {NavLinks.map((nav, id) => (
            <div
              className={`nav-item py-3 px-2 rounded text-center ${activeLink === nav.link ? 'bg-slate-200' : ''}`}  // Highlight active link
              key={id}
            >
              <Link
                className={`nav-link ${theme ? (activeLink === nav.link ? 'text-primary' : '') : (activeLink === nav.link ? 'text-primary' : 'text-light')}`}
                href={nav.link}
                target="blank"
                onClick={() => handleLinkClick(nav.link)}  // Update active link on click
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
export default NavBar