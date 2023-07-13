import css from "./ShopingItem.module.css"


const ShopingItem = () => {
     const {
    container,
    wrapper_img,
    wrapper_ingridient_title,
    ingridient_title,
    wrapper_ingridient_quantity,
    text_ingridient_quantity,
    input_checkbox,
  } = css;
    return (
        <div className={container}>
      <div className={wrapper_img}>{/* <img></img> */}</div>
      <div className={wrapper_ingridient_title}>
        <p className={ingridient_title}>Salmon</p>
      </div>
      <div className={wrapper_ingridient_quantity}>
        <p className={text_ingridient_quantity}>2 chopped</p>
      </div>
      <input className={input_checkbox} type="checkbox" />
    </div>
    )
}

export default ShopingItem