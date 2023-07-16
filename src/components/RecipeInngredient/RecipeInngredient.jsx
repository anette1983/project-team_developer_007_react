import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  addToShopingList,
  deleteFromShopingList,
} from 'redux/shopingList/operations';

import css from './RecipeInngredient.module.css';

export default function RecipeInngredient({ ingredient }) {
  const {
    container,
    wrapper_img,
    wrapper_ingridient_title,
    ingridient_title,
    wrapper_ingridient_quantity,
    text_ingridient_quantity,
    input_checkbox,
  } = css;

  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();
  console.log(ingredient);

  const handleOnClick = () => {
    if (!isChecked) {
      dispatch(
        addToShopingList({
          ingredientId: ingredient._id,
          measure: ingredient.measure,
        })
      );
      setIsChecked(true);
    } else {
      dispatch(deleteFromShopingList(ingredient._id));
      setIsChecked(false);
    }
  };

  return (
    <div className={container}>
      <div className={wrapper_img}>{/* <img></img> */}</div>
      <div className={wrapper_ingridient_title}>
        <p className={ingridient_title}>
          Name will be here {/* {ingredient.name } */}
        </p>
      </div>
      <div className={wrapper_ingridient_quantity}>
        <p className={text_ingridient_quantity}>{ingredient.measure}</p>
      </div>
      <input
        className={input_checkbox}
        type="checkbox"
        checked={isChecked}
        onChange={handleOnClick}
      />
    </div>
  );
}
