import * as React from "react"
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.container}>
      <img src='./assets/logo.svg' className={styles.logo} />
      <div className={styles.rightSide}>
        <span className={styles.userName}>User Name</span>
        <div className={styles.userPoints}>
          <span>6000</span>
          <img src="./assets/icons/coin.svg" alt="LOGOCOIN" />
        </div>
      </div>
    </div>
  )
}

export default Header;
