import { aerolabApi } from "../../../api/aerolabApi"
import { setUser, addPoints } from "./userSlice"

export const getUser = () => {
  return async (dispatch, getState) => {
    const { data } = await aerolabApi.get('/user/me')
    dispatch(setUser({ user: data }))
  }
}

export const testing = () => {
  return async (dispatch, getState) => {
    aerolabApi.post('/user/points', {
      "amount": 1000
    }).then(dispatch(addPoints(1000)))
  }
}