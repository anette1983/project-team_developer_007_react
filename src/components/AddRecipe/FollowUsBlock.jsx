import { FollowUs } from '../Footer/FollowUs/FollowUs';

import css from './AddRecipeComponents.module.css';

export const FollowUsBlock = () => {
  return (
    <div className={css.socialsWrapper}>
      <h3 className={css.subtitle}> Follow us </h3>
      <div className={css.followUsBlock}>
      <FollowUs />
      </div>
    </div>
  )
};
