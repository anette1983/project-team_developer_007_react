import { useState } from "react";
import css from "./searchInput.module.css"

const SearchForm = () => {
    const [selectBy, setSelectBy] = useState("Title");


    const handleBtnSubmit = (e) => {
        e.preventDefault();
        
    }
    const handleOption = (e) => {
        console.log( e.currentTarget.id);
        setSelectBy( e.currentTarget.id)  
    }
    return (
        <form onSubmit={handleBtnSubmit} className={ css.form}>
            <div className={ css.inputWrap}>
                <input type="text" className={css.input} />
                <button type="submit" className={css.button}>Search</button>
            </div>
            <div className={css.selectWrap}>
                     <p className={ css.label}>Search by:</p>
            <div className={css.select}>
                {selectBy}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="chevron-up">
                    <path id="Vector" d="M3.5 5.25L7 8.75L10.5 5.25" stroke="#8BAA36" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                </svg>
                </div>
                <div className={css.optionWrap}>
                        <p onClick={handleOption} className={css.text} id="Title">Title</p>
                        <p onClick={handleOption} className={css.text} id="Ingredients">Ingredients</p>              
                </div>
                
            </div>                
        </form>   
    )
    
}
export default SearchForm;