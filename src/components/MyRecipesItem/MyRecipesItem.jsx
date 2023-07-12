import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import css from './MyRecipesItem.module.css';
import { deleteMyRecipe } from 'redux/myRecipes/operations';

const MyRecipesItem = ({ recipe }) => {
  const [delId, setDelId] = useState();
  const dispatch = useDispatch();

  const handleDelete = id => {
    setDelId(id);
    dispatch(deleteMyRecipe(id));
    return alert(`Recipe deleted successfully`);
  };

  return (
    <li className={css.card_container}>
      <div className={css.img_wrapper}>
        <img
          src={`${recipe.preview}`}
          alt={`${recipe.title}`}
          className={css.img}
        />
      </div>
      <button
        className={css.delete_btn}
        type="button"
        onClick={() => handleDelete(recipe._id)}
        disabled={delId === recipe._id}
      >
        del
      </button>
      <div className={css.wrapper}>
        <div className={css.top_wrapper}>
          <h2 className={css.card_title}>{recipe.title}</h2>
          <p className={css.card_text}>{recipe.description}</p>
        </div>
        <div className={css.bottom_wrapper}>
          <span className={css.card_time}>{recipe.time} min</span>

          <Link
            to={`/recipe/${recipe._id}`}
            state={{ from: `/my` }}
            className={css.card_btn}
          >
            See recipe {recipe.id}
          </Link>
        </div>
      </div>
    </li>
  );
};

export default MyRecipesItem;
