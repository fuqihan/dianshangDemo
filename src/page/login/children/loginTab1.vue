<template>
<div class="log-tab-1">
  <img :src="qr" alt="" width="147" height="147">
</div>
</template>

<script>
  import { qr } from '../../../../static/outImg'
export default{
    data () {
      return {
        qr: qr
      }
    }
}
</script>

<style lang="less">
.log-tab-1{
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-top: 20px;
    margin-bottom: 40px;
  }
}
</style>
