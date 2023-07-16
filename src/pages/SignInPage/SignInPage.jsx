import { LogInForm } from 'components/LogInForm/LogInForm';
import { useSelector } from 'react-redux';
import { selectAuthError, selectUserName } from 'redux/auth/selectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const SignInPage = () => {
  const error = useSelector(selectAuthError);

  if (error) {
    Notify.failure('Sorry, something went wrong');
  }

  return (
    <>
      <LogInForm />
    </>
  );
};

export default SignInPage;
