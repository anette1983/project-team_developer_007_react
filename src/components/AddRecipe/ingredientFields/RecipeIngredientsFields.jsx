import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectIngredients } from "../../../redux/ingredients/selectors";
import { fetchIngredients } from "../../../redux/ingredients/operations";

import css from './RecipeIngredientsFields.module.css';


import {
  MdRemove,
  MdAdd,
  MdKeyboardArrowDown,
  MdOutlineClose,
} from 'react-icons/md';



export const RecipeIngredientsFields = ({
  ingredients,
  incrIngredientFields,
  decrIngredientFields,
  deleteIngredient,
  updateIngredient,
  updateErrors,
  errors,
}) => {

  const dispatch = useDispatch();
  const ingredientsList = useSelector(selectIngredients);

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  const [filteredIngredients, setFilteredIngredients] =
    useState(ingredientsList);
  
  const ingredientsQuantityMeasure = [
    'tbs',
    'tsp',
    'kg',
    'g',
    'ml',
    'pcs',
    'to taste',
  ];
  const [field, setFields] = useState(1);
  const [quantityIsActive, setQuantityIsActive] = useState(
    new Array(ingredients.length).fill(''));
  const [ingredientIsActive, setIngredientIsActive] = useState(
    new Array(ingredients.length).fill('')
  );

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

  const deleteField = (_id, index) => {
    console.log(_id, index);
    deleteIngredient(_id);
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

  const setQuantityMeasure = (index, value, id) => {
    setQuantityIsActive(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });

    updateIngredient(index, value, id, 'ingredientsQuantityMeasure');
  };

  const changeQuantity = (index, value, id) => {
    updateIngredient(index, value, id, 'ingredientsQuantity');
    updateErrors([`ingredients[${index}].ingredientQuantity`]);
  };

  const onInputChange = (index, value, id) => {
    setIngredientIsActive(prevState => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });

    setFilteredIngredients(
      ingredientsList.filter(item => item.name.toLowerCase().includes(value.toLowerCase())).map((item) => item.name)
    );

    updateIngredient(index, value, id, 'name');

    updateErrors([`ingredients[${index}]`]);
  };

  const setIngredient = (index, value, id) => {
    const choosenIngr = ingredientsList.find(item => item.name === value);
    updateIngredient(index, value, choosenIngr._id, 'name');

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
        {ingredients.map((ingredient, index) => {
          return (
            <li className={css.ingredientItem} key={ingredient.id}>
              <div className={css.ingredientNameField}>
                <div>
                  <div className={css.ingredientInputBox}>
                    <input
                      name='ingredients'
                      placeholder="Type in ingredient"
                      className={css.ingredientNameInput}
                      autoFocus={true}
                      value={ingredient.name}
                      onChange={e => onInputChange(index, e.target.value, ingredientsList[index]._id)}
                    />
                    <MdKeyboardArrowDown className={css.arrowIngr} size="18" />
                  </div>
                  {errors[`ingredients[${index}]`] && (
                    <p className={css.errorMsg}>
                      {errors[`ingredients[${index}]`]}
                    </p>
                  )}
                  {ingredientIsActive[index] && (
                    <ul className={css.selectIngredients}>
                      {filteredIngredients.map((item) => (
                        <li
                          className={css.selectIngredientItem}
                          key={item}
                          onClick={() =>
                            setIngredient(index, item, ingredient._id)
                          }
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                </div>
                <div className={css.ingredientQuantityField}>
                  <input
                    className={css.ingredientQuantityInput}
                    type="number"
                    value={ingredient.ingredientsQuantity}
                    onChange={e => changeQuantity(index, e.target.value, ingredient.id)}
                  />
                  <div
                    className={css.selectBox}
                    onClick={() => toggleQuantity(index)}
                  >
                    <span className={css.selectLabel}>
                      {ingredient.ingredientsQuantityMeasure}
                    </span>
                    <MdKeyboardArrowDown className={css.arrow} size="18" />
                  </div>
                  {quantityIsActive[index] && (
                    <ul className={css.selectQuantityList}>
                      {ingredientsQuantityMeasure.map(item => (
                        <li
                          className={css.selectQuantityItem}
                          key={item}
                          onClick={() => setQuantityMeasure(index, item, ingredient.id)}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {errors[
                    `ingredients[${index}].ingredientsQuantity`
                  ] && (
                    <p className={css.errorMsg}>
                      {' '}
                      {
                        errors[
                          `ingredients[${index}].ingredientsQuantity`
                        ]
                      }{' '}
                    </p>
                  )}
                </div>
              </div>
              <button
                className={css.deleteBtn}
                type="button"
                onClick={() => deleteField(ingredient.id, index)}
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
