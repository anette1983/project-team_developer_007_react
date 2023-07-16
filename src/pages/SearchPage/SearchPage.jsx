import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import SearchForm from '../../components/SearchForm/SearchInput';

import css from '../pages.module.css';
import searchCss from './searchContainer.module.css';
import SearchedRecipesList from 'components/SearchedRecipesList/SearchedRecipesList';
import { Pagination } from '@mui/material';
import { useEffect, useState } from 'react';
import {selectRecipes} from "../../redux/recipes/selectors"
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoreBySearch, clearRecipes } from 'redux/recipes/operations';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSearchParams } from 'react-router-dom';


const SearchPage = () => {
  const [page, setPage] = useState(1);
  const [searchBy, setSearchBy] = useState('search')
  const [limit, setLimit]=useState(6)
  const dispatch = useDispatch()
   const [searchParams, setSearchParams] = useSearchParams();
  const recipes = useSelector(selectRecipes)
  const isLoged = useSelector(selectIsLoggedIn);
  const query = searchParams.get('query') ?? '';
  
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
     
  };
  useEffect(() => {
    
    dispatch(clearRecipes())
  },[dispatch])
  
  useEffect(() => {
    if (!query) return
      if (window.innerWidth>=1440) {
    setLimit(12)
  }
    if (isLoged) {
      dispatch(fetchMoreBySearch({ searchBy, page, limit, query}))
    }  
},[dispatch, page, query, limit, searchBy, isLoged])
  
  
   const setParams = (value) => {
     setSearchParams({ query: value.search, page, limit: 6 })
    };
  
  return (
    <div className={css.section}>
      <div className={`${css.container} ${searchCss.container}`}>
        <MainPageTitle text="Search" />
      </div>
      <div className={`${css.container} ${searchCss.container}`}>
        <SearchForm title={setParams} setSearchBy={setSearchBy } />
      </div>
      {!recipes.length && (
        <div className={`${css.container} ${searchCss.container}`}>
          <img
            className={searchCss.mobPhoto}
            src={require('../../pictures/SearchPage/vegetables-5abfb9c60122f5 1.png')}
            alt="vegetables"
          />
          <img
            className={searchCss.tabPhoto}
            src={require('../../pictures/SearchPage/vegetables-5abfb9c60122f5 1_tab.png')}
            alt="vegetables"
          />
        </div>
      )}
      {recipes.length && (
        <>
          <div className={`${css.container} ${searchCss.container}`}>
            <SearchedRecipesList recipes={ recipes} />
          </div>
          <div className={`${searchCss.paginationWrap} `}>
            <Pagination count={5} page={page} onChange={handleChange} />
          </div>
        </>
      )}
    </div>
  );
};
export default SearchPage;
