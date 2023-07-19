import { SignUpForm } from 'components/SignUpForm/SignUpForm';
import { useSelector } from 'react-redux';
import { selectAuthError } from 'redux/auth/selectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const RegisterPage = () => {
  const error = useSelector(selectAuthError);

  if (error) {
    Notify.failure('Sorry, something went wrong');
  } else {
    Notify.success('Verification letter was send to your email');
  }

  return (
    <>
      <SignUpForm />
    </>
  );
};

export default RegisterPage;
