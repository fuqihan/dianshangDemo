<template>
  <div>
    <!--<f-text></f-text>-->
    <router-view></router-view>
  </div>
</template>

<script>
  import text from './components/text/text.vue'
  import { checkToken } from './config/api'
  export default {
    components: {
      'f-text': text
    },
    created () {
        let token = window.localStorage['dianshangToken']
      if(token) {
        checkToken(token).then((data) => {
            if(data.data) {this.$store.commit('LOGIN_INFO_TRUE')}
        })
      }
    }
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }

  * {
    font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
    text-decoration: none;
  }
</style>
