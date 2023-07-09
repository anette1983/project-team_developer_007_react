import { MainPageTitle } from "components/MainPageTitle/MainPageTitle"
import SearchForm from "../../components/SearchForm/SearchInput"

import css from "../pages.module.css"
import searchCss from "./searchContainer.module.css"

 const SearchPage = () => {
    return (
        <div className={css.section}>
            <div className={`${css.container} ${searchCss.container}`}>
                <MainPageTitle text='Search' />
            </div>
            <div className={`${css.container} ${searchCss.container}`}>
                <SearchForm/>
            </div>
        </div>
    )
    
}
export default SearchPage;