import { FollowUs } from '../FollowUs/FollowUs';
import { Nav } from '../Nav/Nav';
import { SubscribeForm } from '../SubscribeForm/SubscribeForm';
import css from './Navigation.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../logo/logo.svg';

export const Navigation = () => {
  return (
    <>
      <div className={css.container}>
        <div className={css.inner_container}>
          <div>
            <div className={css.logo}>
              <Link to="/main">
                <Logo />
              </Link>
              <h3 className={css.title}>So Yummy</h3>
            </div>
            <div className={css.wrapper}>
              <ul className={css.list}>
                <li className={css.item}>
                  Database of recipes that can be replenished{' '}
                </li>
                <li className={css.item}>
                  Flexible search for desired and unwanted ingredients
                </li>
                <li className={css.item}>
                  Ability to add your own recipes with photos
                </li>
                <li className={css.item}>Convenient and easy to use</li>
              </ul>
            </div>
          </div>
          <Nav />
        </div>
        <SubscribeForm />
      </div>
      <FollowUs />
    </>
  );
};
