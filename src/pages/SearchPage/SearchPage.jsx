// import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import SearchForm from '../../components/SearchForm/SearchInput';

import css from '../pages.module.css';
import searchCss from './searchContainer.module.css';
import SearchedRecipesList from 'components/SearchedRecipesList/SearchedRecipesList';
import { useEffect, useState } from 'react';
import {
  selectRecipes,
  selectError,
  selectIsLoading,
} from '../../redux/recipesBySearch/selectors';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMoreBySearch,
  clearRecipes,
} from 'redux/recipesBySearch/operations';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { Notify } from 'notiflix';
import CategoryLoader from 'components/CategoryDetails/СategoryLoader';

const SearchPage = () => {
  const [page, setPage] = useState(1);
  const [searchBy, setSearchBy] = useState('search');

  let limit = 6;
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { total, recipes } = useSelector(selectRecipes);
  const isLoged = useSelector(selectIsLoggedIn);
  const isError = useSelector(selectError);
  const query = searchParams.get('query') ?? '';
  const isLoading = useSelector(selectIsLoading);

  const [pageCount, setPageCount] = useState(1);
  const windowsWidth = window.innerWidth;

  useEffect(() => {
    if (!searchParams.size || isError) {
      dispatch(clearRecipes());
    }
  }, [dispatch, isError, searchParams.size]);

  useEffect(() => {
    if (query) {
      setPageCount(1);
    }
  }, [query]);

  useEffect(() => {
    if (!query) return;

    //check width
    if (windowsWidth >= 1440) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      limit = 12;
    }

    //set pagination pages

    if (total) {
      setPageCount(Math.ceil(+total / limit));
    }

    if (isLoged) {
      dispatch(fetchMoreBySearch({ searchBy, page, limit, query }));
    }
    setSearchParams({ query, page, limit });
  }, [
    dispatch,
    page,
    query,
    limit,
    searchBy,
    isLoged,
    pageCount,
    total,
    setSearchParams,
    windowsWidth,
  ]);

  const setParams = value => {
    setSearchParams({ query: value.search, page, limit });
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (isError) {
      Notify.failure("Ooops, we couldn't find what you want!");
    }
  }, [isError]);

  return (
    <div className={css.sectionSearch}>
      <SectionTitle text={'Search'} />
      <div className={`${css.container} ${searchCss.container}`}>
        <SearchForm
          title={setParams}
          setSearchBy={setSearchBy}
          page={setPage}
          searchQuery={query}
        />
      </div>
      {isLoading ? (
        <CategoryLoader />
      ) : (
        recipes && (
          <div className={`${css.listContainer} ${searchCss.listContainer}`}>
            <SearchedRecipesList recipes={recipes} />
          </div>
        )
      )}
      {!recipes && (
        <div
          className={`${css.container} ${searchCss.container} ${searchCss.center}`}
        >
          <img
            className={searchCss.mobPhoto}
            src={require('../../images/SearchPage/vegetables-5abfb9c60122f5 1.png')}
            alt="vegetables"
          />
          <img
            className={searchCss.tabPhoto}
            src={require('../../images/SearchPage/vegetables-5abfb9c60122f5 1_tab.png')}
            alt="vegetables"
          />
          <p className={searchCss.text}>Try looking for something else..</p>
        </div>
      )}

      {/* {recipes && (
      //   <>
      //     <div className={`${css.listContainer} ${searchCss.listContainer}`}>
      //       <SearchedRecipesList recipes={recipes} />
      //     </div>
      //   </>
      // )} */}
    </div>
  );
};
export default SearchPage;
