<template>
  <div class="enlarge">
    <!--<div class="enlarge-small" ref="small" @mouseover="smallMous" @mouseout="smallOut" @mousemove="smallmove">-->
      <div class="enlarge-small">
      <!--<span class="enlarge-float" ref="float"></span>-->
      <img :src="img" width="350" height="449">
    </div>
    <!--<div class="abc" ref="abc">-->
      <!--<div class="text" :style="{ background: textUrl }" ref="text"></div>-->
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    data () {
      return {
        oSmall: '',
        oFloat: '',
        oBig: '',
        oImg: '',
        text: '',
        abc: ''
      }
    },
    props:['img'],
    methods: {
      smallMous () {
        this.oFloat.style.display = 'block'
        this.abc.style.display = 'block'
      },
      smallOut () {
        this.oFloat.style.display = 'none'
        this.abc.style.display = 'none'
      },
      smallmove (event) {
        let oEvent = event
        //        计算出滑块的left,top
        let l = oEvent.clientX - this.oSmall.offsetLeft - this.oFloat.offsetWidth / 2
        let t = oEvent.clientY - this.oSmall.offsetTop - this.oFloat.offsetHeight / 2 + 200
        if (l < 0) {
          l = 0
        } else if (l > this.oSmall.offsetWidth - this.oFloat.offsetWidth) {
          l = this.oSmall.offsetWidth - this.oFloat.offsetWidth
        }
        if (t < 0) {
          t = 0
        } else if (t > this.oSmall.offsetHeight - this.oFloat.offsetWidth) {
          t = this.oSmall.offsetHeight - this.oFloat.offsetHeight
        }
        this.oFloat.style.left = l + 'px'
        this.oFloat.style.top = t + 'px'
// 计算出相对百分比
        var percentX = l / (this.oSmall.offsetWidth - this.oFloat.offsetWidth)
        var percentY = t / (this.oSmall.offsetHeight - this.oFloat.offsetHeight)
        this.text.style.left = -percentX * (this.abc.offsetWidth) + 'px'
        this.text.style.top = -percentY * (this.abc.offsetHeight) + 'px'
      }
    },
    mounted () {
      this.oSmall = this.$refs.small
      this.oFloat = this.$refs.float
      this.text = this.$refs.text
      this.abc = this.$refs.abc
    },
    computed: {
      textUrl () {
        let url = "url('"+ this.$props.img + "')"
        return url
      }
    }
  }
</script>

<style lang="less">
  .enlarge {
    * {
      margin: 0;
      padding: 0;
    }

    .enlarge-small {
      width: 350px;
      height: 449px;
      overflow: hidden;
      margin-left: 10px;
      margin-top: 10px;
      z-index: 99;
      position: relative;
      border: 1px solid red;
    }

   .enlarge-small > img {
      position: absolute;
      top: 0;
      left: 0;
    }

    .enlarge-float {
      display: block;
      width: 50px;
      height: 50px;
      background: green;
      opacity: 0.3;
      z-index: 2;
      position: absolute;
      display: none;
    }
    .text {
      width: 1000px;
      height: 1000px;
      background-size:  100% 100%;
      position: absolute;
      top: -200px;
      left: 0;
    }
    .abc {
      width: 400px;
      height: 400px;
      overflow: hidden;
      margin-top: -380px;
      margin-left: 420px;
      position: relative;
      display: none;
      z-index: 99;
      border: 1px solid blue;
    }
  }
</style>
