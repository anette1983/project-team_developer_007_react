import { useDispatch, useSelector } from 'react-redux';
import css from './Paginator.module.css';
import { selectTotalMyRecipes } from 'redux/myRecipes/selectors';
import { useState, useEffect } from 'react';
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import { fetchMyRecipes } from 'redux/myRecipes/operations';
import sprite from '../../images/svg/sprite.svg';

const Paginator = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const page = searchParams.get('page') || currentPage;

  const dispatch = useDispatch();
  const totalRecipes = useSelector(selectTotalMyRecipes);

  const perPage = 4;
  const totalPages = Math.ceil(totalRecipes / perPage);
  // const totalPages = 5;

  useEffect(() => {
    setSearchParams({ page });
    const search = location.search || `?page=${page}`;
    navigate({ search });
  }, [navigate, location.search, setSearchParams, page]);

  useEffect(() => {
    dispatch(fetchMyRecipes(page));
    setCurrentPage(Number(page));
  }, [page, dispatch]);

  const handlePageSelect = page => {
    setCurrentPage(page);
    setSearchParams({ page });
    dispatch(fetchMyRecipes(page));
  };

  const handlePrevBtnClick = () => {
    const prevPage = currentPage - 1;
    console.log('prevPage :>> ', prevPage);
    setCurrentPage(prevPage);
    setSearchParams({ page: prevPage });
    dispatch(fetchMyRecipes(prevPage));
  };

  const handleNextBtnClick = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    setSearchParams({ page: nextPage });
    dispatch(fetchMyRecipes(nextPage));
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <>
      {totalPages > 1 && (
        <ul className={`${css.pagination_list}`}>
          <li className={`${css.pagination_item}`}>
            <button
              className={`${css.left_btn} ${css.pagination_btn}`}
              onClick={handlePrevBtnClick}
              disabled={currentPage === 1}
            >
              <svg>
                <use href={sprite + '#leftbolt'} />
              </svg>
            </button>
          </li>

          {pageNumbers.map(pageNumber => (
            <li key={pageNumber} className={`${css.pagination_item}`}>
              <button
                onClick={() => {
                  handlePageSelect(pageNumber);
                  setCurrentPage(pageNumber);
                }}
                className={`${css.pagination_btn} ${
                  currentPage === pageNumber ? css.active : ''
                }`}
              >
                {pageNumber}
              </button>
            </li>
          ))}

          <li className={`${css.pagination_item}`}>
            <button
              className={`${css.right_btn} ${css.pagination_btn}`}
              onClick={handleNextBtnClick}
              disabled={currentPage === totalPages}
            >
              <svg>
                <use href={sprite + '#rightbolt'} />
              </svg>
            </button>
          </li>
        </ul>
      )}
    </>
  );
};

export default Paginator;

// import { useDispatch, useSelector } from 'react-redux';

// import css from './Paginator.module.css';
// import { selectTotalMyRecipes } from 'redux/myRecipes/selectors';
// // import { useEffect, useState } from 'react';
// import { useState } from 'react';

// import { fetchMyRecipes } from 'redux/myRecipes/operations';
// import sprite from '../../images/svg/sprite.svg';
// import { useSearchParams } from 'react-router-dom';

// const Paginator = () => {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const [currentPage, setCurrentPage] = useState(1);
//   const page = searchParams.get('page') || currentPage;

//   const dispatch = useDispatch();

//   const totalRecipes = useSelector(selectTotalMyRecipes);

//   const perPage = 4;
//   let totalPages = Math.ceil(totalRecipes / perPage);

//   // const pagesArr = [];
//   const pagesArr = [1, 2, 3, 4, 5, 6];
//   console.log('updating in paginator', totalRecipes, totalPages);

//   if (totalPages > 1) {
//     for (let i = 1; i <= totalPages; i++) {
//       pagesArr.push(i);
//     }
//   }

//   const handlePageSelect = page => {
//     setCurrentPage(page);
//     dispatch(fetchMyRecipes(page));
//     setSearchParams({ page });
//   };

//   const handlePrevBtnClick = () => {
//     const page = searchParams.get('page');
//     const prevPage = Number(page) - 1;
//     setCurrentPage(prevPage);
//     dispatch(fetchMyRecipes(prevPage));
//     setSearchParams({ page: prevPage });
//   };

//   const handleNextBtnClick = page => {
//     const nextPage = Number(page) + 1;
//     setCurrentPage(nextPage);
//     dispatch(fetchMyRecipes(nextPage));
//     setSearchParams({ page: nextPage });
//   };

//   console.log(pagesArr, '<<<');
//   console.log('paginator render', pagesArr);
//   return (
//     <>
//       {/* {
//         totalPages > 1 &&( */}
//       <ul className={`${css.pagination_list}`}>
//         <li className={`${css.pagination_item}`}>
//           <button
//             className={`${css.left_btn} ${css.pagination_btn}`}
//             onClick={() => handlePrevBtnClick(currentPage)}
//           >
//             <svg>
//               <use href={sprite + '#leftbolt'} />
//             </svg>
//           </button>
//         </li>

//         {/*           <button>{'1'}</button>
//           <button>{'2'}</button> */}
//         {pagesArr?.map(page => (
//           <li key={page} className={`${css.pagination_item}`}>
//             <button
//               onClick={() => handlePageSelect(page)}
//               // className={`
//               //   page-number${currentPage === page && 'page-number--active'}`}
//               className={`${css.pagination_btn} ${
//                 currentPage === page ? css.active : ''
//               }`}
//             >
//               {page}
//             </button>
//           </li>
//         ))}
//         <li className={`${css.pagination_item}`}>
//           <button
//             className={`${css.right_btn} ${css.pagination_btn}`}
//             onClick={() => handleNextBtnClick(page)}
//           >
//             <svg>
//               <use href={sprite + '#rightbolt'} />
//             </svg>
//           </button>
//         </li>
//       </ul>
//       {/* )} */}
//     </>
//   );
// };

// export default Paginator;
