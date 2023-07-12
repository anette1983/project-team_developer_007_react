import { RecipeList } from "../RecipeList/RecipesList";
import { Link } from "react-router-dom";
import css from "./PreviewCategories.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { selectCategories } from "redux/categories/selectors";
// import { selectRecipes } from "redux/recipes/selectors";
// import { fetchCategories } from "redux/categories/operations";

export const PreviewCategories =()=>{
// const dispatch = useDispatch();
// dispatch(fetchCategories())
// const categories = useSelector(selectCategories);
// console.log(categories);
// const recipes = useSelector(selectRecipes)
// console.log(recipes);
// const [recipes, setRecipes]= useState([]);

  // Видалив setReciepes тому що він поки що не використовується, а за нього не збтрається проект! 
  // Коли буде активний запит то повернути setReciepes

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
