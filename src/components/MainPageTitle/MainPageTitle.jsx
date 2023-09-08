import css from './mainPage.module.css';
export const MainPageTitle = ({ text }) => {
  return (
    <>
      <h1 className={css.title}>{text}</h1>
      <svg
        className={css.firstGreen}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="5.91666"
          width="14"
          height="14"
          rx="3"
          transform="rotate(-25 0 5.91666)"
          fill="#8BAA36"
        />
      </svg>
      <svg
        className={css.black}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="5.07141"
          width="12"
          height="12"
          rx="3"
          transform="rotate(-25 0 5.07141)"
          fill="#22252A"
        />
      </svg>
      <svg
        className={css.lastGreen}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="5.91666"
          width="14"
          height="14"
          rx="3"
          transform="rotate(-25 0 5.91666)"
          fill="#8BAA36"
        />
      </svg>
    </>
  );
};






