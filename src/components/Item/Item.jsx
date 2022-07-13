import React from 'react'
import styles from './Item.module.scss'

function Item({ imageURL, name, cost, category }) {
  return (
    <div className={styles.container}>
      <span className={styles.container__cost}>{cost}</span>
      <img src={imageURL} alt="productImage" className={styles.container__image} />
      <span className={styles.container__category}>{category}</span>
      <span className={styles.container__name}>{name}</span>
    </div>
  )
}

export default Item