<template>
  <div class="shop-cart">
    <f-header :msg="header"></f-header>
    <login v-if="!loginInfo"></login>
    <shop-cart-list v-if="loginInfo"></shop-cart-list>
  </div>
</template>

<script>
  import login from './children/loginInfo.vue'
  import shopCartList from './children/shopCartList.vue'
  import header from '../../components/header/header.vue'
  export default{
    data () {
      return {
        header: '购物车'
      }
    },
    components: {
      login,
      shopCartList,
      'f-header': header
    },
    computed: {
      loginInfo () {
        return this.$store.state.loginInfo
      }
    }
  }
</script>

<style lang="less">
  @import "../../style/my";

  .shop-cart {
    width: 100%;
  }

</style>
