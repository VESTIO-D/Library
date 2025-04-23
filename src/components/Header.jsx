import React from 'react'
import Navbar from './Navbar'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {

    const loacation = useLocation();

    const isBookDetails = location.pathname.startsWith('/book/');

  return (
    <header 
    className="fixed left-0 top-0 w-full h-20 flex
    items-center z-40 bg-gradient-to-b from-amber-800 to-zinc-300"
    >
        <div 
         className="px-4 max-w-screen-2xl w-full mx-auto flex justify-between items-center
         md:px-6 md:grid md:grid-cols-3"
        >
            <h1 className="">
                <Link
                 to={'/'} 
                className="logo"
                >
                    <img src="/images/logo.png"
                    width={150}
                    height={50}
                     alt="LOGO"
                     className="mt-5 md:mb-4 overflow-hidden" 
                     />
                </Link>
            </h1>

            {!isBookDetails && (<div className="relative md:justify-self-start">
                <button className="menu-btn md:hidden"
                onClick={null}>
                    <span className="material-symbols-rounded">
                        menu
                    </span>
                </button>
                <Navbar />
                
            </div>
        )}
        {!isBookDetails && (
            <div className="md:flex justify-end items-end rounded-2xl hidden">

                <span className="material-symbols-sharp  hover:bg-amber-800/50">account_circle</span>

            </div>
        )}

        </div>
    </header>
    
  )
}

export default Header
