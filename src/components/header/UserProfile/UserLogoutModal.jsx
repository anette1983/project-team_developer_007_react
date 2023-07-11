import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import css from './UserProfile.module.css';
import { ReactComponent as Cross } from '../X.svg';

const UserLogoutModal = ({ closeUserLogoutModal }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    console.log('click on LOgout');
    dispatch(logOut());
    closeUserLogoutModal();
  };
  return (
    <>
      <div className={css.UserLogoutModal}>
        <div className={css.UserLogoutModalText}>
          <p>Are you sure you want to log out ?</p>
        </div>
        <div className={css.UserLogoutModalButtons}>
          <button
            type="button"
            onClick={handleLogout}
            className={css.UserLogoutModalButton}
          >
            Log out
          </button>
          <button
            type="button"
            onClick={closeUserLogoutModal}
            className={css.UserLogoutModalButton}
          >
            Cancel
          </button>
        </div>
      </div>
      <Cross className={css.cross} onClick={closeUserLogoutModal} />
    </>
  );
};
export default UserLogoutModal;
