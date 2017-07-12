# dianshangDemo

# 背景

学习vue写的一个电商类demo，后台是用node来写的（本来是用springboot，想学习node用了express写了接口）

大神们有什么建议可以帮忙提一下，有什么功能觉得需要添加的可以
说一下，为我后面重构做准备（项目命名没有统一，前期写的一些代码有些不堪入目）

项目演示： http://120.25.240.196

后端地址： https://github.com/fuqihan/dianshangNode

求赞求关注。。。。

# 功能

——路由懒加载  使用了与webpack结合的ensure方式

——权限处理   router.beforeEach与vuex的结合（在app.vue时created里进行读取本地token请求服务器判断是否登陆过，bug
是beforeEach比请求的数据快一步触发，所以第一次进入的时候
loginInfo是false，有什么办法可以说一下，谢谢）

——主页  使用第三方指令实现了上啦刷新

修改中。。。。。。。。

## 项目运行

``` bash
# install dependencies  安装依赖
npm install

# serve with hot reload at localhost:8080  运行开发环境
npm run dev

# build for production with minification 打包
npm run build

```
