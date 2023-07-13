import { MainPageTitle } from "components/MainPageTitle/MainPageTitle";
import css from "../pages.module.css"
import searchCss from "./shopingContainer.module.css"
import ShopingHeader from "components/ShopingHeader/ShopingHeader";
import ShopingList from "components/ShopingList/ShopingList";

const ShoppingListPage = () => {
  return (
    <div className={css.section}>
    <div className={`${css.container} ${searchCss.container}`}>
                <MainPageTitle text='Shopping list' />
      </div>
       <div className={`${css.container} ${searchCss.container}`}>
                <ShopingHeader/>
      </div>
      <div className={`${css.container} ${searchCss.container}`}>
                <ShopingList/>
      </div>
      </div>
    );
};

export default ShoppingListPage;
