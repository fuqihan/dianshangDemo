/**
 * Created by Administrator on 2017/7/10.
 */
const storage = window.localStorage
module.exports = {
  addToken: (data) =>{
    storage["dianshangToken"] = data.token
    storage["dianshangName"] = data.name
    console.log(window.localStorage)
  }
}
