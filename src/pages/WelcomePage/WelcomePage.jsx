import AuthNav from 'components/AuthNav.jsx/AuthNav';
import css from './WelcomePage.module.css';

const WelcomePage = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <h1 className={css.title}>Welcome to the app!</h1>
        <p className={css.subtitle}>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </p>

        <AuthNav />
      </div>
    </div>
  );
};

export default WelcomePage;
