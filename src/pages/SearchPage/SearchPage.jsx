import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import SearchForm from '../../components/SearchForm/SearchInput';

import css from '../pages.module.css';
import searchCss from './searchContainer.module.css';
import SearchedRecipesList from 'components/SearchedRecipesList/SearchedRecipesList';
// import { Pagination } from '@mui/material';
import { useEffect, useState } from 'react';
import { selectRecipes } from '../../redux/recipesBySearch/selectors';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMoreBySearch,
  clearRecipes,
} from 'redux/recipesBySearch/operations';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {
  const [page, setPage] = useState(1);
  const [searchBy, setSearchBy] = useState('search');
  let limit = 6;
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { total, recipes } = useSelector(selectRecipes);
  const isLoged = useSelector(selectIsLoggedIn);
  const query = searchParams.get('query') ?? '';

  const [pageCount, setPageCount] = useState(1);
  const windowsWidth = window.innerWidth;

  // const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
  //   setPage(value);
  // };

  useEffect(() => {
    if (!searchParams.size) {
      dispatch(clearRecipes());
    }
  }, [dispatch, searchParams.size]);

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

  return (
    <div className={css.section}>
      <div className={`${css.container} ${searchCss.container}`}>
        <MainPageTitle text="Search" />
      </div>
      <div className={`${css.container} ${searchCss.container}`}>
        <SearchForm
          title={setParams}
          setSearchBy={setSearchBy}
          page={setPage}
        />
      </div>
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
      {recipes && (
        <>
          <div className={`${css.container} ${searchCss.container}`}>
            <SearchedRecipesList recipes={recipes} />
          </div>
          <div className={`${searchCss.paginationWrap} `}>
            {/* {page && <Pagination count={pageCount} page={page} onChange={handleChange} siblingCount={0}/>} */}
          </div>
        </>
      )}
    </div>
  );
};
export default SearchPage;

// import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
// import SearchForm from '../../components/SearchForm/SearchInput';

// import css from '../pages.module.css';
// import searchCss from './searchContainer.module.css';
// import SearchedRecipesList from 'components/SearchedRecipesList/SearchedRecipesList';
// // import { Pagination } from '@mui/material';
// import { useEffect, useState } from 'react';
// import { selectRecipes } from '../../redux/recipesBySearch/selectors';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   fetchMoreBySearch,
//   clearRecipes,
// } from 'redux/recipesBySearch/operations';
// import { selectIsLoggedIn } from 'redux/auth/selectors';
// import { useSearchParams } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

// const SearchPage = () => {
//   // const [page, setPage] = useState(1);
//   const [searchBy, setSearchBy] = useState('search');
//   let limit = 6;
//   const dispatch = useDispatch();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const { total, recipes } = useSelector(selectRecipes);
//   const isLoged = useSelector(selectIsLoggedIn);
//   const query = searchParams.get('query') ?? '';

//   const [pageCount, setPageCount] = useState(1);
//   const windowsWidth = window.innerWidth;

//   // const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
//   //   setPage(value);
//   // };

//   useEffect(() => {
//     if (!searchParams.size) {
//       dispatch(clearRecipes());
//     }
//   }, [dispatch, searchParams.size]);

//   useEffect(() => {
//     if (query) {
//       setPageCount(1);
//     }
//   }, [query]);

//   useEffect(() => {
//     if (!query) return;

//     //check width
//     if (windowsWidth >= 1440) {
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//       limit = 12;
//     }

//     //set pagination pages

//     if (total) {
//       setPageCount(Math.ceil(+total / limit));
//     }

//     if (isLoged) {
//       dispatch(fetchMoreBySearch({ searchBy, page, limit, query }));
//     }
//     setSearchParams({ query, page, limit });
//   }, [
//     dispatch,
//     page,
//     query,
//     limit,
//     searchBy,
//     isLoged,
//     pageCount,
//     total,
//     setSearchParams,
//     windowsWidth,
//   ]);

//   const setParams = value => {
//     setSearchParams({ query: value.search, page, limit });
//   };

//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return (
//     <div className={css.section}>
//       <div className={`${css.container} ${searchCss.container}`}>
//         <MainPageTitle text="Search" />
//       </div>
//       <div className={`${css.container} ${searchCss.container}`}>
//         <SearchForm
//           title={setParams}
//           setSearchBy={setSearchBy}
//           page={setPage}
//         />
//       </div>
//       {!recipes && (
//         <div
//           className={`${css.container} ${searchCss.container} ${searchCss.center}`}
//         >
//           <img
//             className={searchCss.mobPhoto}
//             src={require('../../images/SearchPage/vegetables-5abfb9c60122f5 1.png')}
//             alt="vegetables"
//           />
//           <img
//             className={searchCss.tabPhoto}
//             src={require('../../images/SearchPage/vegetables-5abfb9c60122f5 1_tab.png')}
//             alt="vegetables"
//           />
//           <p className={searchCss.text}>Try looking for something else..</p>
//         </div>
//       )}
//       {recipes && (
//         <>
//           <div className={`${css.container} ${searchCss.container}`}>
//             <SearchedRecipesList recipes={recipes} />
//           </div>
//           <div className={`${searchCss.paginationWrap} `}>
//             {/* {page && <Pagination count={pageCount} page={page} onChange={handleChange} siblingCount={0}/>} */}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };
// export default SearchPage;
