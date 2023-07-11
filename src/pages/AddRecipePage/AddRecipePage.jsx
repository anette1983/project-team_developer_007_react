import css from './AddRecipePage';
import { AddRecipeForm } from '../../Components/AddRecipeForm/AddRecipeForm';
import { PopularRecipe } from '../../components/AddRecipe/PopularRecipe';
import { FollowUsBlock } from '../../components/AddRecipe/FollowUsBlock';
import { MainPageTitle } from '../../components/MainPageTitle/MainPageTitle';

const AddRecipePage = () => {
  return (
    <div className={css.wrapper}>
      <section className={css.pageContent}>
        {/* <MainTitleWrapper /> */}
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
