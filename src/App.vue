<template>
  <div>
    <!--<f-text></f-text>-->
    <router-view></router-view>
  </div>
</template>

<script>
  import text from './components/text/text.vue'
  export default {
    components: {
      'f-text': text
    }
  }
</script>

<style>
  body{
    margin: 0;
    padding: 0;
  }
  * {
    font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  }
</style>
