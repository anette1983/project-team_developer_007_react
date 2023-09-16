import { SignUpForm } from 'components/SignUpForm/SignUpForm';
import { useSelector } from 'react-redux';
import {
  selectAuthError,
  selectIsLoading,
  selectMessage,
} from 'redux/auth/selectors';
import { useDispatch } from 'react-redux';
import { clearErrorMessage, clearMessage } from 'redux/auth/slice';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from 'components/Loader';


const RegisterPage = () => {
  const error = useSelector(selectAuthError);
  const message = useSelector(selectMessage);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (error && error !== 'Unable to fetch user') {
      Notify.failure(error);
      dispatch(clearErrorMessage());
    }

    if (message === 'Verification letter was send to your email') {
      Notify.success('Verification letter was send to your email');
      dispatch(clearMessage());
      navigate('/signin');
    }
    return () => {
      dispatch(clearErrorMessage());
      dispatch(clearMessage());
    };
  }, [dispatch, error, message, navigate]);

  return (
    <>
      {isLoading && <Loader />}
      <SignUpForm />
    </>
  );
};

export default RegisterPage;
