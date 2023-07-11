import React, { useState } from 'react';
import css from './Modal.module.css';
import Logo from '../Logo';
import Navigation from '../Navigation';
import { ReactComponent as Cross } from '../X.svg';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <p onClick={openModal}>Open Modal</p>

      {isOpen && (
        <div className={css.modalOverlay}>
          <span className={css.logoModal}>
            <Logo />
          </span>
          {/* <button onClick={closeModal} className={css.closeModal}>
            Close Modal
          </button> */}

          <Navigation width={500} closeModal={closeModal} />
          <Cross className={css.cross} onClick={closeModal} />
        </div>
      )}
    </>
  );
};

export default Modal;
