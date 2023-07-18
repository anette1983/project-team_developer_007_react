import {ChooseYourBreakfast} from "./ChooseYourBreakfast/ChooseYourBreakfast";
import {Search} from "./Search/Search";
import {PreviewCategories} from "./PreviewCategories/PreviewCategories"
import css from "./Main.module.css";



export const Main =()=> {
 

    return(
        <div>
            <div className={css.container}>
           <ChooseYourBreakfast/>
           <Search />
            </div>
       
        <PreviewCategories/>
        </div>
    )
}