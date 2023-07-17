import { Link } from "react-router-dom";
import css from "./ChooseYourBreakfast.module.css"
import sprite from './Icon.svg';

export const ChooseYourBreakfast = () => {
    return (
        <div className={css.container}>
        <p className={css.text}>
            <span className={css.text_active}> Delicious and healthy &nbsp;</span>
        way to enjoy a variety of fresh ingredients in one satisfying meal
        </p>
        <Link to= "/categories">
        <button type="button" className={css.btn}> 
       
         
          
        See recipes
        <svg className={css.img} width="12" height="9">
            <use href={sprite + "#arrow-right"}/>
          </svg></button>
        </Link>
        
        </div>
    )
}   