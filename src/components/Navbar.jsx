import React from 'react'
import { useRef } from 'react';

const Navbar = () => {
    const lastActiveLink = useRef();

    const navItems = [
    {
      label: 'Home',
      link: '#home',
      className: 'nav-link active',
      ref: lastActiveLink
    },
    {
      label: 'Books',
      link: '#books',
      className: 'nav-link'
    },
    {
      label: 'Genre',
      link: '#',
      className: 'nav-link'
    },
    {
      label: 'About Us',
      link: '#about',
      className: 'nav-link'
    },
    {
      label: 'Contact',
      link: '#contact',
      className: 'nav-link'
    }
  ];
  return (
    <nav className="nav-items hidden">
        {
            navItems.map(({ label, link, className, ref }, key)=>
            (
                <a href={link}
                key={key}
                ref={ref}
                className={className} 
                onClick={null}>
                    {label}

                </a>
            ))
        }
        
    </nav>
  )
}

export default Navbar
