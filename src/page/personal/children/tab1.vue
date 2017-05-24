<template>
  <div class="personal-tab1">
    <div class="personal-tab1-1">
      <div class="personal-tab1-1-img"></div>
      <div class="personal-tab1-1-msg">
        <span>蜡笔喜欢小红帽</span>
        <br> <br>
        <br>
        <span>余额: 1.00</span>
        <span>待付款: 1</span>
        <span>待收货: 2</span>
        <span>待评价: 3</span>
      </div>
    </div>
    <div class="personal-tab1-2">
      <span class="personal-tab1-2-name">我的订单</span>
      <a href="#" class="personal-tab1-2-a">查看所有订单</a>
      <div class="personal-tab1-2-list">
        <div class="order-list" v-for="item in 4"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{}
</script>

<style lang="less">
  .personal-tab1 {
    width: 100%;
    .personal-tab1-1 {
      width: 60%;
      height: 130px;
      background: white;
      position: relative;
      .personal-tab1-1-img {
        width: 104px;
        height: 104px;
        background: url("../../../images/logo/avatar.jpg");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        border-radius: 50%;
        position: absolute;
        top: 10px;
        left: 10px;
      }
      .personal-tab1-1-msg {
        position: absolute;
        top: 26px;
        left: 166px;
        span {
          padding-right: 30px;
        }
      }
    }
    .personal-tab1-2 {
      width: 80%;
      min-height: 500px;
      margin: 20px 0;
      background: white;
      position: relative;
      .personal-tab1-2-name {
        position: absolute;
        top: 10px;
        left: 10px;
      }
      .personal-tab1-2-a {
        color: #606060;
        text-decoration: none;
        position: absolute;
        top: 10px;
        right: 10px;
      }
      .personal-tab1-2-list {
        width: 96%;
        position: absolute;
        top: 50px;
        left: 2%;
        .order-list {
          width: 96%;
          height: 100px;
          margin: 10px 2%;
        }
      }
    }
  }
</style>
