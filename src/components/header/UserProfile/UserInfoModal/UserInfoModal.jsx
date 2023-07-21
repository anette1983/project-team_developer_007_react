import React, { useState } from 'react';
import css from './UserInfoModal.module.css';
// import { Formik, Form, Field } from 'formik';
import defaultUserAvatar from '../../../../images/header/userDefault.png';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserData } from 'redux/auth/operations';
import { selectUserAvatar, selectUserName } from 'redux/auth/selectors';
import { ReactComponent as Cross } from '../../../../images/header/svg/X.svg';
import { ReactComponent as Pencil } from '../../../../images/header/svg/pencil.svg';
import { ReactComponent as UserDefault } from '../../../../images/header/svg/usericondefault.svg';
import { ReactComponent as Plus } from '../../../../images/header/svg/plus.svg';
import { Notify } from 'notiflix';

const defualtImage = defaultUserAvatar;

const UserInfoModal = ({ onClose }) => {
  const nickName = useSelector(selectUserName);
  const newAvatarUrl = useSelector(selectUserAvatar);

  const [name, setName] = useState(nickName);
  const [avatar, setAvatar] = useState(newAvatarUrl || '');
  const [file, setFile] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

  const uploadAvatar = e => {
    if (!e.target.files[0]) return;
    if (e.target.files[0].size > 5000000)
      return Notify.failure(`Image too big, choose another image`);

    const avatarTempUrl = URL.createObjectURL(e.target.files[0]);
    setDisabled(false);
    setAvatar(avatarTempUrl);
    setFile(e.target.files[0]);
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
    <form id="modal" className={css.container}>
      <label htmlFor="avatar" id="modal" className={css.avatarLabel}>
        <input
          className={css.avatarContainer}
          type="file"
          accept=".jpg, .jpeg, .png"
          id="avatar"
          name="avatar"
          onChange={uploadAvatar}
        />
        <Plus className={css.addAvatarUrl} id="modal" />

        <img
          src={avatar || defualtImage}
          alt="avatar_image"
          className={css.avatarImage}
        />
        <Cross className={css.cross} onClick={onClose} />
      </label>

      <label htmlFor="name" id="modal" className={css.label}>
        <Pencil className={css.svgafter} />
        <input
          type="text"
          id="name"
          name="name"
          placeholder={nickName}
          onChange={e => {
            setDisabled(false);
            setName(e.target.value);
          }}
          value={name}
          className={css.input}
          autoComplete="off"
        />
        <UserDefault className={css.svgbefore} />
      </label>
      <button
        type="submit"
        onClick={handleSubmit}
        className={css.UserLogoutModalButton}
        aria-label="edit-profile-save-changes-button"
        disabled={disabled}
      >
        Save changes
      </button>
    </form>
  );
};

export default UserInfoModal;
