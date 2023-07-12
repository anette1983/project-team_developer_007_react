import css from "./recipeItem.module.css"

const RecipeItem = ({ url, text }) => {
    return (
        <li className={ css.item}>
            <img src={url} alt={ text} />
            <div className={ css.textWrap}>
                <p>{ text}
                </p>
            </div>
        </li>
    )
}

export default RecipeItem