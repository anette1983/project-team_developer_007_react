import { useDispatch, useSelector } from 'react-redux';

import css from './Paginator.module.css';
import { selectTotalMyRecipes } from 'redux/myRecipes/selectors';
import { useEffect, useState } from 'react';
import { fetchMyRecipes } from 'redux/myRecipes/operations';

const Paginator = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const totalRecipes = useSelector(selectTotalMyRecipes);

  const perPage = 4;
  let totalPages = Math.ceil(totalRecipes / perPage);

  const pagesArr = [];
  console.log('updating in paginator', totalRecipes, totalPages);

  if (totalPages > 1) {
    for (let i = 1; i <= totalPages; i++) {
      pagesArr.push(i);
    }
  }

  const handlePageSelect = page => {
    setCurrentPage(page);
    dispatch(fetchMyRecipes(page));
    // setParams({ page });
  };

  console.log(pagesArr, '<<<');
  console.log('paginator render', pagesArr);
  return (
    <div className={`${css.pagination_wrapper}`}>
      <ul>
        <li>
          <button>{'<'}</button>
          {/*           <button>{'1'}</button>
          <button>{'2'}</button> */}
          {pagesArr.map(page => (
            <button
              key={page}
              onClick={() => handlePageSelect(page)}
              className={`
              page-number${currentPage === page && 'page-number--active'}`}
            >
              {page}
            </button>
          ))}
          <button>{'>'}</button>
        </li>
      </ul>
    </div>
  );
};

export default Paginator;
