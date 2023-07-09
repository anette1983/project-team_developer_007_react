import RecipeItem from "components/RecipeItem/RecipeItem";
import file from "../../recipes.json"

const SearchedRecipesList = () => {
    console.log(file);
    return (
      
        <ul>
            {file.map(element => {
              
                return <RecipeItem url={element.preview} text={ element.title} key={element._id} />
          })}
           
           
        </ul>
    )
}

export default SearchedRecipesList;