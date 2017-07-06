<template>
  <div class="cart-list">
    <div class="cart-shop-list" v-if="shopList.length">
      <div class="cart-shop-list-row cart-shop-list-header">
        <div class="cart-shop-list-row-col cart-shop-list-row-col-1" @click="isTotal">
          <f-checkbox :isInfo="total"></f-checkbox>
          &nbsp&nbsp&nbsp全选
        </div>
        <div class="cart-shop-list-row-col cart-shop-list-row-col-2">商品</div>
        <div class="cart-shop-list-row-col cart-shop-list-row-col-3">商品信息</div>
        <div class="cart-shop-list-row-col cart-shop-list-row-col-4">单价</div>
        <div class="cart-shop-list-row-col cart-shop-list-row-col-5">数量</div>
        <div class="cart-shop-list-row-col cart-shop-list-row-col-6">操作</div>
      </div>
      <div class="cart-shop-list-row" v-for="(item,index) in shopList">
        <div class="cart-shop-list-row-col cart-shop-list-row-col-1" @click="isAllNum">
          <f-checkbox :isInfo.sync="item.checkInfo" :aa="1"></f-checkbox>
        </div>
        <div class="cart-shop-list-row-col cart-shop-list-row-col-2">
          <div class="cart-shop-list-row-col-2-list">
            <img src="" alt="" width="80" height="80">
            <span>{{item.name}}</span>
          </div>
        </div>
        <div class="cart-shop-list-row-col cart-shop-list-row-col-3">
          <span>{{item.msg}}<br>{{item.style}}</span>
        </div>
        <div class="cart-shop-list-row-col cart-shop-list-row-col-4">4.00</div>
        <div class="cart-shop-list-row-col cart-shop-list-row-col-5">
          <el-input-number v-model="item.num" @change="handleChange" :min="1" :max="10"></el-input-number>
        </div>
        <div class="cart-shop-list-row-col cart-shop-list-row-col-6">
          <span>删除</span>
        </div>
      </div>
      <div class="cart-shop-list-bottom">
        <div class="cart-shop-list-bottom-1">
          <span class="cart-shop-list-bottom-1-one">删除选中商品</span>
          <span class="cart-shop-list-bottom-1-two">{{numAll}}件商品</span>
          <span class="cart-shop-list-bottom-1-three">总计：   ￥{{priceAll}}</span>
        </div>
        <div class="cart-shop-list-bottom-2">
          <a href="#">继续购物</a>
          <button>结 &nbsp &nbsp算</button>
        </div>
      </div>
    </div>
    <div class="cart-shop-info" v-if="!shopList.length">
      <span>您的购物车为空，清前往商店<router-link :to="{name: 'index'}">继续购买</router-link></span>
    </div>
  </div>
</template>

<script>
  import fCheckbox from '../../../components/chenkbox/fChenkbox.vue'
  const shopList = [{
    'id': 1,
    'checkInfo': false,
    'shopImg': '',
    'name': 'aaaaaaaaaaaaaaaaaaaaa',
    'msg': 'aaaaaaaaaaaaaa',
    'style': 'bbbccbb',
    'price': 15,
    'num': 1
  }, {
    'id': 1,
    'checkInfo': false,
    'shopImg': '',
    'name': 'aaaaaaaaaaaaaaaaaaaaa',
    'msg': 'aaaaaaaaaaaaaa',
    'style': 'bbccbbb',
    'price': 15,
    'num': 1
  }, {
    'id': 1,
    'checkInfo': false,
    'shopImg': '',
    'name': 'aaaaaaaaaaaaaaaaaaaaa',
    'msg': 'aaaaaaaaaaaaaa',
    'style': 'bbbbb',
    'price': 15,
    'num': 1
  }]

  export default{
    components: {
      fCheckbox
    },
    data () {
      return {
        shopList: shopList
      }
    },
    methods: {
      isTotal () {
        this.$store.commit('CART_INFO')
        this.shopList.forEach((item, index) => {
          item.checkInfo = this.total
        })
      },
      isAllNum () {
        let aa = true
        this.shopList.forEach((item, index) => {
          if (!item.checkInfo) {
            aa = item.checkInfo
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
      },
      numAll () {
        let aa = 0
        this.shopList.forEach((item, index) => {
            if(item.checkInfo){
              aa += item.num
            }
        })
        return aa
      },
      priceAll () {
        let aa = 0
        this.shopList.forEach((item, index) => {
          if(item.checkInfo){
            aa += item.num * item.price
          }
        })
        aa = aa.toFixed(2)
        return aa
      }
    }
  }
</script>

<style lang="less">
  @import "../../../style/my";

  .cart-list {
    width: 100%;
    .cart-shop-list {
      margin: 20px auto;
      width: 90%;
      border-top: 1px solid #1a594b;
      .cart-shop-list-header {
        background: rgba(0, 0, 0, 0.14);
      }
      .cart-shop-list-row {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        .cart-shop-list-row-col-1 {
          width: 10%;
        }
        .cart-shop-list-row-col-2 {
          width: 30%;
          .cart-shop-list-row-col-2-list {
            width: 100%;
            height: 120px;
            position: relative;
            img {
              position: absolute;
              top: 20px;
              left: 20px;
            }
            span {
              width: 56%;
              word-wrap: break-word;
              font-size: 16px;
              position: absolute;
              top: 30px;
              left: 120px;
            }
          }
        }
        .cart-shop-list-row-col-3 {
          width: 20%;
        }
        .cart-shop-list-row-col-4 {
          width: 10%;
        }
        .cart-shop-list-row-col-5 {
          width: 10%;
        }
        .cart-shop-list-row-col-6 {
          width: 20%;
        }
        .cart-shop-list-row-col {
          margin: 10px 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .cart-shop-list-bottom {
        width: 100%;
        margin: 0 auto;
        .cart-shop-list-bottom-1 {
          width: 100%;
          height: 45px;
          background: #eaeaea;
          position: relative;
          .cart-shop-list-bottom-1-one {
            position: absolute;
            top: 10px;
            left: 10px;
          }
          .cart-shop-list-bottom-1-two {
            position: absolute;
            top: 10px;
            right: 300px;
          }
          .cart-shop-list-bottom-1-three {
            position: absolute;
            top: 10px;
            right: 90px;
          }
        }
        .cart-shop-list-bottom-2 {
          width: 100%;
          height: 50px;
          position: relative;
          a {
            position: absolute;
            top: 15px;
            left: 10px;
            text-decoration: none;
            color: black;
          }
          button {
            position: absolute;
            top: 10px;
            right: 60px;
            border: none;
            cursor: pointer;
            border-radius: 0 5px 5px 0;
            width: 160px;
            height: 38px;
            font-size: 18px;
            background: @index-ls-color;
            color: white;
          }
        }
      }
    }
    .cart-shop-info {
      width: 100%;
      height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        font-size: 20px;
        a {
          text-decoration: none;
        }
      }
    }
  }
</style>
