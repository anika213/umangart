
import {user_cookie} from './Landing'
import { CheckCookie } from './Landing'
import styles from './Navbar.module.css'
export default function navbar(){
   
    return(
        <nav className={styles.nav}>
            <u1>
                <li>
                    <a href="/"> Home </a>
                </li>
                <li classname = {styles.a}>
                    <a href="/display"> Gallery </a>
                </li>
                <li classname = {styles.a}>
                    <a href="/mybids"> My Bids </a>
                </li>
                <li classname = {styles.a}>
                    <a href="/highestbids"> Highest Bids </a>
                </li>
                
                <li class = {styles.username}>
                    <a>{CheckCookie("name")}</a>
                </li>
                </u1>
        </nav >
    )
}