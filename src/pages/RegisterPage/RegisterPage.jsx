import { SignUpForm } from 'components/SignUpForm/SignUpForm';
import { useSelector } from 'react-redux';
import { selectAuthError } from 'redux/auth/selectors';
import Notiflix from 'notiflix';

const RegisterPage = () => {
  const error = useSelector(selectAuthError);

  if (error) {
    Notiflix.Notify.failure('Sorry, something went wrong');
  }

  return (
    <>
      <SignUpForm />
    </>
  );
};

export default RegisterPage;
