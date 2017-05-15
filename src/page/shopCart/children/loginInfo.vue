<template>
  <div class="cart-login-info">
    <p>购物车内暂时没有商品，登录后将显示您之前加入的商品</p>
    <router-link :to="{name: 'login'}"  class="cart-login-info-btn">登录</router-link>
  </div>
</template>

<script>
  export default{}
</script>

<style lang="less">
  @import "../../../style/my";
  .cart-login-info {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .cart-login-info-btn {
      margin: 20px 0 20px 20px;
      width: 100px;
      border: none;
      cursor: pointer;
      border-radius: 0 5px 5px 0;
      height: 40px;
      background: @index-ls-color;
      color: white;
      font-size: 16px;
      text-decoration: none;
      text-align: center;
      line-height: 40px;
    }
  }
</style>
