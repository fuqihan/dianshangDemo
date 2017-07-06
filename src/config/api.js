/**
 * Created by fuqihan on 2017/5/25.
 */
import axios from 'axios'

const url = 'http://localhost:3000/'

// 用户模块
// 用户模块
// 用户模块
export function postLogin (username, psd) {
  return axios.post(url + 'login', {username: username, password: psd})
}
// 判断用户名是否重复
export function nameRepeat (name) {
  return axios.post(url + 'users/nameRepeat', {name: name})
}

export function addUser (obj) {
  return axios.post(url + 'users/addUser', {obj: obj})
}

export function upload (data) {
  return axios.post(url + 'users/upload',data)
}
