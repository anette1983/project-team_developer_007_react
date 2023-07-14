import RecipeItem from "components/RecipeItem/RecipeItem";
import file from "../../recipes.json"
import css from "./searcLwist.module.css"

const SearchedRecipesList = () => {
    return (
      
        <ul className={css.list}>
            
            {file.map(element => {
              
                return <RecipeItem url={element.preview} text={ element.title} key={element._id} />
          })}
           
           
        </ul>
    )
}

export default SearchedRecipesList;