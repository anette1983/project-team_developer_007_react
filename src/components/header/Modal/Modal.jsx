import React, { useState } from 'react';
import css from './Modal.module.css';
import Logo from '../Logo';
import Navigation from '../Navigation/Navigation';
import { ReactComponent as Cross } from '../../../images/header/svg/X.svg';
import sprite from '../../../images/svg/sprite.svg';

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
      <svg className={css.svg} onClick={openModal}>
        <use href={sprite + '#burger'} />
      </svg>

      {isOpen && (
        <div className={css.modalOverlay}>
          <span className={css.logoModal}>
            <Logo closeModal={closeModal} />
          </span>
          <Navigation width={500} closeModal={closeModal} />
          <Cross className={css.cross} onClick={closeModal} />
        </div>
      )}
    </>
  );
};

export default Modal;
