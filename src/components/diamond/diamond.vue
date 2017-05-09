<template>
  <div class="diamond" :style="wh">
    <div class="ret">{{text}}</div>
  </div>
</template>

<script>
  export default{
    props: ['text', 'size'],
    data () {
      return {
        wh: {
          'width': this.size,
          'height': this.size
        }
      }
    }
  }
</script>

<style lang="less">
  .diamond {
    width: 36px;
    height: 36px;
    transform: rotate(45deg);
    overflow: hidden;
    border: 1px solid #23af92;
    display: flex;
    justify-content: center;
    align-items: center;
    .ret {
      font-size: 12px;
      color: #23af92;
      transform: rotate(-45deg) scale(1.42);
    }
  }
</style>
