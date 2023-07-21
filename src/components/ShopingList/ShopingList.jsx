import ShopingItem from 'components/ShopingItem/ShopingItem';
import css from './ShipongList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectShopingList } from 'redux/shopingList/selectors';
import {
  deleteFromShopingList,
  fetchShopingList,
} from 'redux/shopingList/operations';

const ShopingList = () => {
  const dispatch = useDispatch();
  const shopinList = useSelector(selectShopingList);
  const [itemId, setItemId] = useState('');

  useEffect(() => {
    dispatch(fetchShopingList());
  }, [dispatch]);

  const handleDelete = ({ currentTarget }) => {
    setItemId(currentTarget.id);
  };
  useEffect(() => {
    if (!itemId) return;
    dispatch(deleteFromShopingList(itemId));
  }, [dispatch, itemId]);

  return (
    <div className={css.wrap}>
      <ul className={css.list}>
        {shopinList?.map(item => {
          return (
            <ShopingItem
              title={item.ingredient.name}
              img={item.ingredient.img}
              quantity={item.measure}
              key={item.ingredient._id}
              id={item.ingredient._id}
              deleteItem={handleDelete}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ShopingList;
