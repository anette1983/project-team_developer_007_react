import { useState } from 'react';
import UserLogoModal from './UserLogoModal';
import { useSelector } from 'react-redux';
import { selectUserAvatar, selectUserName } from 'redux/auth/selectors';
import css from './UserProfile.module.css';
import defaultUserAvatar from '../../../pictures/userDefault.png';
import UserLogoutModal from './UserLogoutModal';
import UserInfoModal from './UserInfoModal/UserInfoModal';
const defualtImage = defaultUserAvatar;
const UserLogo = () => {
  const [modalToShow, setModalToShow] = useState(false);

  // const dispatch = useDispatch();

  const nickName = useSelector(selectUserName);
  const newAvatarUrl = useSelector(selectUserAvatar);
  const closeModal = () => {
    setModalToShow(false);
  };
  return (
    <div>
      <button
        type="button"
        onClick={e => {
          console.log('click on UserLogo');
          setModalToShow('User Logo');
        }}
        className={css.UserLogoContainer}
      >
        <img
          src={newAvatarUrl || defualtImage}
          alt="avatar_image"
          className={css.avatarHeaderImg}
        />
        <span>{nickName}zaglushka</span>
      </button>

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
      {modalToShow === 'Edit Profile' && <UserInfoModal onClose={closeModal} />}
    </div>
  );
};
export default UserLogo;
