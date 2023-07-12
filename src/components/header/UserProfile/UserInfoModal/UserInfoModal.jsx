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
  const [avatar, setAvatar] = useState(newAvatarUrl);
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
    console.log(e.target.parentNode.id);
  };

  return (
    <>
      <form className={css.container} id="UserInfoMdal">
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
    </>
  );
};

export default UserInfoModal;

// export const UserProfile = ({ onClose, photoURL, userName, handleChange }) => {
//   const [avatar, setAvatar] = useState(photoURL);
//   const [file, setFile] = useState();
//   const [newName, setNewName] = useState(userName);
//   const dispatch = useDispatch();

//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   const uploadContent = e => {
//     if (e.target.files[0]) {
//       const objectUrl = URL.createObjectURL(e.target.files[0]);
//       setAvatar(objectUrl);
//       setFile(e.target.files[0]);
//     }
//   };

//   const handleSubmit = async () => {
//     const formData = new FormData();
//     if (newName) {
//       formData.append('name', newName);
//     }
//     if (file) {
//       formData.append('image', file);
//     }
//     try {
//       await dispatch(updateUserData(formData));
//       if (newName) {
//         dispatch(updateUserSuccess({ name: newName, avatarURL: avatar }));
//       }
//       if (file) {
//         dispatch(
//           updateUserSuccess({
//             name: newName,
//             avatarURL: URL.createObjectURL(file),
//           })
//         );
//       }
//       if (newName && file) {
//         dispatch(
//           updateUserSuccess({
//             name: newName,
//             avatarURL: URL.createObjectURL(file),
//           })
//         );
//       }
//       handleChange(formData);
//       onClose();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <EditContainer>
//       <CircleImage style={{ backgroundImage: `url(${avatar})` }}>
//         <AddPhotoButton>
//           <AiOutlinePlus
//             style={{
//               width: '18px',
//               height: '18px',
//             }}
//           />
//           <input type="file" accept="image/*" onChange={uploadContent} hidden />
//         </AddPhotoButton>
//       </CircleImage>

//       <InputContainer>
//         <Input
//           type="text"
//           placeholder="name"
//           value={newName}
//           onChange={event => {
//             setNewName(event.target.value);
//           }}
//         />

//         <InputIcon>
//           <UserIcon />
//         </InputIcon>
//         <IconPen />
//       </InputContainer>
//       <Button type="submit" onClick={handleSubmit}>
//         Save changes
//       </Button>
//       <ButtonClose onClick={onClose} />
//       {isLoading && !error && <Loader />}
//     </EditContainer>
//   );
// };

// const UserInfoModal = ({ closeUserInfoModal }) => {
//   const handleSubmit = (values, actions) => {
//     console.log(values);
//     closeUserInfoModal();
//   };
//   return (
//     <>

//       <Formik
//         initialValues={{ name: '', avatarUrl: '' }}
//         onSubmit={handleSubmit}
//       >
//         {({ setFieldValue }) => (
//           <Form autoComplete="off" className={css.UserInfoModal}>
//             <Field name="name" type="text" placeholder="Name" />
//             <img src={defualtImage} alt="ss" />
//             <Field
//               name="avatarUrl"
//               type="file"
//               className={css.UserAvatar}
//               // onChange={e =>
//               //   setFieldValue('avatarUrl', e.currentTarget.files[0])
//               // }
//             />
//             <button type="submit"> Save Changes</button>
//           </Form>
//         )}
//       </Formik>
//     </>
//   );
// };

// export default UserInfoModal;
