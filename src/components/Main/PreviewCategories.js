import { useEffect, useState } from "react"
import { RecipeList } from "./RecipesList";
import { Link } from "react-router-dom";

export const PreviewCategories =()=>{
const [reciepes, setReciepes]= useState([]);

useEffect(()=>{
// axios.
// .then(response => 
// setReciepes([...response.results])
// );
}, [])

    return (
        <>
        <section>
            <h2>Breakfast</h2>
            <RecipeList data={reciepes.breakfast}/>
            <Link to="/categories/:breakfast">
            <button type="button">See all</button>
            </Link>
            
            </section>
        <section>
            <h2>Miscellaneous</h2>
            <RecipeList data={reciepes.miscellaneous}/>
            <Link to="/categories/:miscellaneous">
            <button type="button">See all</button>
            </Link>
            
            </section>
        <section>
            <h2>Chicken</h2>
            <RecipeList data={reciepes.chicken}/>
            <Link to="/categories/:chicken">
            <button type="button">See all</button>
            </Link>
            </section>
        <section>
            <h2>Deserts</h2>
            <RecipeList data={reciepes.deserts}/>
            <Link to="/categories/:deserts">
            <button type="button">See all</button>
            </Link>
            </section>
            <Link to="/categories">Other categories</Link>
        </>
    )
}