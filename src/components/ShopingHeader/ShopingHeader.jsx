import css from "./ShopingHeader.module.css"

const ShopingHeader = () => {
    return (
        <div className={css.wrap}>
            <p className={css.text}>Product</p>
            <div className={css.textWrap}>
                <p className={css.text}>Number</p>
                <p className={css.text}>Remove</p>
            </div>
            

        </div>
    )
}

export default ShopingHeader