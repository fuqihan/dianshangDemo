import Vue from 'vue'
import Router from 'vue-router'
/*
 懒加载路由
 */
const index = r => require.ensure([], () => r(require('../page/home/index.vue')), 'home')
const home = r => require.ensure([], () => r(require('../page/home/children/home.vue')), 'home')
const login = r => require.ensure([], () => r(require('../page/login/login.vue')), 'login')
const loginTab1 = r => require.ensure([], () => r(require('../page/login/children/loginTab1.vue')), 'login')
const loginTab2 = r => require.ensure([], () => r(require('../page/login/children/loginTab2.vue')), 'login')
const register = r => require.ensure([], () => r(require('../page/register/register.vue')), 'register')
const search = r => require.ensure([], () => r(require('../page/search/search.vue')), 'search')
const shopShow = r => require.ensure([], () => r(require('../page/shopShow/shopShow.vue')), 'shopShow')
const shopCart = r => require.ensure([], () => r(require('../page/shopCart/shopCart.vue')), 'shopCart')
const personal = r => require.ensure([], () => r(require('../page/personal/personal.vue')), 'personal')
const personalTab1 = r => require.ensure([], () => r(require('../page/personal/children/tab1.vue')), 'personal')
const personalTab2 = r => require.ensure([], () => r(require('../page/personal/children/tab2.vue')), 'personal')
const businessmen = r => require.ensure([], () => r(require('../page/businessmen/businessmen.vue')), 'businessmen')
Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: index,
    children: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'home',
        component: home
      },
      {
        path: '/search',
        name: 'search',
        component: search
      },
      {
        path: '/shopShow',
        name: 'shopShow',
        component: shopShow
      },
      {
        path: '/shopCart',
        name: 'shopCart',
        component: shopCart
      },
      {
        path: '/personal',
        name: 'personal',
        component: personal,
        children: [
          {
            path: '/',
            redirect: '/personalTab1'
          },
          {
            path: '/personalTab1',
            name: 'personalTab1',
            component: personalTab1
          },
          {
            path: '/personalTab2',
            name: 'personalTab2',
            component: personalTab2
          }
        ]
      },
      {
        path: '/businessmen',
        name: 'businessmen',
        component: businessmen
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    children: [
      {
        path: '/',
        redirect: '/loginTab1'
      },
      {
        path: '/loginTab1',
        name: 'loginTab1',
        component: loginTab1
      },
      {
        path: '/loginTab2',
        name: 'loginTab2',
        component: loginTab2
      }
    ]
  },
  {
    path: '/register',
    name: 'register',
    component: register
  }
]

const router = new Router({
  linkActiveClass: 'active',
  routes
})

export default router
