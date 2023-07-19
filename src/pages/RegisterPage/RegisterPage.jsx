import { SignUpForm } from 'components/SignUpForm/SignUpForm';
import { useSelector } from 'react-redux';
import { selectAuthError } from 'redux/auth/selectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const RegisterPage = () => {
  const error = useSelector(selectAuthError);

  if (error !== 'Unable to fetch user') {
    Notify.failure(error);
  }

  return (
    <>
      <SignUpForm />
    </>
  );
};

export default RegisterPage;
