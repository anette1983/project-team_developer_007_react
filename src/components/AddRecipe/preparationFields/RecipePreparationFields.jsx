import css from "./RecipePreparationFields.module.css";

export const RecipePreparationFields = () => {

     return (
    <>
      <h3 className={css.subtitle}>Recipe Preparation</h3>
        <textarea
        className={css.recipeText}
        name="recipe"
        id="recipe"
        placeholder="Enter recipe"
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={text}
        />
    </>
  );
}