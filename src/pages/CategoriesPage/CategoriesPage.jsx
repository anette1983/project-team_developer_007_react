// import { useParams } from 'react-router-dom';

import CategoryDetails from 'components/CategoryDetails/CategoryDetails';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import css from './CategoriesPage.module.css';

const CategoriesPage = () => {
  return (
    <div className={css.section_wrapp}>
      <section className={css.container}>
        <MainPageTitle text="Categories" />
      </section>
      <section className={css.tablist}>
        <CategoryDetails />
      </section>
    </div>
  );
};

export default CategoriesPage;
