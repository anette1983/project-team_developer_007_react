import { useEffect, useState } from 'react';
import UserLogoModal from './UserLogoModal/UserLogoModal';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserAvatar, selectUserName } from 'redux/auth/selectors';
import css from './UserProfile.module.css';
import defaultUserAvatar from '../../../images/header/userDefault.png';
import UserLogoutModal from './UserLogoutModal';
import UserInfoModal from './UserInfoModal/UserInfoModal';
import { refreshUser } from 'redux/auth/operations';

const defualtImage = defaultUserAvatar;
const UserLogo = () => {
  const [modalToShow, setModalToShow] = useState(false);

  const dispatch = useDispatch();

  const nickName = useSelector(selectUserName);
  const newAvatarUrl = useSelector(selectUserAvatar);
  const closeModal = () => {
    setModalToShow(false);
  };

  const handleKeyDown = event => {
    if (event.keyCode === 27) {
      setModalToShow(false);
    }
  };
  const handleDocumentClick = e => {
    if (!e.target.parentNode.id || e.target.parentNode.id !== 'modal') {
      setModalToShow(false);
      return;
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    dispatch(refreshUser);
  }, [dispatch]);

  return (
    <div id="modal">
      <button
        type="button"
        onClick={() => {
          setModalToShow('User Logo');
        }}
        className={css.UserLogoContainer}
        id="modal"
      >
        <img
          src={newAvatarUrl || defualtImage}
          alt="avatar_image"
          className={css.avatarHeaderImg}
        />
        <span className={css.nickName}>{nickName}</span>
      </button>
      <div id="modal">
        {modalToShow === 'User Logo' && (
          <UserLogoModal
            closeUserLogoModal={closeModal}
            openUserInfoModal={() => setModalToShow('Edit Profile')}
            openUserLogoutModal={() => setModalToShow('Log Out')}
          />
        )}
        {modalToShow === 'Log Out' && (
          <UserLogoutModal closeUserLogoutModal={closeModal} />
        )}
        {modalToShow === 'Edit Profile' && (
          <UserInfoModal onClose={closeModal} />
        )}
      </div>
    </div>
  );
};
export default UserLogo;
