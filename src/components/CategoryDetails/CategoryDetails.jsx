import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from '../CategoryDetails/Category.module.css';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import { selectCategories } from 'redux/categories/selectors';
import { fetchCategories } from 'redux/categories/operations';
import CategoryRecipeList from './CategoryRecipeList';
import { fetchByCategory } from 'redux/recipes/operations';
import { selectRecipes } from 'redux/recipes/selectors';

const CategoryDetails = () => {
  const dispatch = useDispatch();
  const category = useSelector(selectCategories);
  const recipeByCategory = useSelector(selectRecipes);
  const [nameCategory, setNameCategory] = useState('Beef');

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchByCategory(nameCategory));
  }, [dispatch, nameCategory]);

  console.log(category);

  const handleClick = e => {
    e.preventDefault();
    const category = e.target.textContent;
    setNameCategory(category);
  };

  return (
    <Tabs>
      <TabList onClick={handleClick}>
        {category.map(({ name, _id }) => (
          <Tab className={css.tabs_button} key={_id}>
            {name}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {category.map(({ _id }) => (
          <TabPanel key={_id}>
            <CategoryRecipeList recipeByCategory={recipeByCategory} />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default CategoryDetails;
