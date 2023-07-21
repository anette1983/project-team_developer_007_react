import CategoryDetails from 'components/CategoryDetails/CategoryDetails';
import css from './CategoriesPage.module.css';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';

const CategoriesPage = () => {
  return (
    <div className={css.section_wrapp}>
      <SectionTitle text={'Categories'} />
      <section className={css.tablist}>
        <CategoryDetails />
      </section>
    </div>
  );
};

export default CategoriesPage;
