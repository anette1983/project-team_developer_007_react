import {Navigation} from "../Navigation/Navigation";
import css from "./Footer.module.css";

export const Footer =()=> {
    return (
        <div className={css.footer}>
         <div className={css.container}>
            <div className={css.footer_text}>
            <h3 className={css.title}>So Yummy</h3>
            <div className={css.wrapper}>
         <ul className={css.list}>
          <li className={css.item}>Database of recipes that can be replenished </li>
          <li className={css.item}>Flexible search for desired and unwanted ingredients</li>
          <li className={css.item}>Ability to add your own recipes with photos</li>
          <li className={css.item}>Convenient and easy to use</li>
        </ul>
            </div>
            </div>
           
        <Navigation/>
        </div>
        </div>
        
        
    )
}