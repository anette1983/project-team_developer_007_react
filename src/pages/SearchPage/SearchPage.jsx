import { MainPageTitle } from "components/MainPageTitle/MainPageTitle"
import SearchForm from "../../components/SearchForm/SearchInput"

import css from "../pages.module.css"
import searchCss from "./searchContainer.module.css"
import SearchedRecipesList from "components/SearchedRecipesList/SearchedRecipesList"
import { Pagination } from "@mui/material"

 const SearchPage = () => {
    return (
        <div className={css.section}>
            <div className={`${css.container} ${searchCss.container}`}>
                <MainPageTitle text='Search' />
            </div>
            <div className={`${css.container} ${searchCss.container}`}>
                <SearchForm/>
            </div>
            <div className={`${css.container} ${searchCss.container}`}>
                <img className={searchCss.mobPhoto} src={require('../../picture/vegetables-5abfb9c60122f5 1.png')} alt="vegetables" />
                 <img className={searchCss.tabPhoto} src={require('../../picture/vegetables-5abfb9c60122f5 1_tab.png')} alt="vegetables" />
            </div>
            <div className={`${css.container} ${searchCss.container}`}>
                <SearchedRecipesList/>
            </div>
            <div className={searchCss.paginationWrap}>
                <Pagination count={5} siblingCount={0} />
            </div>
           
        </div>
    )
    
}
export default SearchPage;