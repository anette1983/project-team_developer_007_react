import { useParams } from "react-router-dom";

const RecipePage = () => {
  const { recipeId } = useParams();
  return (
    <>
      <h1>RecipePage</h1>
      <h2>{recipeId}</h2>
    </>
  );
};

export default RecipePage;
