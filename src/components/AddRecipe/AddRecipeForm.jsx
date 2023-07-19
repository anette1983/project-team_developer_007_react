import React from 'react';
import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';

import { addMyRecipe } from '../../redux/myRecipes/operations';

import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { recipeFormSchema } from './recipeFormSchema';

import { RecipeDescriptionFields } from './descriptionFields/RecipeDescriptionFields';
import { RecipeIngredientsFields } from './ingredientFields/RecipeIngredientsFields';
import { RecipePreparationFields } from './preparationFields/RecipePreparationFields';

import css from './AddRecipeComponents.module.css';

export const AddRecipeForm = () => {
  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Breakfast');
  const [cookingTime, setCookingTime] = useState('30');
  const [ingredients, setIngredients] = useState([
    {
      id: nanoid(),
      ingredientsQuantity: 0,
      ingredientsQuantityMeasure: 'tbs',
      name: '',
    },
  ]);
  const [preparation, setPreparation] = useState('');
  const [errors, setErrors] = useState({});

  const onInputImgUpload = e => {
    setImg(e.target.files[0]);
    updateErrors('img');
  };

  const onTitleChange = value => {
    setTitle(value);
    updateErrors('title');
  };

  const onDescriptionChange = value => {
    setDescription(value);
    updateErrors('description');
  };

  const onCategoryChange = value => {
    setCategory(value);
  };

  const onTimeChange = value => {
    setCookingTime(`${value}`);
  };

  const incrIngredientFields = () => {
    setIngredients(prevState => [
      ...prevState,
      {
        id: nanoid(),
        ingredientsQuantity: 0,
        ingredientsQuantityMeasure: 'tbs',
        name: '',
      },
    ]);
  };

  const decrIngredientFields = () => {
    const lastField = ingredients[ingredients.length - 1];
    setIngredients(prevState =>
      prevState.filter(item => {
        return item.id !== lastField.id;
      })
    );
  };

  const deleteIngredient = itemId => {
    setIngredients(ingredients.filter(item => item.id !== itemId));
  };

  const updateIngredient = (index, value, _id, prop) => {

    setIngredients(prevState => {
      const newState = [...prevState];
      newState[index][prop] = value;
      newState[index].id = _id;
      return newState;
    });
  };

  const onPreparationTextChange = data => {
    setPreparation(data);
    updateErrors('preparation');
  };

  const navigate = useNavigate();

  const updatedIngredients = useMemo(
    () =>
      ingredients.map(ingredient => {
        const { id, ingredientsQuantity, ingredientsQuantityMeasure } =
          ingredient;
        const measure = `${ingredientsQuantity} ${ingredientsQuantityMeasure}`;
        return { measure: measure, _id: id };
      }),
    [ingredients]
  );

  const initVal = {
    img,
    title,
    description,
    cookingTime,
    category,
    ingredients,
    preparation,
  };


  const formData = new FormData();
  formData.append('preview', img);
  formData.append('title', title);
  formData.append('description', description);
  formData.append('category', category);
  formData.append('time', `${cookingTime}`);
  formData.append('ingredients', JSON.stringify(updatedIngredients));
  formData.append('instructions', preparation);


  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    recipeFormSchema
      .validate(initVal, { abortEarly: false })
      .then(() => {
        dispatch(addMyRecipe(formData))
          .unwrap()
          .then((res) => {
            navigate('/my', { replace: true });
            Notify.success('Hooray! The recipe was successfully added');
          })
          .catch(error => {
            Notify.error('Ooops, smth is going wrong... Try again!');
          });
      })
      .catch(err => {
        const errors = err.inner.reduce(
          (acc, err) => ({ ...acc, [err.path]: err.message }),
          {}
        );
        setErrors(errors);
      });
  };

  const updateErrors = value => {
    setErrors(prevState => ({ ...prevState, [value]: '' }));
  };


  return (
    <div className={css.addSectionWrap}>
      <form className={css.addRecipeForm} onSubmit={handleSubmit}>
        <RecipeDescriptionFields
            title={title}
            description={description}
            time={cookingTime}
            category={category}
            onInputImgUpload={onInputImgUpload}
            onTitleChange={onTitleChange}
            onDescriptionChange={onDescriptionChange}
            onCategoryChange={onCategoryChange}
            onTimeChange={onTimeChange}
            errors={errors}
        />

        <RecipeIngredientsFields
            ingredients={ingredients}
            incrIngredientFields={incrIngredientFields}
            decrIngredientFields={decrIngredientFields}
            deleteIngredient={deleteIngredient}
            updateIngredient={updateIngredient}
            updateErrors={updateErrors}
            errors={errors}
        />
        <RecipePreparationFields
            onPreparationTextChange={onPreparationTextChange}
            preparation={preparation}
            errors={errors}
        />
        <button className={css.addButton} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};
