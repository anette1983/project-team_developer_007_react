import { LogInForm } from 'components/LogInForm/LogInForm';
import { useSelector } from 'react-redux';
import { selectAuthError } from 'redux/auth/selectors';
import Notiflix from 'notiflix';

const SignInPage = () => {
  const error = useSelector(selectAuthError);

  if (!error) {
    Notiflix.Notify.failure('Sorry, something went wrong');
  }

  return (
    <>
      <LogInForm />
    </>
  );
};

export default SignInPage;
