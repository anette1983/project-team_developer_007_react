
import css from "./SubscribeForm.module.css";
import sprite from "../../../images/svg/sprite.svg"
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { subscribe } from '../../../redux/auth/operations';
import { selectAuthError } from '../../../redux/auth/selectors';

export const SubscribeForm = () => {
const dispatch = useDispatch();
const [email, setEmail] = useState('');

const errorMessage = useSelector(selectAuthError);

const handleChange = e => {
  const value = e.currentTarget.value;
 
   setEmail(value);
}

const handleSubmit = e => {
  e.preventDefault();
 
  const form = e.currentTarget;
  if(email==="") {
    return Notify.failure('Please enter email!');
   }
  
  dispatch(subscribe(email))

  if(errorMessage==="") {
    Notify.success('Congratulations! You are subscribed!');
    setEmail('')
    form.reset();
  } 
  

}

    return(

    <div className={css.container}>
      <div className={css.wrapper}>
        <h3 className={css.title}>Subscribe to our Newsletter</h3>
        <p className={css.text}>
          Subscribe up to our newsletter. Be in touch with latest news and
          special offers, etc.
        </p>
      </div>

     <form className={css.form} onSubmit={handleSubmit}>
      <label>
      <input
      className={`${css.input} ${!email ? `${css.input_succes}` : `${css.input_error}`}`}
      type="email"
       placeholder="Enter your email address"
      onChange={handleChange}
     />
     <svg className={css.icon} width="16" height="20">
            <use href={sprite + "#mail"}/>
          </svg>
        </label>
        <button className={css.btn} type="submit">
          Subscribe
        </button>
      </form>
    </div>
  );
};

// import css from "./SubscribeForm.module.css";
// import sprite from "../../../images/svg/sprite.svg"
// // import { useDispatch } from "react-redux";
// import { useState } from "react";
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// // import { subscribe } from '../../../redux/auth/operations';

// export const SubscribeForm = () => {
// // const dispatch = useDispatch();
// const [email, setEmail] = useState('');

// const handleChange = e => {
//   const value = e.currentTarget;
//   setEmail(value);
// }

// const handleSubmit = e => {
//   e.preventDefault();
//   // dispatch(subscribe(email))
//   const form = e.currentTarget;

//   if(email==="") {
//   return Notify.failure('Please enter email!');
//   }
//   Notify.success('Congratulations! You are subscribed!');
//   setEmail('')
//   form.reset();
// }

//     return(
//     <div className={css.container}>
//       <div className={css.wrapper}>
//        <h3 className={css.title}>Subscribe to our Newsletter</h3>
//        <p className={css.text}>Subscribe up to our newsletter. Be in touch with latest news and special offers, etc.</p>
//       </div>
//      <form className={css.form} onSubmit={handleSubmit}>
//       <label>
//       <input
//       className={`${css.input} ${email ? `${css.input_succes}` : `${css.input_error}`}`}
//       type="email"
//        placeholder="Enter your email address"
//       onChange={handleChange}
//      />
//      <svg className={css.icon} width="16" height="20">
//             <use href={sprite + "#mail"}/>
//           </svg>
//           </label>
//      <button className={css.btn}type="submit">Subscribe</button>
//      </form>
//    </div>
//     )
//  }
