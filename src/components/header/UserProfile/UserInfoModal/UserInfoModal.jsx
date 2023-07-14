import React, { useState } from 'react';
import css from './UserInfoModal.module.css';
// import { Formik, Form, Field } from 'formik';
import defaultUserAvatar from '../../../../pictures/userDefault.png';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserData } from 'redux/auth/operations';
import { selectUserAvatar, selectUserName } from 'redux/auth/selectors';
import { ReactComponent as Cross } from '../../X.svg';
const defualtImage = defaultUserAvatar;

const UserInfoModal = ({ onClose }) => {
  const nickName = useSelector(selectUserName);
  const newAvatarUrl = useSelector(selectUserAvatar);

  const [name, setName] = useState(nickName);
  const [avatar, setAvatar] = useState(newAvatarUrl || '');
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const uploadAvatar = e => {
    if (e.target.files[0]) {
      const avatarTempUrl = URL.createObjectURL(e.target.files[0]);
      setAvatar(avatarTempUrl);
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    if (name) {
      formData.append('name', name);
    }
    if (file) {
      formData.append('avatar', file);
    }

    dispatch(updateUserData(formData));
    onClose();
  };

  return (
    <div id="modal">
      <form className={css.container} id="modal">
        <input
          className={css.avatarContainer}
          type="file"
          accept=".jpg, .jpeg, .png"
          id="avatar"
          name="avatar"
          onChange={uploadAvatar}
        />
        <div>
          <img src={avatar || defualtImage} alt="avatar_image" />
        </div>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className={css.UserLogoutModalButton}
        >
          Save changes
        </button>
      </form>
      <Cross className={css.cross} onClick={onClose} />
    </div>
  );
};

export default UserInfoModal;
