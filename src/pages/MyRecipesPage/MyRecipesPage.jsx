import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import css from '../pages.module.css';
import myRecipesCss from './MyRecipesPage.module.css';
import MyRecipesList from 'components/MyRecipesList/MyRecipesList';

const MyRecipesPage = () => {
  const text = 'My recipes';
  return (
    <>
      <div className={css.section}>
        <div className={`${css.container} ${myRecipesCss.container}`}>
          <MainPageTitle text={text} />
        </div>
        <div className={`${css.container} ${myRecipesCss.wrapper}`}>
          <MyRecipesList />
        </div>
      </div>
    </>
  );
};

export default MyRecipesPage;
