<template>
  <div class="login-tab-2">
    <div class="login-tab-input">
      <i class="iconfont icon-zhanghu" style="font-size: 30px"></i>
      <el-input v-model="username" placeholder="请输入账号" class="login-input"></el-input>
    </div>
    <div class="login-tab-input">
      <i class="iconfont icon-mima" style="font-size: 30px"></i>
      <el-input type="password" v-model="psd" placeholder="请输入密码" class="login-input"></el-input>
    </div>
    <div class="login-forget-psd">
      <a href="#">忘记密码</a>
    </div>
    <button @click="login">登录</button>
  </div>
</template>

<script>
  import { postLogin } from '../../../config/api'
  import { addToken } from '../../../config/ls'
  export default{
    data () {
      return {
        username: '',
        psd: ''
      }
    },
    methods: {
      async login () {
          if (this.username && this.psd) {
            let data = await postLogin(this.username, this.psd)
            console.log(data)
            if(data.data.info) {
              this.$alert('恭喜你登陆成功！', '登陆', {
                confirmButtonText: '确定',
                callback: action => {
                  addToken({
                    token: data.data.token,
                    name: data.data.name
                  })
                  this.$store.commit('LOGIN_INFO_TRUE')
                  this.$router.push({name: "index"})
                }
              });
            } else {
              this.$alert('你的账号名或密码输入不符！', '登陆', {
                confirmButtonText: '确定',
                callback: action => {}
              });
            }
          }else {
            this.$alert('你的输入未完成，请继续输入！', '登陆', {
              confirmButtonText: '确定',
              callback: action => {}
            });
          }
      }
    }
  }
</script>

<style lang="less">
  @import "../../../images/icon/iconfont.css";
  @import "../../../style/my";

  .login-tab-2 {
    width: 100%;
    display: flex;
    flex-direction: column;
    i {
      width: 30px;
      height: 30px;
      margin-top: 5px;
    }
    .login-tab-input {
      width: 100%;
      height: 30px;
      margin-top: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .login-forget-psd {
      width: 284px;
      height: 70px;
      margin: 0 auto;
      position: relative;
      a {
        position: absolute;
        bottom: 0;
        right: 0;
        color: black;
        font-size: 13px;
        text-decoration: none;
      }
    }
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

  .login-input {
    width: 254px;
    height: 30px;
    font-size: 14px;
  }

</style>
