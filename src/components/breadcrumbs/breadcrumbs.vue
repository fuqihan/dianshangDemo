<template>
  <div class="breadcrumb">
    <div class="breadcrumb-li">
      <a href="#">全部商品</a>
    </div>
    <div class="breadcrumb-li" v-for="item in aa">
      &gt&nbsp
      <a href="#"> {{item}}</a>
    </div>
    <div class="breadcrumb-li active">&gt&nbsp 十一月</div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        aa: ['aa', 'bb', 'cc']
      }
    }
  }
</script>

<style lang="less">
  @import "../../style/my";

  .breadcrumb {
    margin-left: @index-center-left-margin-left;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .breadcrumb-li {
      margin: 10px 20px 20px 0;
      a {
        text-decoration: none;
      }
    }
  }
</style>
