import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import css from '../../pages/pages.module.css';
import myRecipesCss from '../MyRecipesPage/MyRecipesPage.module.css';
import noRecipesCss from '../MyRecipesPage/NoRecipesPlug.module.css';
import NotFoundCss from './NotFoundPage.module.css';

const NotFoundPage = ({
  text = 'but the page you were looking for can’t be found..',
}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className={css.section}>
        <SectionTitle />
        <div className={`${css.container} ${myRecipesCss.wrapper} `}>
          <div className={NotFoundCss.wrapper}>
            <div className={NotFoundCss.bg_wrapper}></div>
            <div className={noRecipesCss.text_wrapper}>
              <h1 className={noRecipesCss.heading}>We are sorry,</h1>
              <p className={noRecipesCss.text}>{text}</p>
            </div>
          </div>
        </div>
        <div
          className={`${myRecipesCss.container} ${myRecipesCss.pagin_container}`}
        ></div>
      </div>
    </>
  );
};

export default NotFoundPage;
