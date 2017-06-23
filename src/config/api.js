/**
 * Created by fuqihan on 2017/5/25.
 */
import axios from 'axios'

const url = 'http://localhost:8099/'

export function postLogin (username, psd) {
  return axios.post(url + 'login', {username: username, password: psd})
}
