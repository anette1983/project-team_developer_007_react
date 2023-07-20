import { MainPageTitle } from "components/MainPageTitle/MainPageTitle"
import css from "./SectionTitle.module.css"

export const SectionTitle = ({ text }) => {
    return (
        <div className={css.container}>
            <MainPageTitle text={text} />
        </div>
    )
}