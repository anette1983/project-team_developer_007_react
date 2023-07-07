import { useParams } from 'react-router-dom';

const CategoriesPage = () => {
  const { categoryName } = useParams();
  return (
    <>
      <h1>CategoriesPage</h1>
      <h2>{categoryName}</h2>
    </>
  );
};

export default CategoriesPage;
