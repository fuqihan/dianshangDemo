<template>
  <div class=" index">
    <!--页面头部-->
    <el-row class="header">
      <el-col :span="4">
        <div class="header-left">
          <i class="iconfont icon-zhuye" style="font-size: 11px"></i>
          <router-link :to="{name: 'index'}" style="margin-left: 5px; text-decoration: none; color: black">我的首页</router-link>
        </div>
      </el-col>
      <el-col :span="20">
        <div class="header-right">
          <template v-if="!loginInfo">
            <router-link :to="{name: 'register'}">注册</router-link>
            <router-link :to="{name: 'login'}">登录</router-link>
          </template>
          <template v-if="loginInfo">
            <span>欢迎: {{loginName}}</span>
            <span @click="loginOut">退出</span>
          </template>
          <router-link :to="{name: 'personal'}"><i class="iconfont icon-wodedingdan"
                                                style="font-size: 10px; margin-right: 5px"></i>个人中心
          </router-link>
          <router-link :to="{name: 'shopCart'}"><i class="iconfont icon-gouwuchekong"
                                                style="font-size: 12px; margin-right: 5px; color: red"></i>购物车
          </router-link>
          <router-link :to="{name: 'index'}">客户服务</router-link>
          <router-link :to="{name: 'businessmen'}">在线帮助</router-link>
        </div>
      </el-col>
    </el-row>
    <!--页面logo及搜索-->
    <el-row class="ls">
      <!--页面左部logo-->
      <el-col :span="6">
        <div class="ls-div">
          <router-link :to="{name: 'index'}"><img :src="logoImg" width="170" height="60" alt=""></router-link>
          <!--<div class="text">-->
          <!--<span style="font-size: 20px">我的小店</span>-->
          <!--<br>-->
          <!--<span style=" letter-spacing: 6px;">遇到你真好</span>-->
          <!--</div>-->
        </div>
      </el-col>
      <!--页面中间搜索-->
      <el-col :span="12">
        <div class="ls-div">
          <!--<el-input v-model="input" placeholder="请输入内容" class="search-input"></el-input>-->
          <el-autocomplete
            class="search-input"
            v-model="search"
            :fetch-suggestions="querySearchAsync"
            placeholder="请输入内容"
          ></el-autocomplete>
          <button class="search-btn" @click="onSearch" @keyup.enter="onSearch">搜索</button>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="ls-div">
          <img :src="qr" width="90" height="90" alt="">
        </div>
      </el-col>
    </el-row>
    <router-view></router-view>
    <!--底部-->
    <f-bottom></f-bottom>
  </div>
</template>

<script>
  import navigation from '../navigation/navigation.vue'
  import bottom from './children/bottom.vue'
  import { qr, logo } from '../../../static/outImg'
  export default{
    data () {
      return {
        restaurants: [],
        search: '',
        qr: qr,
        logoImg: logo
      }
    },
    mounted () {
      this.restaurants = this.loadAll()
    },
    methods: {
      loadAll () {
        return [
          {'value': 'aaaaa'},
          {'value': 'bbbbb'}
        ]
      },
      onSearch () {
        this.$store.commit('SEARCH_CM',this.search)
        this.$router.push({name: 'search', params: {data: this.search}})
      },
      querySearchAsync (queryString, cb) {
        var restaurants = this.restaurants
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants

        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          cb(results)
        }, 100 * Math.random())
      },
      createStateFilter (queryString) {
        return (state) => {
          return (state.value.indexOf(queryString.toLowerCase()) === 0)
        }
      },
      loginOut () {
        window.localStorage["dianshangToken"] = false
          this.$store.commit('LOGIN_INFO_FALSE')
      }
    },
    computed: {
      navigationInfo () {
        return this.$store.state.navigationInfo
      },
      loginInfo () {
          return this.$store.state.loginInfo
      },
      loginName () {
          return window.localStorage["dianshangName"]
      }
    },
    components: {
      navigation,
      'f-bottom': bottom
    }
  }
</script>

<style lang="less">
  @import "../../images/icon/iconfont.css";
  @import "../../style/my";

  .header {
    background: #f2f2f2;
    height: @index-header-height;
  }

  .header-left {
    height: @index-header-height;
    font-size: 12px;
    .flex-center();
  }

  .header-right {
    height: @index-header-height;
    float: right;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 90px;
    a {
      font-size: 12px;
      color: rgba(43, 43, 43, 0.8);
      text-decoration: none;
      margin-left: 25px;
      font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
    }
    span{
      font-size: 12px;
      color: rgba(43, 43, 43, 0.8);
      margin-left: 25px;
    }
  }

  .m_left {
    font-size: 12px;
    margin-left: 18px;
  }

  .ls {
    height: @index-ls-height;
  }

  .ls-div {
    height: @index-ls-height;
    .flex-center();
    .text {
      margin-left: 8px;
      text-align: center;
      font-family: Helvetica Neue;
      color: @index-ls-color;
    }
  }

  .search-input {
    width: 60%;
    height: 36px;
    border: 1px solid @index-ls-color;
  }

  .search-btn {
    width: 10%;
    border: none;
    cursor: pointer;
    border-radius: 0 5px 5px 0;
    height: 38px;
    background: @index-ls-color;
    color: white;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }

  span {
    font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  }
</style>
