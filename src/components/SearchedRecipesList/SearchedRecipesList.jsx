import RecipeItem from "components/RecipeItem/RecipeItem";

import css from "./searcLwist.module.css"

const SearchedRecipesList = ({ recipes }) => {
    
    return (
      
        <ul className={css.list}>
            
            {recipes.map(element => {
              
                return <RecipeItem url={element.preview} text={ element.title} key={element._id} />
          })}
           
           
        </ul>
    )
}

export default SearchedRecipesList;