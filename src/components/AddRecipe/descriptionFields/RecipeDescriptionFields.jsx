import css from './RecipeDescriptionFields.module.css';
import { MdKeyboardArrowDown } from 'react-icons/md';
import addImg from '../../../images/addrecipe/add_photo_icon_x2.png'

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectCategories } from '../../../redux/categories/selectors';
import { fetchCategories } from '../../../redux/categories/operations';

const makeTimeArr = () => {
  const arr = [];
  for (let i = 5; i <= 120; i += 5) {
    arr.push(i);
  }
  return arr;
};
const cookingTime = makeTimeArr();

export const RecipeDescriptionFields = ({
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
}) => {
  const dispatch = useDispatch();
  const categoriesList = useSelector(selectCategories);
  console.log(categoriesList);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const [imgs, setImgs] = useState('');
  const [timeSelectIsActive, setTimeSelectIsActive] = useState(false);
  const [categorySelectIsActive, setCategorySelectIsActive] = useState(false);

  const onFileInputChange = e => {
    const uploadImg = e.target.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', e => {
      const buffer = e.target.result;
      const imgFile = new File([buffer], { type: uploadImg.type });
      const url = URL.createObjectURL(imgFile);
      setImgs(url);
    });
    reader.readAsArrayBuffer(uploadImg);

    onInputImgUpload(e);
  };

  const toggleCategory = () => {
    setCategorySelectIsActive(!categorySelectIsActive);
  };

  const setCategory = value => {
    onCategoryChange(value);
    setCategorySelectIsActive(false);
  };

  const toggleCookingTime = () => {
    setTimeSelectIsActive(!timeSelectIsActive);
  };

  const setCookingTime = value => {
    onTimeChange(value);
    setTimeSelectIsActive(false);
  };
  console.log(imgs);
  return (
    <div className={css.descriptionFieldWrapper}>
      <div className={css.imgWrapper} onChange={e => onFileInputChange(e)}>
        <label htmlFor="dishImg">
          <img className={css.mockImg} src={`${addImg}`} alt="addphoto" />
        </label>
        <input
          className={css.imgInput}
          type="file"
          accept=".jpg, .jpeg, .png"
          id="dishImg"
        />
        {imgs && <img className={css.recipeImg} src={imgs} alt="recipeImage" />}
        {errors.imgs && <p className={css.errorMsg}>{errors.imgs}</p>}
      </div>

      <div className={css.inputsWrapper}>
        <div className={css.inputBox}>
          <input
            className={css.inputRaw}
            type="text"
            id="title"
            name="title"
            placeholder="Enter item title"
            onChange={e => onTitleChange(e.target.value)}
            value={title}
          />
          {errors.title && <p className={css.errorMsg}>{errors.title}</p>}
        </div>
        <div className={css.inputBox}>
          <input
            className={css.inputRaw}
            type="text"
            id="about"
            name="about"
            placeholder="Enter about recipe"
            onChange={e => onDescriptionChange(e.target.value)}
            value={description}
          />
          {errors.description && (
            <p className={css.errorMsg}>{errors.description}</p>
          )}
        </div>
        <div className={css.selectBox} onClick={toggleCategory}>
          <div className={css.selectLabel}>Category</div>
          <div className={css.selectVariantsBox}>
            <span className={css.selectVariants}>{category}</span>
            <MdKeyboardArrowDown className={css.arrow} size="18" />
          </div>
          {categorySelectIsActive && (
            <ul className={css.selectList}>
              {categoriesList.map((item, index) => (
                <li
                  className={css.selectItem}
                  key={item._id}
                  onClick={() => setCategory(item.name)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={css.selectBox} onClick={toggleCookingTime}>
          <div className={css.selectLabel}>Cooking time</div>
          <div className={css.selectVariantsBox}>
            <span className={css.selectVariants}>{time}</span>
            <MdKeyboardArrowDown className={css.arrow} size="18" />
          </div>
          {timeSelectIsActive && (
            <ul className={css.selectList}>
              {cookingTime.map(item => (
                <li
                  className={css.selectItem}
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
};
