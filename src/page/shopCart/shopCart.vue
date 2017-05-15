<template>
  <div class="shop-cart">
    <div class="shop-cart-header">
      <div class="shop-cart-header-top">
       <span class="focus"><i class="iconfont icon-wodedingdan"
                              style="font-size: 20px; margin-right: 5px"></i>购物车</span>
      </div>
    </div>
    <login v-if="loginInfo"></login>
    <shop-cart-list v-if="!loginInfo"></shop-cart-list>
  </div>
</template>

<script>
  import login from './children/loginInfo.vue'
  import shopCartList from './children/shopCartList.vue'
  export default{
    components: {
      login,
      shopCartList
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
    .shop-cart-header {
      .shop-cart-header-top {
        height: 45px;
        width: 100%;
        border-bottom: 2px solid @index-ls-color;
        .focus {
          display: inline-block;
          margin-left: @index-center-left-margin-left;
          width: @index-center-left-width;
          height: 100%;
          color: white;
          background: @index-ls-color;
          .flex-center();
        }
      }

    }
  }

</style>
