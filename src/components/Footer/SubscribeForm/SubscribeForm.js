import css from "./SubscribeForm.module.css";
import sprite from "../../../images/svg/sprite.svg"
import { useDispatch} from "react-redux";
import { useState } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { subscribe } from '../../../redux/auth/operations';

export const SubscribeForm = () => {
const dispatch = useDispatch();
const [email, setEmail] = useState('');
const [formValid, setFormValid] = useState(false);

const handleChange = e => {
  const value = e.target.value
   setEmail(value);
}

const handleSubmit = e => {
  e.preventDefault();
  
  dispatch(subscribe(e.currentTarget.elements.email.value))
  .then(r => {
    if (r.payload === true) {
      setEmail('')
      setFormValid(false)
      return Notify.success('Congratulations! You are subscribed!');
    } else
    if (r.payload.status === 409) {
      setEmail('')
      setFormValid(false)
      return Notify.info('You have already subscribed');
    } else
     if (r.payload.status === 400) {
      setEmail('')
      setFormValid(false)
      return Notify.info('Please enter valid email');
     
    }else 
    if (r.payload.status === 401) {
      setEmail('')
      setFormValid(false)
      return Notify.info('You are not authorized!');
    }
}
 )
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
      <label className={css.label}>
      <input
      className={`${css.input} ${handleSubmit ? `${css.input_succes}` : `${css.input_error}`}`}
      type="email"
      placeholder="Enter your email address"
      onChange={handleChange}
      name="email"
      value={email}
      />
     <svg className={css.icon} width="16" height="20">
            <use href={sprite + "#mail"}/>
          </svg>
        </label>
        <button disabled={!email && !formValid} 
        className={`${css.btn} ${!email && `${css.btn_disabled}`}`} 
        type="submit">
          Subscribe
        </button>
      </form>
    </div>
  );
};


