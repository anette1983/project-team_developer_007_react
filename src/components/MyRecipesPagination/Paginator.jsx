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
