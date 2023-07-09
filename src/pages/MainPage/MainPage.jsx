import {Main} from "../../components/Main/Main"
import css from "./MainPage.module.css"

const MainPage = () => {
  return(
<div className={css.container}>
  <h1 className={css.title}>
     <span className={css.title_start}>So</span>Yummy</h1>
  <p className={css.text}>
  "What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to save them for the future.
  </p>
<Main/>
 </div>
  )
  
};

export default MainPage;
