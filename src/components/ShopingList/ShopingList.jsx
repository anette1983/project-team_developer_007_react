import ShopingItem from 'components/ShopingItem/ShopingItem'
import css from './ShipongList.module.css'
import img from '../../picture/image4.png'

const ShopingList = () => {
    return (
        <div className={css.wrap}>
            <ul className={ css.list}>
                <ShopingItem
                    title={'Salmon'}
                    quantity={5} />
                 <ShopingItem
                    title={'Salmon'}
                    quantity={ 5} />
            </ul>
           
            

        </div>
    )
}

export default ShopingList