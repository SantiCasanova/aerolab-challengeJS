import { aerolabApi } from "../../../api/aerolabApi"
import { setProducts } from "./productSlice"

export const getProducts = () => {
  return async (dispatch, getState) => {
    const { data } = await aerolabApi.get('/products')
    dispatch(setProducts({ products: data }))
  }
}