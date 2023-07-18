import {  useState } from "react"
import { Link } from "react-router-dom";
import css from "./Search.module.css";

export const Search =()=> {
const [value, setValue] = useState ('');

const handleChange = e => setValue(e.currentTarget.value.toLowerCase());

    return (
        <form className={css.form}>
            <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            value={value}
            onChange={handleChange}
            placeholder="Enter the text"
            />
            <Link
           to={value ? `/search/?query=${value}` : '#'}
            
            >
                
            <button className={css.btn} type="submit">Search</button>
            </Link>
            </form>
    )
}