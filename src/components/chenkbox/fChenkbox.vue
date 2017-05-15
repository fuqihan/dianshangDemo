<template>
  <div class="f-checkbox" @click="checkClick" :class="{'check-bak': isInfo}">
    <transition name="fade">
      <i class="el-icon-check" v-if="isInfo"></i>
    </transition>
  </div>
</template>

<script>
  export default{
    props: ['isInfo', 'aa'],
    data () {
      return {
        checkboxInfo: false,
        isBak: false
      }
    },
    methods: {
      checkClick () {
        if (this.aa === 1) {
          this.$emit('update:isInfo', !this.$props.isInfo)
          this.$store.commit('CART_INFO_FALSE')
        }
      }
    }
  }
</script>

<style lang="less">
  .f-checkbox {
    width: 20px;
    height: 20px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      font-size: 8px;
      color: white;
    }
  }

  .check-bak {
    background: #3ba2ff;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
