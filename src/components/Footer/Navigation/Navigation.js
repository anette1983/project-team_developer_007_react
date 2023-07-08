import { FollowUs } from "../FollowUs/FollowUs"
import { Nav } from "../Nav/Nav"
import { SubscribeForm } from "../SubscribeForm/SubscribeForm"
import css from "./Navigation.module.css";

export const Navigation =()=>{
return (
    <div className={css.container}>
    <Nav/>
    <SubscribeForm/>
    <FollowUs/>
   
    </div>
   
)
}