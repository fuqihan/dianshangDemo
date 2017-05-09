<template>
  <div>
    <div class="bms">{{b}}</div>
    <p class="bms-p">:</p>
    <div class="bms">{{m}}</div>
    <p class="bms-p">:</p>
    <div class="bms">{{s}}</div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        flag: false,
        b: '',
        m: '',
        s: ''
      }
    },
    mounted () {
      let time = setInterval(() => {
        if (this.flag) {
          clearInterval(time)
        }
        this.timeDown()
      }, 500)
    },
    props: {
      endTime: {
        type: String
      }
    },
    methods: {
      timeDown () {
        const endTime = new Date(this.endTime)
        const nowTime = new Date()
//        获取当前时间nowTime.getTime()
//        leftTime 计算出剩余时间
        let leftTime = parseInt((endTime.getTime() - nowTime.getTime()) / 1000)
//        let d = parseInt(leftTime / (24 * 60 * 60))
        this.b = this.formate(parseInt(leftTime / (60 * 60) % 24))
        this.m = this.formate(parseInt(leftTime / 60 % 60))
        this.s = this.formate(parseInt(leftTime % 60))
        if (leftTime <= 0) {
          this.flag = true
          this.$emit('time-end')
        }
      },
      formate (time) {
        if (time >= 10) {
          return time
        } else {
          return `0${time}`
        }
      }
    }
  }
</script>

<style lang="less">
.bms {
  float: left;
  color: white;
  background: #040404;
}
  .bms-p {
    float: left;
  }
</style>
