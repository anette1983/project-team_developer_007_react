import css from './UserProfile.module.css';

// import { useState } from 'react';

const UserLogoModal = ({

  openUserLogoutModal,
  openUserInfoModal,
}) => {
  return (
    <>
      <div className={css.UserLogoModal}>
        <button
          type="button"
          onClick={openUserInfoModal}
          className={css.UserLogoutModalButton}
        >
          Edit profile
        </button>
        <button
          type="button"
          onClick={openUserLogoutModal}
          className={css.UserLogoutModalButton}
        >
          Log out
        </button>
      </div>
    </>
  );
};
export default UserLogoModal;
// className={`${ishidden} ?  ${css.hidden} : ${css.UserLogoModal}`}>
