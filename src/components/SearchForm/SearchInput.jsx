import { useState } from "react";
import css from "./searchInput.module.css"

const SearchForm = ({title}) => {
    const [selectBy, setSelectBy] = useState("Title");
    const [search, setSearch] = useState('')
    const [isHidden, setIsHidden] = useState(false);
    const handleBtnSubmit = (e) => {
        e.preventDefault();
        title({ selectBy, search })
        reset()    
    }
    const handleOption = (e) => {
        setSelectBy( e.currentTarget.id)  
    }
     const handleInput = e => {
        setSearch(e.target.value)
    }
    const  reset = () => {
        setSearch('')
    }
    const handleHidden = () => {
        setIsHidden(!isHidden)
    }
    const handleCloseHidden = () => {
        setIsHidden(false)
    }
    return (
        <form onSubmit={handleBtnSubmit} className={ css.form}>
            <div className={ css.inputWrap}>
                <input type="text" className={css.input} name='search' value={ search} onChange={handleInput} />
                <button type="submit" className={css.button}>Search</button>
            </div>
            <div className={css.selectWrap}>
                     <p className={ css.label}>Search by:</p>
            <div className={css.select} onClick={handleHidden}>
                {selectBy}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="chevron-up">
                    <path id="Vector" d="M3.5 5.25L7 8.75L10.5 5.25" stroke="#8BAA36" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                </svg>
                </div>
                {isHidden &&<div className={css.optionWrap} onClick={handleCloseHidden}>
                        <p onClick={handleOption} className={css.text} id="Title">Title</p>
                        <p onClick={handleOption} className={css.text} id="Ingredients">Ingredients</p>              
                </div>}
                
            </div>                
        </form>   
    )
    
}
export default SearchForm;