const RecipeItem = ({url, text}) => {
    return (
         <li>
             <img src={ url} alt="burger" />
            <div>
                <p>{ text}
                </p>
            </div>
        </li>
    )
}

export default RecipeItem