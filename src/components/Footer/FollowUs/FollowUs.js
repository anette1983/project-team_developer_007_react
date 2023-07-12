import css from './FollowUs.module.css';
// import insta from '../../../images/svg/sprite.svg'
export const FollowUs = () => {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li>
          <a href=" " className={css.icon}>
          <svg width="20" height="20"  >
            <use
            // href={insta}
             href="../../../images/svg/sprite.svg#clock"
             />
          </svg>
          </a>facebook
        </li>
        <li>
          <a href="/">/</a>youtube
        </li>
        <li>
          <a href="/">/</a>twitter
        </li>
        <li>
          <a href="/">/</a>instagram
        </li>
      </ul>
    </div>
  );
};
