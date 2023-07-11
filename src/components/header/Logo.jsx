import { NavLink } from 'react-router-dom/dist';
// import css from './header.module.css';
import { ReactComponent as LogoDesktop } from '../../pictures/logo/logoDesktop.svg';
import { ReactComponent as LogoMobile } from '../../pictures/logo/logoMobile.svg';
import React, { useState, useEffect } from 'react';
const Logo = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Attach the handleResize function to the window's resize event
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <NavLink to="/">
        {windowWidth > 768 ? <LogoDesktop /> : <LogoMobile />}
      </NavLink>
    </div>
  );
};
export default Logo;
