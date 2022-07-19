import React, { useEffect } from "react"
import styles from './Header.module.scss'
import { getUser, testing } from "../../store/slices/user/thunks"
import { useDispatch, useSelector } from "react-redux"

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user)

  useEffect(() => {
    dispatch(getUser())
  }, [])

  return (
    <div className={styles.container}>
      <img src='./assets/logo.svg' className={styles.logo} />
      <div className={styles.rightSide}>
        <span className={styles.userName}>{user.name}</span>
        <div onClick={() => dispatch(testing())} className={styles.userPoints}>
          <span>{user.points}</span>
          <img src="./assets/icons/coin.svg" alt="LOGOCOIN" />
        </div>
      </div>
    </div>
  )
}

export default Header;
