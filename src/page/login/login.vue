<template>
  <div class="login">
    <div class="login-header">
      <router-link :to="{name: 'index'}"><img :src="logoImg" alt="" width="170" height="60"></router-link>
      <span>欢迎登录</span>
    </div>
    <div class="login-content" :style="{ backgroundImage: 'url(' + d + ')' }">
      <div class="login-form">
        <div class="login-form-top">
          <router-link :to="{name: 'loginTab1'}" class="login-tab">扫码登录</router-link>
          <router-link :to="{name: 'loginTab2'}" class="login-tab">账户登录</router-link>
        </div>
        <router-view></router-view>
        <div class="login-form-bottom">
          <span class="login-qq-span">QQ</span>
          <span class="login-weixin-span">微信</span>
          <span class="login-go-register-span">立即注册</span>
        </div>
      </div>
    </div>
    <div class="login-bottom">
      <div class="three">
        <span>关于我们</span>
        <span>|</span>
        <span>我们的团队</span>
        <span>|</span>
        <span>网站联盟</span>
        <span>|</span>
        <span>热门搜索</span>
        <span>|</span>
        <span>友情链接</span>
        <span>|</span>
        <span>我们的社区</span>
        <span>|</span>
        <span>诚征英才</span>
        <span>|</span>
        <span>商家登陆</span>
        <span>|</span>
        <span>供应商登录</span>
        <span>|</span>
        <span>放心搜</span>
      </div>
      <div class="four">
        <span>并没有营业号</span>
        <span>|</span>
        <span>并没有牌照</span>
        <span>|</span>
        <span>并没有营业执照</span>
        <span>|</span>
        <span>电话: 18789801138</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { logo, d } from '../../../static/outImg'
  export default {
    data () {
      return {
        logoImg: logo,
        d: d
      }
    }
  }
</script>

<style lang="less">
  @import "../../style/my";
  @import "../../images/icon/iconfont.css";

  .login {
    margin: 0;
    .login-header {
      margin-top: 5px;
      height: 60px;
      img {
        float: left;
        margin-left: 180px;
      }
      span {
        float: left;
        height: 60px;
        font-size: 20px;
        .flex-center();
      }
    }
    .login-content {
      height: 475px;
      width: 100%;
      margin: 0 auto;
      background-position: center;
      background-size: cover;
      position: relative;
      .login-form {
        width: 346px;
        position: absolute;
        top: 42px;
        right: 160px;
        background: white;
        .login-form-top {
          width: 100%;
          height: 55px;
          display: flex;
          justify-content: space-between;
          .login-tab {
            flex: 1;
            height: 55px;
            .flex-center();
            font-size: 18px;
            text-decoration: none;
            color: black;
            &.active {
              color: rgb(240, 20, 20)
            }
          }
        }
        .login-form-bottom {
          width: 100%;
          height: 50px;
          position: relative;
          .login-qq {
            position: absolute;
            top: 0;
            left: 10px;
          }
          .login-qq-span {
            position: absolute;
            top: 13px;
            left: 20px;
            font-size: 16px;
          }
          .login-weixin-span {
            position: absolute;
            top: 10px;
            left: 75px;
            font-size: 16px;
          }
          .login-go-register {
            position: absolute;
            top: 8px;
            right: 66px;
          }
          .login-go-register-span {
            position: absolute;
            top: 10px;
            right: 30px;
            font-size: 16px;
          }
        }
      }
    }
    .login-bottom {
      margin-top: 20px;
      .three {
        width: 60%;
        height: 40px;
        margin: 0 auto;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .four {
        width: 40%;
        margin: 0 auto;
        font-size: 12px;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
</style>
