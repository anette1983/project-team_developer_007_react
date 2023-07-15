import css from './FollowUs.module.css';
import sprite from '../../../images/svg/sprite.svg';

export const FollowUs = () => {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li className={css.item}>
          <a href=" " >
          <svg width="20" height="20">
            <use href={sprite + "#face"}/>
          </svg>
          </a>
        </li>
        <li className={css.item}>
          <a href=" ">
           <svg width="20" height="20">
            <use href={sprite + "#youtube"}/>
          </svg>
          </a>
        </li>
        <li className={css.item}>
          <a href=" "> 
          <svg width="20" height="20">
            <use href={sprite + "#twitter"}/>
          </svg>
          </a>
        </li>
        <li className={css.item}>
          <a href=" ">
           <svg width="17" height="17">
            <use href={sprite + "#insta"}/>
          </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};
