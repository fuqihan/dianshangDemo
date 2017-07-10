/**
 * Created by fuqihan on 2017/5/25.
 */
import axios from 'axios'

const url = 'http://localhost:3000/'
// const url = 'http://120.25.240.196:3000/'

/*
* 用户模块    用户模块    用户模块
* */

/*
* 提交登录信息
* */
export function postLogin (username, psd) {
  return axios.post(url + 'users/postLogin', {username: username, password: psd})
}

export function checkToken(token) {
  return axios.post(url + 'users/checkToken',{token: token})
}

/*
* 判断用户名是否重复
* */
export function nameRepeat (name) {
  return axios.post(url + 'users/nameRepeat', {name: name})
}
/*
*注册用户信息
* */
export function addUser (obj) {
  return axios.post(url + 'users/addUser', {obj: obj})
}
/*
提交上传file信息
* */
export function upload (data) {
  return axios.post(url + 'users/upload',data)
}

/*
*  商品列表模块  商品列表模块   商品列表模块
* */
/*
* 获得主页商品信息
* */
export function findShops() {
  return axios.get(url + 'shops/findShops')
}
