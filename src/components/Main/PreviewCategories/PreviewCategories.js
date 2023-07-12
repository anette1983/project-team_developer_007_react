// import { useState } from "react"
import { RecipeList } from "../RecipeList/RecipesList";
import { Link } from "react-router-dom";
import css from "./PreviewCategories.module.css";
// import { fetchByCategory} from "../../../redux/recipes/operations"
// import { useDispatch, useSelector } from "react-redux";
// import {selectCategories} from "../../../redux/categories/selectors"
// import { fetchMainPage } from "redux/recipes/operations";


export const PreviewCategories =()=>{
// const [recipes, setRecipes]= useState([]);
// const dispatch = useDispatch();

//   dispatch(fetchByCategory());

    // const recipe = fetchMainPage();
    // console.log(recipe);
    // console.log(recipe);

    // const page = fetchMainPage();
    // console.log(page);

    // const categories = fetchByCategory();
    // console.log(categories);
  // Видалив setReciepes тому що він поки що не використовується, а за нього не збтрається проект! 
  // Коли буде активний запит то повернути setReciepes
// const [reciepes]= useState([]);
  

// useEffect(()=>{

//   fetchMainPage()
//   fetchByCategory('breakfast')
//   console.log(fetchMainPage());

// }, [])

    return (
        <div className={css.container}>
        <section className={css.section}>
            <h2 className={css.title}>Breakfast</h2>
            <RecipeList data={""}/>
            <Link to="/categories/:breakfast">
            <button className={css.btn} type="button">See all</button>
            </Link>
            
            </section>
        <section className={css.section}>
            <h2 className={css.title}>Miscellaneous</h2>
            <RecipeList data={""}/>
            <Link to="/categories/:miscellaneous">
            <button className={css.btn} type="button">See all</button>
            </Link>
            
            </section>
        <section className={css.section}>
            <h2 className={css.title}>Chicken</h2>
            <RecipeList data={""}/>
            <Link to="/categories/:chicken">
            <button className={css.btn} type="button">See all</button>
            </Link>
            </section>
        <section className={css.section}>
            <h2 className={css.title}>Deserts</h2>
            <RecipeList data={""}/>
            <Link to="/categories/:deserts">
            <button className={css.btn} type="button">See all</button>
            </Link>
            </section>
        <Link className={css.btn_other} to="/categories">Other categories</Link>
        </div>
    )
}
