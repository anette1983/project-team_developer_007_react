import css from "./RecipeDescriptionFields.module.css";

export const RecipeDescriptionFields = () => {


     return (
        <div className={css.descriptionWrapper}>
            <div className={css.imgWrapper} onChange={(e)=> onFileInputChange(e)}>
                <label htmlFor="dishImg">
                    <img src="#" alt="addphoto" srcSet=""/>
                </label>
                <input type="file" accept=".jpg, .jpeg, .png" id="dishImg" />
                {/* if (image) else error */}
            </div>
           
            <div className={css.inputsWrapper}>
                <div className={inputBox}>
                    <input className={inputRaw}
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter item title"
                        onChange={(e) => onTitleChange(e.target.value)}
                        value={title}
                    />
                </div>
                <div className={inputBox}>
                    <input className={inputRaw}
                        type="text"
                        id="about"
                        name="about"
                        placeholder="Enter about recipe"
                        onChange={(e) => onDescriptionChange(e.target.value)}
                        value={description}
                    />
                </div>
{/* add select inputs */}
            </div>
        </div>
    );
}