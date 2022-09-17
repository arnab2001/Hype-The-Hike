import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link'
import './navbar.css';

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const location = useLocation();
  console.log(location);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  const changeBackground = () =>
  {
    if(window.scrollY >= 100)
    {
      setNavbar(true);
    }
    else
    {
      setNavbar(false);
    }
  }
  window.addEventListener('scroll', changeBackground);
  return (
    <>
      <nav className={navbar  ? 'navbar active':'navbar'} style={{position: location.pathname !== '/' ? "sticky": "fixed"}}>
        <div className='navbar-container'>
          <HashLink smooth to='/#landing' className='navbar-logo' onClick={closeMobileMenu}>
            HTH
            <i class='fab fa-typo3' />
          </HashLink>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <HashLink smooth to='/#landing' className='nav-links' onClick={closeMobileMenu}>
                Home
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink smooth
                to='/#whyus'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Why Us
              </HashLink>
            </li>
            <li className='nav-item'>
              <HashLink smooth
                to='/#contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </HashLink>
            </li>
            <li className='nav-item'>
              <Link
                to='/gallery'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Gallery
              </Link>
            </li>
            <li className='nav-item'>
              <HashLink
                smooth to='/#events'
                // smooth to='/#event_container'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Events
              </HashLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
