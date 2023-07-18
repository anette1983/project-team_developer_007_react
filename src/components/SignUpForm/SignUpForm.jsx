import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import sprite from '../../images/svg/sprite.svg';
import css from './SignUpForm.module.css';

const initialValues = { name: '', email: '', password: '' };

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const schema = yup.object().shape({
  email: yup.string().matches(emailRegexp, 'Email is not valid').required(),
  password: yup.string().min(6).required(),
});

export const SignUpForm = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = (values, { resetForm }) => {
    dispatch(register(values));
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
          {({ errors, touched, values }) => (
            <Form className={css.Registration__form}>
              <b className={css.Registration__title}>Registration</b>

              <label className={css.Registration__label}>
                <div className={css.Registration__inputwrapper}>
                  <Field
                    className={`${css.Registration__input} ${
                      touched.name && errors.name
                        ? `${css.Registration__input_error}`
                        : touched.name &&
                          !errors.name &&
                          values.name.length >= 1
                        ? `${css.Registration__input_success}`
                        : ''
                    }`}
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                  />

                  <svg
                    width={18}
                    height={18}
                    className={`${css.Registration__svg} ${
                      touched.name && errors.name
                        ? `${css.Registration__svg_error}`
                        : touched.name &&
                          !errors.name &&
                          values.name.length >= 1
                        ? `${css.Registration__svg_success}`
                        : ''
                    }`}
                  >
                    <use href={sprite + '#reg-name'} />
                  </svg>
                </div>
              </label>

              <label className={css.Registration__label}>
                <div className={css.Registration__inputwrapper}>
                  <Field
                    className={`${css.Registration__input} ${
                      touched.email && errors.email
                        ? `${css.Registration__input_error}`
                        : touched.email &&
                          !errors.email &&
                          emailRegexp.test(values.email)
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
                        : touched.email &&
                          !errors.email &&
                          emailRegexp.test(values.email)
                        ? `${css.Registration__svg_success}`
                        : ''
                    }`}
                  >
                    <use href={sprite + '#reg-email'} />
                  </svg>
                </div>
              </label>

              <label className={css.Registration__label}>
                <div className={css.Registration__inputwrapper}>
                  <Field
                    className={`${css.Registration__input} ${
                      touched.password && errors.password
                        ? `${css.Registration__input_error}`
                        : touched.password &&
                          !errors.password &&
                          values.password.length >= 6
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
                        : touched.password &&
                          !errors.password &&
                          values.password.length >= 6
                        ? `${css.Registration__svg_success}`
                        : ''
                    }`}
                  >
                    <use href={sprite + '#reg-pass'} />
                  </svg>
                </div>
              </label>

              <button className={css.Registration__button} type="submit">
                Sign up
              </button>
            </Form>
          )}
        </Formik>
        <Link className={css.Registration__link} to="/signin">
          Sign In
        </Link>
      </div>
    </section>
  );
};
