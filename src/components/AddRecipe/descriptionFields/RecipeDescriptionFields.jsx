import css from "./RecipeDescriptionFields.module.css";
import { MdOutlineKeyboard } from "react-icons/md";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectCategories } from "../../../redux/categories/selectors";
import { fetchCategories } from "../../../redux/categories/operations";

const makeTimeArr = () => {
    const arr = [];
    for (let i = 5; i <= 120; i += 5) {
        arr.push(i);
    }
    return arr;
};
const cookingTime = makeTimeArr();


export const RecipeDescriptionFields = (
    title,
    description,
    time,
    category,
    onInputImgUpload,
    onTitleChange,
    onDescriptionChange,
    onTimeChange,
    onCategoryChange,
    errors,
) => {

    const dispatch = useDispatch();
    const categoriesList = useSelector(selectCategories);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const [img, setImg] = useState("")
    const [timeSelectIsActive, setTimeSelectIsActive] = useState(false);
    const [categorySelectIsActive, setCategorySelectIsActive] = useState(false);

    const onFileInputChange = (e) => {
        const uploadImg = e.target.files[0];
        const reader = new FileReader();
        reader.addEventListener("load", (e) => {
            const buffer = e.target.result;
            const imgFile = new File([buffer], { type: uploadImg.type });
            const url = URL.createObjectURL(imgFile);
            setImg(url);
        });
        reader.readAsArrayBuffer(uploadImg);

        onInputImgUpload(e);
    };

        const toggleCategory = () => {
        setCategorySelectIsActive(!categorySelectIsActive);
    };

        const setCategory = (value) => {
        onCategoryChange(value);
        setCategorySelectIsActive(false);
    };

    const toggleCookingTime = () => {
        setTimeSelectIsActive(!timeSelectIsActive);
    };

    const setCookingTime = (value) => {
        onTimeChange(value);
        setTimeSelectIsActive(false);
    };


     return (
        <div className={css.descriptionFieldWrapper}>
            <div className={css.imgWrapper} onChange={(e)=> onFileInputChange(e)}>
                <label htmlFor="dishImg">
                    <img className={css.mockImg} src="#" alt="addphoto" srcSet=""/>
                </label>
                 <input className={css.imgInput} type="file" accept=".jpg, .jpeg, .png" id="dishImg" />
                {img && (
                     <img className={css.recipeImg} src={img} alt="recipeImage"/>
                )}
                 {errors.img && <p className={css.errorMsg}>{errors.img}</p>}
            </div>
           
            <div className={css.inputsWrapper}>
                <div className={css.inputBox}>
                    <input className={css.inputRaw}
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter item title"
                        onChange={(e) => onTitleChange(e.target.value)}
                        value={title}
                    />
                    {errors.title && <p className={css.errorMsg}>{errors.title}</p>}
                </div>
                <div className={css.inputBox}>
                    <input className={css.inputRaw}
                        type="text"
                        id="about"
                        name="about"
                        placeholder="Enter about recipe"
                        onChange={(e) => onDescriptionChange(e.target.value)}
                        value={description}
                    />
                    {errors.description && <p className={css.errorMsg}>{errors.description}</p>}
                </div>
                <div className={css.selectBox} onClick={toggleCategory}>
                    <div className={css.selectLabel}>Category</div>
                    <div className={css.selectVariantsBox}>
                        <span className={css.selectVariants}>{category}</span>
                        <MdOutlineKeyboard className={css.arrow} size="18" />
                    </div>
                    {categorySelectIsActive && (
                        <ul className={css.selectList}>
                            {categoriesList.map((item, index) => (
                                <li className={css.selectItem}
                                    key={index}
                                    onClick={() => setCategory(item)}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className={css.selectBox} onClick={toggleCookingTime}>
                    <div className={css.selectLabel}>Cooking time</div>
                    <div className={css.selectVariantsBox}>
                        <span className={css.selectVariants}>{time}</span>
                        <MdOutlineKeyboard className={css.arrow} size="18" />
                    </div>
                    {timeSelectIsActive && (
                        <ul className={css.selectList}>
                            {cookingTime.map((item) => (
                                <li className={css.selectItem}
                                    key={item}
                                    onClick={() => setCookingTime(item)}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}