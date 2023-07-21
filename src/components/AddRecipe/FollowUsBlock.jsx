// import { FollowUs } from '../Footer/FollowUs/FollowUs';
import sprite from '../../images/svg/sprite.svg';

import css from './AddRecipeComponents.module.css';

export const FollowUsBlock = () => {
  return (
    <div className={css.socialsWrapper}>
      <h3 className={css.subtitle}> Follow us </h3>
      <div className={css.followUsBlock}>
      <ul className={css.list}>
        <li className={css.item}>
          <a href=" ">
            <svg width="26" height="26" className={css.soc_icon}>
              <use href={sprite + '#face'} />
            </svg>
          </a>
        </li>
        <li className={css.item}>
          <a href=" ">
            <svg width="28" height="22" className={css.soc_icon}>
              <use href={sprite + '#youtube'} />
            </svg>
          </a>
        </li>
        <li className={css.item}>
          <a href=" ">
            <svg width="25" height="22" className={css.soc_icon}>
              <use href={sprite + '#twitter'} />
            </svg>
          </a>
        </li>
        <li className={css.item}>
          <a href=" ">
            <svg width="24" height="24" className={css.soc_icon}>
              <use href={sprite + '#insta'} />
            </svg>
          </a>
        </li>
      </ul>
      </div>
    </div>
  )
};
