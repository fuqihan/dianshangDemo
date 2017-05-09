<template>
  <div class="shops">
    <div class="shop" v-for="item in 10"></div>
  </div>
</template>

<script>
export default{}
</script>

<style lang="less">
.shops {
  width: 80%;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  .shop {
    width: 18%;
    height: 260px;
    background: blue;
    margin: 10px 10px;
  }
}
</style>
