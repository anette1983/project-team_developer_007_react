import { RecipeList } from "../RecipeList/RecipesList";
import { Link } from "react-router-dom";
import css from "./PreviewCategories.module.css";
import { useSelector } from "react-redux";
import { selectRecipes } from "redux/recipes/selectors";

export const PreviewCategories =()=>{

const recipes = useSelector(selectRecipes);

// recipes[1] = recipes.splice(0,1, recipes[1])[0]
// console.log(recipes);
// for (const value of recipes ) {
//     console.log(value[1]);
// }
// const x = recipes.map(res=> [...res].sort((a,b)=>b-a))
// console.log(x);
// const newRecipes = [...x].sort((a,b)=>b-a)
// console.log(newRecipes);
    return (
        
         <div className={css.container}>
            <ul>
            {recipes.map(recipe=> {
                return(
                  <li key={recipe[0]._id}>
                <section className={css.section}>
               <h2 className={css.title}>{recipe[0].category}</h2>  
               <RecipeList data={recipe}/>
               <Link to={`/categories/:${recipe[0].category.toLowerCase()}`}>
         <button className={css.btn} type="button">See all</button>
         </Link>
               </section>
                </li>

     
                ) 
           
            })}

                
            </ul>
           

{/* 
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
     </section> */}
 <Link className={css.btn_other} to="/categories">Other categories</Link>
 </div>
        
        )
}
