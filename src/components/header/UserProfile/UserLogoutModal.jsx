import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import css from './UserProfile.module.css';
import { ReactComponent as Cross } from '../../../images/header/svg/X.svg';

const UserLogoutModal = ({ closeUserLogoutModal }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
    closeUserLogoutModal();
  };
  return (
    <>
      <div className={css.UserLogoutModal} id="modal">
        <div className={css.UserLogoutModalText} id="modal">
          <p>Are you sure you want to log out ?</p>
          <Cross className={css.cross} onClick={closeUserLogoutModal} />
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
    </>
  );
};
export default UserLogoutModal;
