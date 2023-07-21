import css from './UserLogo.module.css';
import { ReactComponent as Arrow } from '../../../../images/header/svg/arrow-right.svg';
import { ReactComponent as Pencil } from '../../../../images/header/svg/pencil.svg';
// import { useState } from 'react';

const UserLogoModal = ({ openUserLogoutModal, openUserInfoModal }) => {
  return (
    <>
      <div className={css.UserLogoModal} id="modal">
        <button
          type="button"
          onClick={openUserInfoModal}
          className={css.UserLogoModal_editButton}
          id="modal"
        >
          <span>Edit profile</span>
          <span id="modal">
            <Pencil />
          </span>
        </button>
        <button
          type="button"
          onClick={openUserLogoutModal}
          className={css.UserLogoModal_button}
          id="modal"
        >
          <span>Log out</span>
          <span className={css.UserLogoModal_buttonSVG} id="modal">
            <Arrow />
          </span>
        </button>
      </div>
    </>
  );
};
export default UserLogoModal;
