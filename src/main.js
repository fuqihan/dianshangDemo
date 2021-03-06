// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import VueVideoPlayer from 'vue-video-player'
import infiniteScroll from 'vue-infinite-scroll'
import VueQuillEditor from 'vue-quill-editor'
import 'element-ui/lib/theme-default/index.css'
import './images/icon/iconfont.css'

Vue.use(VueAxios, axios)
Vue.use(ElementUI)
Vue.use(VueVideoPlayer)
Vue.use(VueQuillEditor)
Vue.use(infiniteScroll)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
