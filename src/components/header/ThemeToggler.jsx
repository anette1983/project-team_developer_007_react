import React, { useState, useEffect } from 'react';
import Modal from './Modal/Modal';

const ThemeToggler = () => {
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

  return <div>{windowWidth < 1440 && <Modal />}</div>;
};

export default ThemeToggler;

// <div>
//   {windowWidth > 1440 ? (
//     <p onClick={() => console.log('change theme')}>Theme Toggler</p>
//   ) : (
//     <Modal />
//   )}
// </div>;
