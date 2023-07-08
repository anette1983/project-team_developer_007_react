import { Link } from "react-router-dom";
import css from "./Nav.module.css"

export const Nav = () => {
    return(
<div className={css.container}>
  <ul className={css.list}>
    <li className={css.item}><Link to ="/search" className={css.item_link}>Ingredients</Link></li>
    <li className={css.item}><Link to ="/add" className={css.item_link}>Add recipes</Link></li>
    <li className={css.item}><Link to ="/my" className={css.item_link}>My recipes</Link></li>
    <li className={css.item}><Link to ="/favorite" className={css.item_link}>Favorite</Link></li>
    <li className={css.item}><Link to ="/shopping-list" className={css.item_link}>Shopping list</Link></li>
  </ul>
  
</div>

    )
}
