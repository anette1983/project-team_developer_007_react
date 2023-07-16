import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import sprite from '../../images/svg/sprite.svg';
import css from '../SignUpForm/SignUpForm.module.css';
import css_logIn from './LogInForm.module.css';

const initialValues = { email: '', password: '' };

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const schema = yup.object().shape({
  email: yup.string().matches(emailRegexp, 'Email is not valid').required(),
  password: yup.string().min(6).required(),
});

export const LogInForm = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));

    resetForm();
  };

  return (
    <section className={css.Registration__Section}>
      <div className={css.Registration__container}>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={handleFormSubmit}
        >
          {({ errors, touched }) => (
            <Form className={css.Registration__form}>
              <b className={css_logIn.LogIn__title}>Sign In</b>

              <label className={css_logIn.LogIn__label}>
                <div className={css.Registration__inputwrapper}>
                  <Field
                    className={`${css.Registration__input} ${
                      touched.email && errors.email
                        ? `${css.Registration__input_error}`
                        : touched.email && !errors.email
                        ? `${css.Registration__input_success}`
                        : ''
                    }`}
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <ErrorMessage
                    name="email"
                    render={msg => (
                      <p className={css.Registration__error}>{msg}</p>
                    )}
                  />

                  <svg
                    width={18}
                    height={18}
                    className={`${css.Registration__svg} ${
                      touched.email && errors.email
                        ? `${css.Registration__svg_error}`
                        : touched.email && !errors.email
                        ? `${css.Registration__svg_success}`
                        : ''
                    }`}
                  >
                    <use href={sprite + '#reg-email'} />
                  </svg>
                </div>
              </label>

              <label className={css_logIn.LogIn__label}>
                <div className={css.Registration__inputwrapper}>
                  <Field
                    className={`${css.Registration__input} ${
                      touched.password && errors.password
                        ? `${css.Registration__input_error}`
                        : touched.password && !errors.password
                        ? `${css.Registration__input_success}`
                        : ''
                    }`}
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                  <ErrorMessage
                    name="password"
                    render={msg => (
                      <p className={css.Registration__error}>
                        Enter a valid Password
                      </p>
                    )}
                  />

                  <svg
                    width={18}
                    height={18}
                    className={`${css.Registration__svg} ${
                      touched.password && errors.password
                        ? `${css.Registration__svg_error}`
                        : touched.password && !errors.password
                        ? `${css.Registration__svg_success}`
                        : ''
                    }`}
                  >
                    <use href={sprite + '#reg-pass'} />
                  </svg>
                </div>
              </label>

              <button className={css.Registration__button} type="submit">
                Sign In
              </button>
            </Form>
          )}
        </Formik>
        <Link className={css.Registration__link} to="/register">
          Registration
        </Link>
      </div>
    </section>
  );
};
