<template>
  <div class="register">
    <div class="register-header">
      <router-link :to="{name: 'index'}"><img :src="logoImg" alt="" width="170" height="60"></router-link>
      <span>欢迎注册</span>
    </div>
    <div class="register-form">
      <el-input placeholder="请输入内容" class="register-form-input">
        <template slot="prepend" class="register-form-label">用户名 :</template>
      </el-input>
      <el-input placeholder="请输入内容" class="register-form-input">
        <template slot="prepend" class="register-form-label">设置密码 :</template>
      </el-input>
      <el-input placeholder="请输入内容" class="register-form-input">
        <template slot="prepend" class="register-form-label">确认密码 :</template>
      </el-input>
      <el-input placeholder="请输入内容" class="register-form-input">
        <template slot="prepend" class="register-form-label">电话 :</template>
      </el-input>
      <el-input placeholder="请输入内容" class="register-form-input">
        <template slot="prepend" class="register-form-label">验证码 :</template>
      </el-input>
      <button>立即注册</button>
    </div>
    <div class="register-bottom">
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
  import { logo } from '../../../static/outImg'

  export default{
    data () {
      return {
        logoImg: logo
      }
    }
  }
</script>

<style lang="less">
  @import "../../style/my";

  .register {
    margin: 0;
    .register-header {
      margin-top: 5px;
      height: 60px;
      border-bottom: 5px solid;
      border-image: -webkit-linear-gradient(#c1c1c1, #effffa) 30 30;
      border-image: -moz-linear-gradient(#c1c1c1, #effffa) 30 30;
      border-image: linear-gradient(#c1c1c1, #effffa) 30 30;
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
    .register-form {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      border-bottom: 5px solid;
      border-image: -webkit-linear-gradient(#c1c1c1, #effffa) 30 30;
      border-image: -moz-linear-gradient(#c1c1c1, #effffa) 30 30;
      border-image: linear-gradient(#c1c1c1, #effffa) 30 30;
      button {
        margin: 20px auto;
        width: 284px;
        border: none;
        cursor: pointer;
        border-radius: 0 5px 5px 0;
        height: 38px;
        background: @index-ls-color;
        color: white;
      }
    }
    .register-form-input {
      width: 500px;
      margin: 20px 0;
    }
    .register-bottom {
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
