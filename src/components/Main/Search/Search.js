import { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './Search.module.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const Search = () => {
  const [value, setValue] = useState('');

  const handleChange = e => setValue(e.currentTarget.value.toLowerCase());

  const handleLinkClick = e => {
    if (!value) {
      e.preventDefault();
      return Notify.failure('Enter ingredient!');
    }
  };

  return (
    <form className={css.form}>
      <input
        className={css.input}
        type="text"
        autoComplete="off"
        autoFocus
        value={value}
        onChange={handleChange}
        placeholder="Enter the text"
      />
      <Link to={`/search/?query=${value}`} onClick={handleLinkClick}>
        <button className={css.btn} type="submit">
          Search
        </button>
      </Link>
    </form>
  );
};
