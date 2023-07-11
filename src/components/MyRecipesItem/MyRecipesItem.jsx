import { Link } from 'react-router-dom';
import img from './1.jpg';
import css from './MyRecipesItem.module.css';

const MyRecipesItem = ({ recipe }) => {
  return (
    <li className={css.card_container}>
      <div className={css.img_wrapper}>
        <img src={`${img}`} alt={`${recipe}`} className={css.img} />
      </div>
      <button className={css.delete_btn} type="button">
        del
      </button>
      <div className={css.wrapper}>
        <div className={css.top_wrapper}>
          <h2 className={css.card_title}>Apple Frangipan Tart</h2>
          <p className={css.card_text}>
            Apple Frangipane Tart is a classic and elegant treat fit for any
            dessert table. A crisp, sweet-crust is filled with rich almond
            frangipane filling, baked with sliced
          </p>
        </div>
        <div className={css.bottom_wrapper}>
          <span className={css.card_time}>20 min</span>

          <Link
            to={`/recipe/${recipe}`}
            state={{ from: `/my` }}
            className={css.card_btn}
          >
            See recipe {recipe}
          </Link>
        </div>
      </div>
    </li>
  );
};

export default MyRecipesItem;
