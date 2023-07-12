// import { useParams } from 'react-router-dom';
import CategoryDetails from 'components/CategoryDetails/CategoryDetails';

const CategoriesPage = () => {
  // const { categoryName } = useParams();
  return (
    <>
      <h1>CategoriesPage</h1>
      <CategoryDetails />
    </>
  );
};

export default CategoriesPage;
