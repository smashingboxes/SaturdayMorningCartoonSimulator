import * as types from './constants/ActionTypes'

export const userLogin = id => ({ type: types.USER_LOGIN, id })
export const userLogout = () => ({ type: types.USER_LOGIN })
