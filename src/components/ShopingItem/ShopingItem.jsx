import css from "./ShopingItem.module.css"



const ShopingItem = ({img, title, quantity, handleDelete}) => {
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
  } = css;
    return (
        <li className={container}>
            <div className={wrapper_img_text}>
                <div className={wrapper_img}>
                <img className={ingredient_img} src={require('../../pictures/SearchPage/image4.png')} alt="trout" />      
            </div>      
            <div className={wrapper_ingridient_title}>         
                <p className={ingridient_title}>{title}</p>     
            </div>   
            </div>             
            <div className={wrapper_ingridient_quantity}>          
                <p className={text_ingridient_quantity}>{quantity}</p>      
            </div>   
            <svg className={icon} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.9375 3.0625L3.0625 10.9375" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.9375 10.9375L3.0625 3.0625" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </li>
    )
}

export default ShopingItem