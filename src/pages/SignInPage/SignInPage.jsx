import { LogInForm } from 'components/LogInForm/LogInForm';
import { useSelector } from 'react-redux';
import { selectAuthError } from 'redux/auth/selectors';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { clearErrorMessage } from 'redux/auth/slice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const SignInPage = () => {
  const error = useSelector(selectAuthError);

  const dispatch = useDispatch();

  useEffect(() => {
    if (error && error !== 'Unable to fetch user') {
      Notify.failure(error);
      dispatch(clearErrorMessage());
    }

    return () => {
      dispatch(clearErrorMessage());
    };
  }, [dispatch, error]);

  return (
    <>
      <LogInForm />
    </>
  );
};

export default SignInPage;
