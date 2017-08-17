/**
 * Created by fuqihan on 2017/4/8.
 */
import {
  NAVIGATION_INFO_TRUE,
  NAVIGATION_INFO_FALSE,
  CART_INFO,
  CART_INFO_FALSE,
  CART_INFO_TRUE,
  SEARCH_CM,
  LOGIN_INFO_TRUE,
  LOGIN_INFO_FALSE,
  CART_PUSH
} from './mutation-types'
export default {
  [NAVIGATION_INFO_TRUE] (state) {
    state.navigationInfo = true
  },
  [NAVIGATION_INFO_FALSE] (state) {
    state.navigationInfo = false
  },
  [CART_INFO] (state) {
    state.total = !state.total
  },
  [CART_INFO_FALSE] (state) {
    state.total = false
  },
  [CART_INFO_TRUE] (state) {
    state.total = true
  },
  [SEARCH_CM] (state,data) {
      state.search = data
  },
  [LOGIN_INFO_TRUE] (state) {
    state.loginInfo = true
  },
  [LOGIN_INFO_FALSE] (state) {
    state.loginInfo = false
  },
  [CART_PUSH] (state,data) {
    state.cart.push(data)
  }
}
