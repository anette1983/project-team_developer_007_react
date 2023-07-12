// import { useDispatch, useSelector } from "react-redux";
import {Main} from "../../components/Main/Main"
import css from "./MainPage.module.css"
// import { selectIsLoggedIn, selectIsRefreshing } from "redux/auth/selectors";
// import { useEffect } from "react";
// import { fetchByCategory, fetchMainPage, fetchMore, fetchRecipeById } from "../../redux/recipes/operations";
// import { selectCategories } from "redux/categories/selectors";
// import { selectRecipes } from "redux/recipes/selectors";
// import { fetchCategories } from "redux/categories/operations";

const MainPage = () => {
// const dispatch = useDispatch();
// const recipes=fetchByCategory();
// const categories = selectCategories;
// console.log(categories);
// fetchByCategory(categories);
// const recipes = selectRecipes;
// console.log(recipes);
// fetchMainPage();
// const res = fetchMainPage()
// fetchMainPage()
// console.log(recipes);

// fetchByCategory()
// const isLoggedIn = useSelector(selectIsLoggedIn);
// const isRefresh = useSelector(selectIsRefreshing);


// useEffect(()=> {
//   // if (!isRefresh) {
    // dispatch(fetchMainPage())
//   // }
// }, [dispatch])

  return(
    <>
{/* {isLoggedIn && !isRefresh && */}
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
 

{/* } */}
    </>
  )
  
};

export default MainPage;
