<template>
  <div class="aaa" :style="{height: haa}" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy"
       infinite-scroll-distance="10">
    {{count}}
    {{haa}}
  </div>
</template>

<script>
  const count = 0
  export default {
    data () {
      return {
        count: count,
        hh: 1000,
        busy: false
      }
    },
    methods: {
      loadMore: function () {
        this.hh += 500
        this.count++
        this.busy = true

        setTimeout(() => {
          this.busy = false
        }, 1000)
      }
    },
    computed: {
      haa: function () {
        return this.hh + 'px'
      }
    }
  }
</script>

<style lang="less">
  .aaa {
    height: 1000px;
  }
</style>
