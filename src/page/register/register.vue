<template>
  <div class="register">
    <div class="register-header">
      <router-link :to="{name: 'index'}"><img :src="logoImg" alt="" width="170" height="60"></router-link>
      <span>欢迎注册</span>
    </div>
    <div class="register-form">
        <el-input placeholder="请输入账户名" class="register-form-input"
                             v-model="name" @blur="nameBlur" >
        <template slot="prepend" class="register-form-label">用户名 :</template>
      </el-input>
      <span class="inout-verification" :style="{color: infoColor1}">{{nameRe}}</span>
      <el-input placeholder="请输入密码" class="register-form-input" v-model="psd">
        <template slot="prepend" class="register-form-label">设置密码 :</template>
      </el-input>
      <el-input placeholder="请在输入一遍密码" class="register-form-input" v-model="password" @blur="psdConfirm" >
        <template slot="prepend" class="register-form-label" >确认密码 :</template>
      </el-input>
      <span class="inout-verification" :style="{color: infoColor2}">{{psdCon}}</span>
      <el-input placeholder="请输入电话"  class="register-form-input" v-model="tel" @blur="telConfirm">
        <template slot="prepend" class="register-form-label">电话 :</template>
      </el-input>
      <span class="inout-verification" :style="{color: infoColor3}">{{telCon}}</span>
      <el-input placeholder="暂未启用，不用输入" class="register-form-input">
        <template slot="prepend" class="register-form-label">验证码 :</template>
      </el-input>
      <button @click="open">立即注册</button>
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
  import { nameRepeat, addUser } from '../../config/api'
  export default{
    data () {
      return {
        logoImg: logo,
        name: '',
        nameRe: '',
        infoName: false,
        psd: '',
        password: '',
        infoPsd: false,
        psdCon: '',
        tel: '',
        telCon: '',
        infoTel: false,
        infoColor1: 'red', // 用户名span颜色
        infoColor2: 'red', // 密码验证span颜色
        infoColor3: 'red' // 电话验证span颜色
      }
    },
    methods: {
      async nameBlur () {
        try {
          let aac = await nameRepeat(this.name)
          if (aac.data) {
            this.nameRe = '没有重复，可以使用'
            this.infoColor1 = 'blue'
            this.infoName = true
          } else {
            this.nameRe = '用户名重复'
            this.infoColor1 = 'red'
            this.infoName = false
          }
        } catch (err) {
          this.nameRe = '网络不佳'
          this.infoColor1 = 'red'
          this.infoName = false
        }
      },
      psdConfirm () {
        if (this.psd === this.password) {
          this.psdCon = '两次输入密码相同，请继续'
          this.infoColor2 = 'blue'
          this.infoPsd = true
        } else {
          this.psdCon = '两次输入密码不相同，请在输入一次'
          this.infoColor2 = 'red'
          this.infoPsd = false
        }
      },
      telConfirm () {
        let re = /^1\d{10}$/
        if (re.test(this.tel)) {
          this.telCon = '输入电话号码格式正确'
          this.infoColor3 = 'blue'
          this.infoTel = true
        } else {
          this.telCon = '输入电话号码格式不正确'
          this.infoColor3 = 'red'
          this.infoTel = false
        }
      },
      async open () {
        if (!this.name || !this.psd || !this.password || !this.tel || !this.infoName || !this.infoPsd || !this.infoTel) {
          this.$alert('信息未输入完整', '标题名称', {
            confirmButtonText: '确定',
            callback: () => {
              console.log(123)
            }
          })
        } else {
          let data = await addUser({
            name: this.name,
            password: this.password,
            tel: this.tel
          })
          if (data) {
            this.$alert('恭喜你，注册成功', '标题名称', {
              confirmButtonText: '确定',
              callback: () => {
                console.log(123)
              }
            })
          } else {
            this.$alert('服务器错误', '标题名称', {
              confirmButtonText: '确定',
              callback: () => {
                console.log(123)
              }
            })
          }
        }
      }
    }
  }
</script>

<style lang="less" scoped>
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
      background: #f0f0f0;
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
   .inout-verification{
     width: 460px;
     font-size: 12px;
   }
</style>
