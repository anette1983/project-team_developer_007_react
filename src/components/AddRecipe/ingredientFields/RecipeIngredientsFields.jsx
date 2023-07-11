import { useState } from 'react';
import css from './RecipeIngredientsFields.module.css';
// ingredientsQuantity
import {
  MdRemove,
  MdAdd,
  MdOutlineKeyboard,
  MdOutlineClose,
} from 'react-icons/md';

import { ingredients as ingredientList } from '../../../redux/constants/index';

export const RecipeIngredients = ({
  ingredients,
  incrIngredientFields,
  decrIngredientFields,
  deleteIngredient,
  updateIngredient,
  updateErrors,
  errors,
}) => {
  const ingredientsQuantityMeasure = [
    'tbs',
    'tsp',
    'kg',
    'g',
    'ml',
    'to taste',
  ];
  const [field, setFields] = useState(1);
  const [quantityIsActive, setQuantityIsActive] = useState(false);
  const [ingredientIsActive, setIngredientIsActive] = useState(false);

  const [filteredIngredients, setFilteredIngredients] =
    useState(ingredientList);

  const incrementFields = () => {
    incrIngredientFields();
    setFields(prevState => prevState + 1);
  };

  const decrementFields = () => {
    if (field === 0) {
      return;
    }
    decrIngredientFields();
    setFields(prevState => prevState - 1);
  };

  const deleteField = (itemId, index) => {
    deleteIngredient(itemId);
    setFields(prevState => prevState - 1);

    setIngredientIsActive(prevState => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

  const toggleQuantity = index => {
    setQuantityIsActive(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const setQuantity = (index, value) => {
    setQuantityIsActive(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
    updateIngredient(index, 'ingredientQuantityMeasure', value);
  };

  const changeQuantity = (index, value) => {
    updateIngredient(index, 'ingredientQuantity', value);
    updateErrors([`ingredients[${index}].ingredientQuantity`]);
  };

  const onInputChange = (index, value, id) => {
    setIngredientIsActive(prevState => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });

    setFilteredIngredients(
      ingredientList.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase())
      )
    );

    updateIngredient(index, value, id);

    updateErrors([`ingredients[${index}].name`]);
  };

  const setIngredient = (index, value, id) => {
    updateIngredient(index, value, id);

    setIngredientIsActive(prevState => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

  return (
    <div className={css.ingredientsFieldWrapper}>
      <div className={css.subtitleWrapper}>
        <h3 className={css.subtitle}>Ingredients</h3>
        <div className={css.ingredientsCounter}>
          <button
            className={css.counterBtn}
            type="button"
            onClick={decrementFields}
          >
            <MdRemove className={css.counterBtnIcon} size="14" />
          </button>
          <p className={css.counterValue}>{field}</p>
          <button
            className={css.counterBtn}
            type="button"
            onClick={incrementFields}
          >
            <MdAdd className={css.counterBtnIcon} size="14" />
          </button>
        </div>
      </div>
      <ul className={css.ingredientsList}>
        {ingredients.map((item, index) => {
          return (
            <li className={css.ingredientItem} key={item.id}>
              <div className={css.ingredientNameField}>
                <div>
                  <input
                    className={css.ingredientNameInput}
                    autoFocus={true}
                    value={ingredients[index].name}
                    onChange={e => onInputChange(index, e.target.value)}
                  />
                  <MdOutlineKeyboard className={css.arrow} size="18" />
                  {errors[`ingredients[${index}].name`] && (
                    <p className={css.errorMsg}>
                      {errors[`ingredients[${index}].name`]}
                    </p>
                  )}
                  {ingredientIsActive[index] && (
                    <ul className={css.selectIngredients}>
                      {filteredIngredients.map(item => (
                        <li
                          className={css.selectIngredientItem}
                          key={item.name}
                          onClick={() =>
                            setIngredient(index, item.name, item._id)
                          }
                        >
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className={css.ingredientQuantityField}>
                  <input
                    className={css.ingredientQuantityInput}
                    type="number"
                    value={item.ingredientQuantity}
                    onChange={e => changeQuantity(index, e.target.value)}
                  />
                  <div
                    className={css.selectBox}
                    onClick={() => toggleQuantity(index)}
                  >
                    <span className={css.selectLabel}>
                      {ingredients[index].ingredientQuantity}
                    </span>
                    <MdOutlineKeyboard className={css.arrow} size="18" />
                  </div>
                  {quantityIsActive[index] && (
                    <ul className={css.selectQuantityList}>
                      {ingredientsQuantityMeasure.map(item => (
                        <li
                          className={css.selectQuantityItem}
                          key={item}
                          onClick={() => setQuantity(index, item)}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {errors[
                    `ingredients[${index}].ingredientQuantityMeasure`
                  ] && (
                    <p className={css.errorMsg}>
                      {' '}
                      {
                        errors[
                          `ingredients[${index}].ingredientQuantityMeasure`
                        ]
                      }{' '}
                    </p>
                  )}
                </div>
              </div>
              <button
                className={css.deleteBtn}
                type="button"
                onClick={() => deleteField(item.id, index)}
              >
                <MdOutlineClose className={css.deleteBtnIcon} size="18px" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
