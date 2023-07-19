import { NavLink } from 'react-router-dom/dist';
// import css from './header.module.css';
import { ReactComponent as LogoDesktop } from '../../images/header/svg/logo/logoDesktop.svg';
import { ReactComponent as LogoMobile } from '../../images/header/svg/logo/logoMobile.svg';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMainPage } from 'redux/recipes/operations';
const Logo = ({ closeModal }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();

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
      <NavLink
        to="/"
        onClick={() => {
          closeModal();
          dispatch(fetchMainPage());
        }}
      >
        {windowWidth > 768 ? <LogoDesktop /> : <LogoMobile />}
      </NavLink>
    </div>
  );
};
export default Logo;
