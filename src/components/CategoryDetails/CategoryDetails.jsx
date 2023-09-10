import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from '../CategoryDetails/Category.module.css';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import { selectCategories } from 'redux/categories/selectors';
import { fetchCategories } from 'redux/categories/operations';

import { fetchByCategory } from 'redux/recipes/operations';
import { selectIsLoading, selectRecipes } from 'redux/recipes/selectors';
import CategoryRecipeList from 'components/CategoryRecipeList/CategoryRecipeList';
import { useNavigate, useParams } from 'react-router-dom';
import MyLoader from './СategoryLoader';

const CategoryDetails = () => {
  const dispatch = useDispatch();
  const category = useSelector(selectCategories);
  const recipeByCategory = useSelector(selectRecipes);
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [nameCategory, setNameCategory] = useState('Beef');
  const { categoryName } = useParams();
  const isLoading = useSelector(selectIsLoading);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    if (categoryName) {
      setNameCategory(categoryName);
      setIndex(category.findIndex(c => c.name === categoryName));
      dispatch(fetchByCategory(categoryName));
    } else {
      dispatch(fetchByCategory(nameCategory));
    }
  }, [dispatch, categoryName, nameCategory, category]);

  const handleClick = e => {
    e.preventDefault();
    const category = e.target.textContent;
    setNameCategory(category);

    navigate(`/categories/${category}`);
    dispatch(fetchByCategory(category));
  };
  const handleScroll = e => {
    setIndex(prev => setPrevIndex(prev));
    if (index > prevIndex) {
      document.getElementById('content').scrollBy({
        top: 0,
        left: 90,
        behavior: 'smooth',
      });
    }
    if (index < prevIndex) {
      document.getElementById('content').scrollBy({
        top: 0,
        left: -90,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Tabs
      size={window.innerWidth < 767 ? 'sm' : 'lg'}
      variant="unstyled"
      isLazy
      defaultIndex={0}
      index={index}
      onClick={handleScroll}
      onChange={index => setIndex(index)}
    >
      <TabList
        id={'content'}
        overflowY="hidden"
        className={css.tab_list}
        sx={{
          scrollbarWidth: 'none',
          '::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {category?.map(({ name }) => (
          <Tab
            onClick={handleClick}
            _selected={{ color: '#8BAA36', borderBottom: 'solid 2px' }}
            className={css.tabs_button}
            key={name}
          >
            {name}
          </Tab>
        ))}
      </TabList>
      {isLoading ? (
        <MyLoader />
      ) : (
        <TabPanels className={css.list}>
          {category.map(({ _id }) => (
            <TabPanel p="0" key={_id}>
              <CategoryRecipeList recipeByCategory={recipeByCategory} />
            </TabPanel>
          ))}
        </TabPanels>
      )}
    </Tabs>
  );
};

export default CategoryDetails;
