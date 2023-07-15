import { RecipeList } from "../RecipeList/RecipesList";
import { Link } from "react-router-dom";
import css from "./PreviewCategories.module.css";
import { useSelector } from "react-redux";
import { selectRecipes } from "redux/recipes/selectors";

export const PreviewCategories =()=>{

const recipes = useSelector(selectRecipes);
console.log(recipes);
    return (
        
         <div className={css.container}>
{/* <RecipeList data={recipes}/> */}

         <section className={css.section}>
         <h2 className={css.title}>Breakfast</h2>
         <RecipeList data={recipes.Breakfast}/>
         <Link to="/categories/:breakfast">
         <button className={css.btn} type="button">See all</button>
         </Link>
         
         </section>
  
 <section className={css.section}>
     <h2 className={css.title}>Miscellaneous</h2>
     <RecipeList data={recipes.Miscellaneous}/>
     <Link to="/categories/:miscellaneous">
     <button className={css.btn} type="button">See all</button>
     </Link>
     
     </section>
 <section className={css.section}>
     <h2 className={css.title}>Chicken</h2>
     <RecipeList data={recipes.Chicken}/>
     <Link to="/categories/:chicken">
     <button className={css.btn} type="button">See all</button>
     </Link>
     </section>
 <section className={css.section}>
     <h2 className={css.title}>Deserts</h2>
     <RecipeList data={recipes.Deserts}/>
     <Link to="/categories/:deserts">
     <button className={css.btn} type="button">See all</button>
     </Link>
     </section>
 <Link className={css.btn_other} to="/categories">Other categories</Link>
 </div>
        
        )
}
