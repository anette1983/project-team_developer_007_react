import { useState } from "react"
import { Link } from "react-router-dom";
import css from "./Search.module.css";

export const Search =({onSubmit})=> {
const [value, setValue] = useState ('');

const handleChange = e => setValue(e.currentTarget.value.toLowerCase());

const handleSubmit = e => {
e.preventDefault();
if(value.trim() ===""){
    return alert('Enter the name of the recipe')
}
onSubmit(value)
}

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            value={value}
            onChange={handleChange}
            />
            <Link to="/search" >
            <button type="submit">Search</button>
            </Link>
            
        </form>
    )
}