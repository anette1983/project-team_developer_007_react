import css from "./SubscribeForm.module.css";

export const SubscribeForm = () => {
    return(
    <div className={css.container}>
      <div className={css.wrapper}>
       <h3 className={css.title}>Subscribe to our Newsletter</h3>
       <p className={css.text}>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</p>
      </div>
     <form className={css.form}>
      <input
      className={css.input}
      type="email"
      autoComplete="off"
      autoFocus
      placeholder="Enter your email address"
     />
     <button className={css.btn}type="submit">Subscribe</button>
     </form>
   </div>
    ) 
 }