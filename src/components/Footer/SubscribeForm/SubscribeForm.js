import css from "./SubscribeForm.module.css";
import sprite from "../../../images/svg/sprite.svg"

export const SubscribeForm = () => {
    return(
    <div className={css.container}>
      <div className={css.wrapper}>
       <h3 className={css.title}>Subscribe to our Newsletter</h3>
       <p className={css.text}>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</p>
      </div>
     <form className={css.form}>
      <label>
      <input
      className={css.input}
      type="email"
      autoComplete="off"
      autoFocus
      placeholder="Enter your email address"
     />
     <svg className={css.icon} width="16" height="20">
            <use href={sprite + "#mail"}/>
          </svg>
          </label>
     <button className={css.btn}type="submit">Subscribe</button>
     </form>
   </div>
    ) 
 }