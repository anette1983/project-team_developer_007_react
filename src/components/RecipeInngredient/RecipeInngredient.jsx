import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  addToShopingList,
  deleteFromShopingList,
} from 'redux/shopingList/operations';

import css from './RecipeInngredient.module.css';

export default function RecipeInngredient({ ingredient, shopingList }) {
  const {
    container,
    wrapper_img,
    wrapper_ingridient_title,
    ingridient_title,
    wrapper_ingridient_quantity,
    ingridient_quantity,
    input_checkbox,
  } = css;

  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (shopingList.find(el => el.ingredient._id === ingredient._id._id)) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnChange = () => {
    if (!isChecked) {
      dispatch(
        addToShopingList({
          ingredientId: ingredient._id._id,
          measure: ingredient.measure,
        })
      );
      setIsChecked(true);
    } else {
      dispatch(deleteFromShopingList(ingredient._id._id));
      setIsChecked(false);
    }
  };

  return (
    <div className={container}>
      <div className={wrapper_img}>
        <img src={ingredient._id.img} alt={ingredient._id.name} />
      </div>
      <div className={wrapper_ingridient_title}>
        <p className={ingridient_title}>{ingredient._id.name}</p>
      </div>
      <div className={wrapper_ingridient_quantity}>
        <p className={ingridient_quantity}>{ingredient.measure}</p>
      </div>
      <input
        className={input_checkbox}
        type="checkbox"
        checked={isChecked}
        onChange={handleOnChange}
      />
    </div>
  );
}
