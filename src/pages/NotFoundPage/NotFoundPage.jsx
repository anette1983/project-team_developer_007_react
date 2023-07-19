import { useLocation } from "react-router-dom";
import css from "./NotFoundPage.module.css"
import { useEffect } from "react";

const NotFoundPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
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
