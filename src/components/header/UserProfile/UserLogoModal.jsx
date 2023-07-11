import UserInfoModal from './UserInfoModal';
import UserLogoutModal from './UserLogoutModal';
import css from './UserProfile.module.css';

import { useState } from 'react';

const UserLogoModal = ({ closeUserLogoModal }) => {
  const [isOpenUserInfoModal, setIsOpenUserInfoModal] = useState(false);
  const [isOpenUserLogoutModal, setIsOpenUserLogoutModal] = useState(false);
  // const [ishidden, setIsHidden] = useState(false);

  return (
    <>
      <div className={css.UserLogoModal}>
        <button
          type="button"
          onClick={() => {
            console.log('click on UserInfoModal');
            setIsOpenUserInfoModal(true);
            // setIsHidden(true);
          }}
        >
          Edit Profile
        </button>
        <button
          type="button"
          onClick={() => {
            console.log('click on UserInfoModal');
            closeUserLogoModal();
          }}
        >
          Close
        </button>
        <button
          type="button"
          onClick={() => {
            setIsOpenUserLogoutModal(true);
            // setIsHidden(true);
          }}
        >
          Logout
        </button>
      </div>
      <>
        {isOpenUserInfoModal && (
          <UserInfoModal
            closeUserInfoModal={() => {
              setIsOpenUserInfoModal(false);
            }}
          />
        )}
      </>
      <>
        {isOpenUserLogoutModal && (
          <UserLogoutModal
            closeUserLogoutModal={() => {
              setIsOpenUserLogoutModal(false);
            }}
          />
        )}
      </>
    </>
  );
};
export default UserLogoModal;
// className={`${ishidden} ?  ${css.hidden} : ${css.UserLogoModal}`}>
