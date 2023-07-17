import { Link } from "react-router-dom"
import css from "./RecipeList.module.css";


export function RecipeList({data}) {


  return (
    <>   
    <ul className={css.list}>
     
    {data.map((recipe)=> {
return (

<li key={recipe._id} className={css.list_item}>
       <Link to={`/recipe/${recipe._id}`}>
       <h3 className={css.list_title}>{recipe.title}</h3>
       <img src={recipe.thumb} alt="recipe" className={css.img}/>
       <h3 className={css.list_title}>{recipe.title}</h3>
       </Link>
      
  </li>
  )})}
   </ul>
    </> 
  )

  }  










  