import { LogInForm } from 'components/LogInForm/LogInForm';
import { useSelector } from 'react-redux';
import { selectAuthError, selectIsLoading } from 'redux/auth/selectors';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { clearErrorMessage } from 'redux/auth/slice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Loader from 'components/Loader';

const SignInPage = () => {
  const error = useSelector(selectAuthError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    if (error && error !== 'Unable to fetch user') {
      error !== 'Request failed with status code 401' && Notify.failure(error);
      dispatch(clearErrorMessage());
    }
    return () => {
      dispatch(clearErrorMessage());
    };
  }, [dispatch, error, isLoading]);

  if (error && error.includes('401')) {
    Notify.failure('Email or password is wrong');
  }

  return (
    <>
      {isLoading && <Loader />}
      <LogInForm />
    </>
  );
};

export default SignInPage;
