// import { Link } from "react-router-dom"
import css from "./RecipeList.module.css";

export function RecipeList({ data }) {
  return (
    <ul className={css.list}>
      {/* {data.map((recipe)=> {
return (
    <li key={recipe.id}>
        <Link to={`/reciepe/:{recipe.id}`}>
        <h3>{recipe.name}</h3>
        <img src="" alt=""/>
        </Link>
        
    </li>
          
)
            })} */}
    </ul>
  );
}
