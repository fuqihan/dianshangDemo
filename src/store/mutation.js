/**
 * Created by fuqihan on 2017/4/8.
 */
import {
  NAVIGATION_INFO_TRUE,
  NAVIGATION_INFO_FALSE
} from './mutation-types'
export default {
  [NAVIGATION_INFO_TRUE] (state) {
    state.navigationInfo = true
  },
  [NAVIGATION_INFO_FALSE] (state) {
    state.navigationInfo = false
  }
}
