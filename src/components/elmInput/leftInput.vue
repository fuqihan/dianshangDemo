<template>
  <div class="elm-left-input">
    <span>{{msg}}</span>
    <el-input v-model="input" placeholder="请输入内容" class=""></el-input>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        input: ''
      }
    },
    props: ['msg']
  }
</script>

<style lang="less">
  .elm-left-input {
    margin: 0;
    span {
      width: 90px;
      height: 52px;
    }
  }
</style>
