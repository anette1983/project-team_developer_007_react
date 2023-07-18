import css from './ShopingItem.module.css';


const ShopingItem = ({ title, img, quantity, deleteItem, id }) => {
  const {
    container,
    wrapper_img,
    wrapper_ingridient_title,
    ingridient_title,
    wrapper_ingridient_quantity,
    text_ingridient_quantity,
    wrapper_img_text,
    icon,
    ingredient_img,
    delete_wraper,
  } = css;
  return (
    <li className={container} onClick={deleteItem} id={id}>
      <div className={wrapper_img_text}>
        <div className={wrapper_img} >
          <img
            className={ingredient_img}
            src={img}
            alt={title}
          />
        </div>
        <div className={wrapper_ingridient_title}>
          <p className={ingridient_title}>{title}</p>
        </div>
      </div>
      <div className={wrapper_ingridient_quantity}>
        <p className={text_ingridient_quantity}>{quantity}</p>
      </div>
      <div className={ delete_wraper} id='delete'>
        <svg
          
        className={icon}
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
          <path
            id='delete'
          d="M10.9375 3.0625L3.0625 10.9375"
          stroke="#333333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.9375 10.9375L3.0625 3.0625"
          stroke="#333333"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        </svg>
        </div>
    </li>
  );
};

export default ShopingItem;
