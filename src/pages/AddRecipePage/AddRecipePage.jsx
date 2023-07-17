import { AddRecipeForm } from '../../components/AddRecipe/AddRecipeForm';
import { FollowUsBlock } from '../../components/AddRecipe/FollowUsBlock';
import { MainPageTitle } from '../../components/MainPageTitle/MainPageTitle';
import PopularRecipe from '../../components/AddRecipe/PopularRecipe';
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';

import css from './AddRecipePage.module.css';

const AddRecipePage = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className={css.wrapper}>
      <section className={css.pageContent}>
        <MainPageTitle text="Add recipe" />
        <div className={css.formContainer}>
          <AddRecipeForm />
          <div className={css.sidebar}>
            <FollowUsBlock />
            <PopularRecipe />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddRecipePage;
