import css from "./NotFoundPage.module.css"

const NotFoundPage = () => {
  return (
    <div className={css.Error__section}>        
      <div className={css.Error__txt_wrapper}>
        <p className={css.Error__main_txt}>We are sorry,</p>
        <p className={css.Error__descr_txt}>but the page you were looking for can’t be found..</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
