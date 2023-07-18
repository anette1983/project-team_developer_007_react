

import css from "./searcLwist.module.css"

import { SearchRecipeItem } from "components/SearchRecipeItem/SearchRecipeItem";

const SearchedRecipesList = ({ recipes }) => {
    
    return (
      
        <ul className={css.list}>
            <SearchRecipeItem data={ recipes} />         
        </ul>
    )
}

export default SearchedRecipesList;

