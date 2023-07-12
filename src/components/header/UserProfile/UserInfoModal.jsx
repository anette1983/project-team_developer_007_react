import React from 'react';
import css from './UserProfile.module.css';
import { Formik, Form, Field } from 'formik';
import defaultUserAvatar from '../../../pictures/userDefault.png';
const defualtImage = defaultUserAvatar;

const UserInfoModal = ({ closeUserInfoModal }) => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    closeUserInfoModal();
  };
  return (
    <>
   
      <Formik
        initialValues={{ name: '', avatarUrl: '' }}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form autoComplete="off" className={css.UserInfoModal}>
            <Field name="name" type="text" placeholder="Name" />
            <img src={defualtImage} alt="ss" />
            <Field
              name="avatarUrl"
              type="file"
              className={css.UserAvatar}
              // onChange={e =>
              //   setFieldValue('avatarUrl', e.currentTarget.files[0])
              // }
            />
            <button type="submit"> Save Changes</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default UserInfoModal;
