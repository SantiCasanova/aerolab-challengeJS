import React from 'react'
import styles from './Item.module.scss'

function Item({ imageURL, name, cost, category }) {
  return (
    <div className={styles.container}>
      <button className={styles.container__button}>
        <img src="./assets/icons/coin.svg" alt="LOGOCOIN" className={styles.container__logo} />
        <span className={styles.container__cost}>{cost}</span>
      </button>
      <img src={imageURL} alt="productImage" className={styles.container__image} />
      <span className={styles.container__category}>{category}</span>
      <span className={styles.container__name}>{name}</span>
    </div>
  )
}

export default Item;