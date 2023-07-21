import css from './NoRecipesPlug.module.css';

const NoRecipesPlug = ({
  text = 'but the page you were looking for can’t be found..',
}) => {
  return (
    <div className={css.wrapper}>
      <div className={css.bg_wrapper}></div>
      <div className={css.text_wrapper}>
        <h1 className={css.heading}>We are sorry,</h1>
        <p className={css.text}>{text}</p>
      </div>
    </div>
  );
};

export default NoRecipesPlug;
