import { MainPageTitle } from "components/MainPageTitle/MainPageTitle"
import css from "./pages.module.css"



export const SearchPage = () => {
    return (
        <div className={css.section}>
            <div className={css.container}>
                <MainPageTitle text='Search' />
            </div>
        </div>
    )
    
}