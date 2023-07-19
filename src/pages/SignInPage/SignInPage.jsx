import { LogInForm } from 'components/LogInForm/LogInForm';
import { useSelector } from 'react-redux';
import { selectAuthError, selectMessage } from 'redux/auth/selectors';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const SignInPage = () => {
  const error = useSelector(selectAuthError);
  const message = useSelector(selectMessage);

  if (error !== 'Unable to fetch user' && error !== null) {
    Notify.failure(error);
  }

  if (message) {
    Notify.success(message);
  }

  return (
    <>
      <LogInForm />
    </>
  );
};

export default SignInPage;
