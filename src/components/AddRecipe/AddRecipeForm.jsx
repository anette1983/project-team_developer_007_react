import React from 'react';
import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { addMyRecipe } from '../../redux/myRecipes/operations';
import { selectMyRecipesError } from '../../redux/myRecipes/selectors';
import { selectIngredients } from "../../redux/ingredients/selectors";

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

    const ingredientsList = useSelector(selectIngredients);

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
    console.log(ingredientsList);
    // const choosenIngr = ingredientsList.find(item => item.name === value);
    // console.log('FIND', choosenIngr);
    console.log('ADD', { index, value, _id, prop })

    setIngredients(prevState => {
      console.log('STATE', prevState)
      const newState = [...prevState];
      newState[index][prop] = value;
      newState[index].id = _id;
      console.log('NEWSTATE', newState);
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
        console.log('OBJECTRES', { measure: measure, _id: id });
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
  formData.append('time', `${cookingTime} min`);
  formData.append('ingredients', JSON.stringify(updatedIngredients));
  formData.append('instructions', preparation);


  const dispatch = useDispatch();
  const error = useSelector(selectMyRecipesError);

  const handleSubmit = e => {
    e.preventDefault();
    recipeFormSchema
      .validate(initVal, { abortEarly: false })
      .then(() => {
        dispatch(addMyRecipe(formData))
          .unwrap()
          .then((res) => {
            console.log('RES', res)
            navigate('/my', { replace: true });
            Notify.success('Hooray! The recipe was successfully added');
          })
          .catch(error => {
            console.log(error)
            Notify.error('Ooops, smth is going wrong... Try again!');
          });
      })
      .catch(err => {
        console.log('ERRR', err)
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

  console.log(error);

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
