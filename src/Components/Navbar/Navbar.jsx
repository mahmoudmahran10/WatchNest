import React, { useEffect, useState } from "react";
import "./Navbar.css"; // Create and import your own CSS file for styling
import { animateScroll as scroll } from 'react-scroll';
import {Link , Outlet} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [scrolling, setScrolling] = useState(false);
    const Navbar1 = () => {
    
        useEffect(() => {
          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
        }, []);
      
        const handleScroll = () => {
          if (window.scrollY > 20) {
            setScrolling(true);
          } else {
            setScrolling(false);
          }
        };
    }
    Navbar1();

  return (
    <div>
    <nav className="navbar">
      <div className={scrolling ? 'navbar-scroll' : 'navbar-container'}>
             {/* Logo */}
             <div className="navbar-logo">
                 <Link to="/">WatchNest</Link>
             </div>

             {/* Links */}
             <div className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
                 <Link to="/">Home</Link>
                 <Link to="/Movies">Movies</Link>
                 <Link to="/Series">Series</Link>
                 <Link to="/Anime">Anime</Link>
                 <div className="nav-search">
                    <div className="searchbar">
                        <label htmlFor="seaerchglass"><FontAwesomeIcon className="iconglass" icon={faMagnifyingGlass} /></label><input id="seaerchglass" className="searchinputnav" type="text" placeholder="Enter Keywords...."></input>
                    </div>
                 </div>
                 <div className="nav-login">
                    <div className="loguser">
                        <Link to="/Login"><FontAwesomeIcon className="ulogc" icon={faUser} />Login</Link>
                    </div>
                </div>
          
             </div>

               

            
                

             {/* Mobile Menu Icon */}
             <div className="navbar-menu-icon" onClick={toggleMobileMenu}>
               <div className="menu-icon-bar"></div>
               <div className="menu-icon-bar"></div>
               <div className="menu-icon-bar"></div>
             </div>
      </div>
    </nav>
    <Outlet/>
    </div>

  );
};

export default Navbar;
