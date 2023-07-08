import css from "./SubscribeForm.module.css";

export const SubscribeForm = () => {
    return(
        <div className={css.container}>
            <div className={css.wrapper}>
            <h3>Subscribe to our Newsletter</h3>
           <p>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</p>
            </div>
        
     <form className={css.form}
    //  onSubmit={" "}
     >
     <input
     className={css.input}
     type="text"
     autoComplete="off"
     autoFocus
     // value={""}
     placeholder="Enter your email address"
     />
     <button className={css.btn}type="submit">Subscribe</button>
 </form>
 </div>
    ) 
 }