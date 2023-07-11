import * as yup from "yup";

export const recipeFormSchema = yup.object().shape({
    img: yup.string().required("Image is required"),
    title: yup.string().typeError("Should be a string").required("Title is required"),
    description: yup
        .string()
        .typeError("Should be a string")
        .required("Description is required"),
        cookingTime: yup.string(),
    category: yup.string(),
    ingredients: yup
        .array()
        .of(
        yup.object({
            name: yup.string().required("Ingredient name is required"),
            ingredientsQuantity: yup.string().required("Ingredient quantity is required"),
            ingredientsQuantityMeasure: yup.string(),
            id: yup.string(),
        })
        )
        .required("Ingredients is required"),
        preparation: yup.string().required("Preparation text is required"),
});