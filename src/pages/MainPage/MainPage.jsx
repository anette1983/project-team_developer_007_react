import { useDispatch, useSelector } from "react-redux";
import {Main} from "../../components/Main/Main"
import css from "./MainPage.module.css"
import { selectIsLoggedIn, selectIsRefreshing } from "redux/auth/selectors";
import { useEffect} from "react";
import { fetchMainPage } from "../../redux/recipes/operations";


const MainPage = () => {

const dispatch = useDispatch();
const isLoggedIn = useSelector(selectIsLoggedIn);
const isRefresh = useSelector(selectIsRefreshing);

 useEffect(()=> {
 if (!isRefresh) {
    dispatch(fetchMainPage())
}
 }, [dispatch, isRefresh])



  return(
    <>
{ isLoggedIn && !isRefresh &&
<div className={css.wrapper}>
<div className={css.wrapper_leaf}>
<div className={css.container}>
  <h1 className={css.title}>
     <span className={css.title_start}>So</span>Yummy</h1>
  <p className={css.text}>
  "What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to save them for the future.
  </p>
<Main/>
 </div>
 </div>
</div>

}  
    </>
  )
  
};

export default MainPage;
