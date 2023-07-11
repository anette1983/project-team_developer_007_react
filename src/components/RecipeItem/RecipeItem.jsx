const RecipeItem = ({url, text}) => {
    return (
         <li>
            <img src={url} alt={ text} />
            <div>
                <p>{ text}
                </p>
            </div>
        </li>
    )
}

export default RecipeItem