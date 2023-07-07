import css from './mainPage.module.css'
export const MainPageTitle = ({ text }) => {
    return (
        <>
            <h1 className={css.title}>{text}</h1>
            
                <svg className={css.firstGreen} width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="2.84525" width="8" height="8" rx="3" transform="rotate(-25 0 2.84525)" fill="#8BAA36" />
                </svg>
                <svg className={css.black}  width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="2" width="6" height="6" rx="3" transform="rotate(-25 0 2)" fill="#22252A" />
                </svg>
                <svg className={css.lastGreen}  width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect y="2.84525" width="8" height="8" rx="3" transform="rotate(-25 0 2.84525)" fill="#8BAA36" />
                </svg>
          
            
        </>
    )
    
}