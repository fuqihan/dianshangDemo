<template>
<div></div>
</template>

<script>
  export default {
    created () {
      this.$alert('你还未登陆，请前往登陆！', '登陆', {
        confirmButtonText: '确定',
        callback: action => {
            this.$router.push({path: '/login'})
        }
      });
    }
  }
</script>

<style lang="less">

</style>
