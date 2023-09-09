import { LogInForm } from 'components/LogInForm/LogInForm';
import { useSelector } from 'react-redux';
import { selectAuthError, selectIsLoading } from 'redux/auth/selectors';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { clearErrorMessage } from 'redux/auth/slice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import LoadingNotice from 'components/LoadingNotice/LoadingNotice';

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

  return (
    <>
      {isLoading && <LoadingNotice />}
      <LogInForm />
    </>
  );
};

export default SignInPage;
