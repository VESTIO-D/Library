import React from 'react'

const Footer = () => {

    const navItems = [
        {
          label: 'Home',
          link: '#home',
          className: 'nav-link active',
        },
        {
          label: 'Books',
          link: '#books',
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
    <footer className="mt-28 lg:mt-36 w-full z-40 bg-amber-800/5">
        <div className="footer w-full">

            <div
             className="foot_pieces"
            >
                <h1 className="subhead mb-5">Adress</h1>
                <p className="text-[16px] text-amber-950/70">Kochi, Kerla</p>
                <p className="text-[16px] text-amber-950/70">Kakanadu, 682303</p>
            </div>
            
            <div
             className="foot_pieces"
            >
                <h1 className="subhead mb-5">Contact Us</h1>
                <p className="text-[16px] text-amber-950/70">(91)9207287491</p>
                <p className="text-[16px] text-amber-950/70">library@gmail.com</p>
            </div>

            <div
             className="foot_pieces"
             >
                <h1 className="subhead mb-5">Discover</h1>
                {navItems.map((r, key) => (
                    <a
                     href={r.link} 
                     className={r.className + "text-[16px] text-amber-950/70"}
                     key={key}
                     >
                        {r.label}
                    </a>
                ))}
             </div>

        </div>

        <div
         className="text-center py-5"
         >
            <p className="text-sm text-amber-950/70">Copyright <span className="font-semibold text-black">©</span> 2025 All rights reserved | Get in contact with  by Libray@gmail.com</p>
         </div>

    </footer>
  )
}

export default Footer
