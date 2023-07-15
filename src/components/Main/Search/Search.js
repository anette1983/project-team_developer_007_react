import { useState } from "react"
import { Link } from "react-router-dom";
import css from "./Search.module.css";

export const Search =({onSubmit})=> {
const [value, setValue] = useState ('');
// const [searchParams, setSearhParams ]= useSearchParams();

// const query = searchParams.get('query');
const handleChange = e => setValue(e.currentTarget.value.toLowerCase());

const handleSubmit = e => {
e.preventDefault();
if(value.trim() ===""){
    return alert('Enter the name of the recipe')
}
// setSearhParams({query:e});
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
            placeholder="Enter the text"
            />
            <Link 
            // to={{
            //     pathname: "/search",
            //     propsSearch: {value}
            // }}
            to={`/search/?${value}`} 
            data={value}
            >
            <button className={css.btn} type="submit">Search</button>
            </Link>
            
        </form>
    )
}