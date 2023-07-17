import { MainPageTitle } from "components/MainPageTitle/MainPageTitle";
import css from "../pages.module.css"
import searchCss from "./shopingContainer.module.css"
import ShopingHeader from "components/ShopingHeader/ShopingHeader";
import ShopingList from "components/ShopingList/ShopingList";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ShoppingListPage = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <div className={css.section}>
    <div className={`${css.container} ${searchCss.container}`}>
                <MainPageTitle text='Shopping list' />
      </div>
       <div className={`${css.container} ${searchCss.container}`}>
                <ShopingHeader/>
      </div>
      <div className={`${css.container} ${searchCss.sahopingConteiner}`}>
                <ShopingList/>
      </div>
      </div>
    );
};

export default ShoppingListPage;
