/**
 * Created by fuqihan on 2017/3/29.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
Vue.use(Vuex)
const state = {
  navigationInfo: true
}

const store = new Vuex.Store({
  state,
  getters: {},
  mutations,
  actions: {},
  modules: {}
})

export default store
