import { Link } from "react-router-dom"

export const ChooseYourBreakfast = () => {
    return (
        <>
        <p>
        Delicious and healthy way to enjoy a variety of fresh ingredients in one satisfying meal
        </p>
        <Link to= "/categories">
        <button type="button"> See recipes</button>
        </Link>
        
        </>
    )
}   