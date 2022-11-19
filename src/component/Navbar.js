import styles from './Navbar.module.css'

export default function nav(){
    return(
        <nav className={styles.nav}>

            <u1>
                 <li className={styles.a}>
                    <a href="/"> Home </a>
                </li>
                <li className={styles.a}>
                    <a href="/login"> Login  </a>
                </li>
                <li className={styles.a}>
                    <a href="/display"> Gallery </a>
                </li>
                <li className={styles.a}>
                    <a href="/mybids"> My Bids </a>
                </li>
            </u1>
        </nav>
    )
}