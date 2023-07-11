import MyRecipesItem from 'components/MyRecipesItem/MyRecipesItem';

const MyRecipesList = () => {
  const myRecipes = [1, 2, 3, 4];
  return (
    <>
      <ul>
        {myRecipes.map(recipe => {
          return <MyRecipesItem key={recipe} recipe={recipe} />;
        })}
      </ul>
    </>
  );
};

export default MyRecipesList;
