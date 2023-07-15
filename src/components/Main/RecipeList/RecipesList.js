import { Link } from "react-router-dom"
import css from "./RecipeList.module.css";
// import { useState } from "react";

export function RecipeList({data}) {
  // const limit = 1;
// const [categories, setCategories ]= useState([])

// setCategories(data);
// console.log(data);
  return (
    <>
    {data && 
    <ul className={css.list}>
     
    {data.map((recipe)=> {
return (
  <li key={recipe._id} className={css.list_item}>
      <Link to={`/reciepe/:${recipe._id}`}>
      <h3 className={css.list_title}>{recipe.title}</h3>
      <img className={css.img} src={recipe.thumb} alt="recipe"/>
      </Link>
      
  </li>
        
)
          })}
  </ul>
    } 
    
    </>);
}
//  <ul>
// <li className={css.item}>
//  <section className={css.section}>
//    <h2 className={css.title}>{data.category}</h2>
// <ul> 
//   <li key={recipe._id} >
//       <Link to={`/reciepe/:{recipe._id}`}>
//       <h3>{recipe.title}</h3>
//       <img src={recipe.thumb
// } alt="recipe"/>
//       </Link>
      
//   </li>
        // </ul>
// )
//          <Link to="/categories/:{recipe.category.toLowerCase()}">
//          <button className={css.btn} type="button">See all</button>
//          </Link>
         
//          </section>