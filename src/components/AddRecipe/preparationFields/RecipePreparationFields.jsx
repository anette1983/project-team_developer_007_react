import css from "./RecipePreparationFields.module.css";
import { useState } from "react";

export const RecipePreparationFields = ({
    onPreparationTextChange,
    preparation,
    errors,
}) => {
    const [prepText, setPrepText] = useState("");

    const handleKeyDown = (e) => {
        let prepProcess = prepText;
        if (e.key === "Enter") {
        prepProcess = prepText.split("\n").join(", ");
        }
        onPreparationTextChange(prepProcess);
    };

    const handleChange = (e) => {
        setPrepText(e.target.value);
    };

     return (
    <div className={css.preparationFieldWrapper}>
        <h3 className={css.subtitle}>Recipe Preparation</h3>
        <textarea
        className={css.recipeTextarea}
        name="instructions"
        id="instructions"
        placeholder="Enter recipe"
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={prepText}
             />
        {errors.preparation && <p className={css.errorText}>{errors.preparation}</p>}
    </div>
  );
}