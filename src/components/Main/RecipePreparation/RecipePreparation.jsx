import { useSelector } from 'react-redux';
import { selectCurrentRecipe } from 'redux/recipes/selectors';

import css from './RecipePreparation.module.css';

export const RecipePreparation = () => {
  const {
    wrap,
    wrap_container,
    title,
    list,
    item,
    numb,
    subtitle,
    preview_img,
  } = css;

  const recipe = useSelector(selectCurrentRecipe);
  const instructionArr =
    Object.keys(recipe).length !== 0 ? recipe.instructions.split('.') : [];
  return (
    <section className={wrap}>
      {instructionArr.length !== 0 ? (
        <div className={wrap_container}>
          <div>
            <h2 className={title}>Recipe Preparation</h2>

            <ol className={list}>
              {instructionArr.map((el, i) => {
                return (
                  <li key={i} className={item}>
                    <span className={numb}>{i + 1}</span>
                    <p className={subtitle}>{el}</p>
                  </li>
                );
              })}
            </ol>
          </div>

          <img
            src={recipe.preview}
            alt={recipe.title}
            className={preview_img}
          />
        </div>
      ) : (
        <p>No instructions</p>
      )}
    </section>
  );
};
