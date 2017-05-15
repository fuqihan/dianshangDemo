<template>
  <div class="cart-list">
    <div class="cart--shop-list">
      <table>
        <tr>
          <td @click="isTotal">
            <f-checkbox :isInfo="total"></f-checkbox>
            {{total}}
          </td>
          <td>
          <td v-for="(item,index) in num" @click="isAllNum">
            <f-checkbox :isInfo.sync="num[index]" :aa="1"></f-checkbox>
            {{num[index]}}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import fCheckbox from '../../../components/chenkbox/fChenkbox.vue'
  export default{
    components: {
      fCheckbox
    },
    data () {
      return {
        num: [false, false, false, false],
        aa: 1
      }
    },
    methods: {
      isTotal () {
        this.$store.commit('CART_INFO')
        this.num.forEach((item, index) => {
          this.num[index] = this.total
        })
      },
      isAllNum () {
        let aa = true
        this.num.forEach((item, index) => {
          if (!item) {
            aa = item
          }
        })
        if (aa) {
          this.$store.commit('CART_INFO_TRUE')
        }
      }
    },
    computed: {
      total () {
        return this.$store.state.total
      }
    }
  }
</script>

<style lang="less">
  .cart-list {
    width: 100%;
    .cart--shop-list {
      margin: 20px auto;
      width: 90%;
      border-top: 1px solid #666;
    }
  }
</style>
