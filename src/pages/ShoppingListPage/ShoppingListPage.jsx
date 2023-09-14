
import css from '../pages.module.css';
import searchCss from './shopingContainer.module.css';
import ShopingHeader from 'components/ShopingHeader/ShopingHeader';
import ShopingList from 'components/ShopingList/ShopingList';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectShopingList,
  selectShopingListError,
  selectShopingListIsLoading,
} from 'redux/shopingList/selectors';
import NoRecipesPlug from 'pages/MyRecipesPage/NoRecipesPlug';
import { fetchShopingList } from 'redux/shopingList/operations';
import Loader from 'components/Loader';

const ShoppingListPage = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const shopinList = useSelector(selectShopingList);
  const isLoading = useSelector(selectShopingListIsLoading);
  const error = useSelector(selectShopingListError);

  useEffect(() => {
    dispatch(fetchShopingList());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={css.sectionSearch}>
      <SectionTitle text={'Shopping list'} />
      {error && <div>Something went wrong!</div>}
      {isLoading && <Loader />}
      {shopinList.length !== 0 ? (
        <>
          <div className={`${css.container} ${searchCss.container}`}>
            <ShopingHeader />
          </div>
          <div className={`${css.container} ${searchCss.sahopingConteiner}`}>
            <ShopingList />
          </div>
        </>
      ) : (
        <div className={`${css.container} ${searchCss.container}`}>
          <NoRecipesPlug text="There are no items in your shopping list!" />
        </div>
      )}
    </div>
  );
};

export default ShoppingListPage;
