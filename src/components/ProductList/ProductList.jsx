import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../../store/slices/product/thunks"
import Item from "../Item/Item"
import styles from "./ProductList.module.scss"

const ProductList = () => {
  const dispatch = useDispatch();
  const { products = [] } = useSelector(state => state.products)

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return (
    <div className={styles.container}>
      {
        products.map(product => (
          <Item
            key={product._id}
            imageURL={product.img.url}
            name={product.name}
            cost={product.cost}
            category={product.category}
          />
        ))
      }
    </div>
  )
}

export default ProductList;
