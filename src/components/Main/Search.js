import { useState } from "react"
import { Link } from "react-router-dom";

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
        <form onSubmit={handleSubmit}>
            <input
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