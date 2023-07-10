import { MainPageTitle } from "components/MainPageTitle/MainPageTitle"
import SearchForm from "../../components/SearchForm/SearchInput"

import css from "../pages.module.css"
import searchCss from "./searchContainer.module.css"
import SearchedRecipesList from "components/SearchedRecipesList/SearchedRecipesList"
import { Pagination } from "@mui/material"
import { useState } from "react"
// import fetchByIngredientName from "../../services/fetchByIngredients"
// import fetchByRecipe from "../../services/fetchRecipes"
// import mobPhoto from '../../picture/vegetables-5abfb9c60122f5 1.png'
// import tabPhoto from '../../picture/vegetables-5abfb9c60122f5 1_tab.png'



    
const SearchPage = () => {
    const [page, setPage] = useState(1);
    const [recipe, setRecipe] = useState(null)
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    };
    console.log(recipe);
    
    return (
        <div className={css.section}>
            <div className={`${css.container} ${searchCss.container}`}>
                <MainPageTitle text='Search' />
            </div>
            <div className={`${css.container} ${searchCss.container}`}>
                <SearchForm title={ setRecipe} />
            </div>
            {!recipe && <div className={`${css.container} ${searchCss.container}`}>
               
                <img className={searchCss.mobPhoto} src={require('../../picture/vegetables-5abfb9c60122f5 1.png')} alt="vegetables" />
                 <img className={searchCss.tabPhoto} src={require('../../picture/vegetables-5abfb9c60122f5 1_tab.png')} alt="vegetables" />
            </div>}
            {recipe && <>
            <div className={`${css.container} ${searchCss.container}`}>
                <SearchedRecipesList/>
            </div>
            <div className={searchCss.paginationWrap}>
                <Pagination count={5} page={page} onChange={handleChange}/>
                
            </div>
            </>} 
        </div>
    )
    
}
export default SearchPage;
