import { RecipeDescriptionFields } from "./descriptionFields/RecipeDescriptionFields";
import { RecipeIngredientsFields } from "./ingredientFields/RecipeIngredientsFields";
import { RecipePreparationFields } from "./preparationFields/RecipePreparationFields";

import css from "./AddRecipeCompinents";

export const AddRecipeForm = () => {



    return (
        <div className={css.addSectionWrap}>
            <form className={css.addRecipeForm} onSubmit={handleSubmit}>
                <RecipeDescriptionFields
                    title={title}
                    description={description}
                    time={cookingTime}
                    category={category}
                    onInputImageSet={onInputImageSet}
                    onTitleChange={onTitleChange}
                    onDescriptionChange={onDescriptionChange}
                    onTimeChange={onTimeChange}
                    onCategoryChange={onCategoryChange}
                    errors={errors}
                />
                
                <RecipeIngredientsFields
                    ingredients={ingredients}
                    addIngredients={addIngredients}
                    removeIngredients={removeIngredients}
                    deleteIngredient={deleteIngredient}
                    updateIngredient={updateIngredient}
                    errors={errors}
                />

                <RecipePreparationFields
                    onPreparationTextChange={onPreparationTextChange}
                    preparation={preparation}
                    errors={errors}
                />
                <button className={css.addButton} type="submit">Add</button>
            </form>
        </div>
    );
}