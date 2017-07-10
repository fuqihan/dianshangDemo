<template>
    <div class="shop">
      <img :src="shop.shopUrl" alt="" width="96%" height="65%">
      <a href="">{{shop.shopName}}</a>
      <span>￥{{shop.shopPrice}}</span>
    </div>
</template>

<script>
export default{
  props: ['shopData'],
  computed: {
    shop () {
        if(this.$props.shopData){
            return this.$props.shopData
        }else {
            return {
              shopUrl: '',
              shopName: '',
              shopPrice: ''
            }
        }
    }
  }
}
</script>

<style lang="less">
  .shop {
    width: 250px;
    height: 260px;
    margin: 10px 10px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    img{
      padding: 1px;
    }
    a {
      text-decoration: none;
      color: black;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
    }
    span {
      color: red;
      font-size: 18px;
    }
  }
</style>
