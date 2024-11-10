'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const NavBar = ({}) => {
    const [theme, setTheme] = useState(true);
    const NavLinks = [
        {
            title:'Home',
            link:'/',
        },
        {
            title:'About Us',
            link:'/about',
        },
        {
            title:'Contact',
            link:'/contact',
        },
        {
            title:'Projects Done',
            link:'/projects',
        },
    ]
    const path = usePathname();
  return (
  <>
  <div className={`${theme ? 'bg-white': `bg-dark`} my-5`}>
    <div className="d-flex flex-column gap-5 ">
        <div className="logo text-center">Logo</div>
        <hr />
        <div className="d-flex flex-column gap-5">
        {NavLinks.map((nav, id)=>(
            <div className={`nav-item py-3 px-2 rounded text-center ${path === nav.link ? `bg-slate-100`:``}`} key={id}>
                <Link className={`nav-link ${theme ? path === nav.link ? `text-primary`:`` : path === nav.link ? `text-primary`:`text-light`}`} href={nav.link}>{nav.title}</Link>
            </div>
        ))}
        </div>
    </div>
  </div>
  </>
  );
}

export default NavBar