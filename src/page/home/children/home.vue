<template>
  <div class="center">
    <!--页面轮播及分类-->
    <div class="top">
        <span class="focus"><i class="iconfont icon-wodedingdan"
                               style="font-size: 20px; margin-right: 5px"></i>商品分类</span>
      <span style="margin-left: 20px">中国制造</span>
      <span style="margin-left: 20px">品质优选</span>
    </div>
    <div class="carousel">
      <f-swiper :listImg="listImg" :sTime="5000" sHeight="450px"></f-swiper>
      <div class="left">
        <div class="left-col" v-for="item in listTree">
          <span v-for="bb in item"><a href="#">{{bb}}</a> &nbsp</span>
          <!--<div class="content">{{item}}</div>-->
        </div>
      </div>
    </div>
    <div class="seckill_list">
      <table border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td>
            <div class="kill">
              <span>抢购</span>
              <span>本场剩余</span>
              <countdown @time-end="message = '倒计时结束'" :endTime='endTime' class="time"></countdown>
              <span>查看更多<i class="el-icon-arrow-right" style="font-size: 12px;margin-left: 5px"></i></span>
            </div>
          </td>
          <td v-for="item in killShop">
            <div class="kill_shop">
              <div class="kill_shop-left">
                <a href="#">{{item.name}}</a>
                <span style="margin: 10px 0;color: red">￥{{item.killPrice}}</span>
                <span>原价: {{item.price}}</span>
              </div>
              <div class="kill_shop-right">
                <img src="" alt="" width="80" height="100">
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>

    <div class="offer">
      <div class="coupon">
        <div class="array">
          <span class="one">领券中心</span>
          <span class="two">快来啊!</span>
          <span>大爷.....</span>
          <div class="three">
            <span>go</span>
            <i class="el-icon-arrow-right" style="font-size: 10px"></i>
          </div>
        </div>
      </div>
      <div class="ofter-list" v-for="item in 5">
        <img src="./66bOOOPIC37_1024.jpg" alt="">
      </div>
    </div>
    <div class="shop-lists" v-infinite-scroll="loadMore"
         infinite-scroll-disabled="busy" infinite-scroll-distance="10">
      <div v-for="item in num">

        <shops :shopData="shopData[item]"></shops>

      </div>
    </div>
    <div class="center-loading"
         element-loading-text="拼命加载中">
      {{loadingEnd}}
    </div>
  </div>
</template>

<script>
  import { a, b, c, d, e, f } from '../../../../static/outImg'
  import swiper from '../../../components/swiper/swiper.vue'
  import countdown from '../../../components/countdown/countdown.vue'
  import shops from '../../../components/shopList/shopsList.vue'
  import {findShops} from '../../../config/api'

  const listTree = {
    1: ['家居', '家具', '家装', '厨具'],
    2: ['手机', '运营商', '数码'],
    3: ['电脑', '办公'],
    4: ['男装', '女装', '童装', '内衣'],
    5: ['女鞋', '箱包', '钟表', '珠宝'],
    6: ['男鞋', '运动', '户外'],
    7: ['汽车', '汽车用品'],
    8: ['母婴', '玩具乐器'],
    9: ['食品', '酒类', '生鲜', '特产'],
    10: ['图书', '音像', '电子书']
  }
  const killShop = [{
    'name': '专业配送 货到付款,',
    'killPrice': 12,
    'price': 15,
    'killImg': ''
  }, {
    'name': '专业配送 货到付款,',
    'killPrice': 12,
    'price': 15,
    'killImg': ''
  }, {
    'name': '专业配送 货到付款,',
    'killPrice': 12,
    'price': 15,
    'killImg': ''
  }, {
    'name': '专业配送 货到付款,',
    'killPrice': 12,
    'price': 15,
    'killImg': ''
  }]
  const offerList = {}
  export default{
    data () {
      return {
        listTree: listTree,
        listImg: [
          {url: a}, {url: b}, {url: c}, {url: d}, {url: e}, {url: f}
        ],
        message: '正在倒计时',
        endTime: '2017-10-03 20:06:00',
        killShop: killShop,
        offerList: offerList,
        num: 20,
        busy: false,
        loading: false,
        loadingEnd: '加载中。。。。',
        shopData: ''
      }
    },
    components: {
      'f-swiper': swiper,
      countdown,
      shops
    },
    methods: {
      loadMore: function () {
        this.loading = true
        this.busy = true
        setTimeout(() => {
          this.loading = false
          this.num += 10
        }, 2000)
        if (this.num < 40) {
          setTimeout(() => {
            this.busy = false
          }, 5000)
        } else {
          this.loadingEnd = '不能在拉了,已经到最底了'
        }
      }
    },
    created () {
          findShops().then((data) => {
            this.shopData = data.data;
          })
      }
  }
</script>


<style lang="less">
  @import "../../../style/my";

  .center {
    width: 100%;
    padding: 0;
    margin: 0;
    background: #f0f0f0;
    .top {
      width: 100%;
      height: 45px;
      font-size: 16px;
      background: white;
      border-bottom: 2px solid @index-ls-color;
      display: flex;
      align-items: center;
      font-family: 等线;
      .focus {
        display: inline-block;
        margin-left: @index-center-left-margin-left;
        width: @index-center-left-width;
        height: 100%;
        color: white;
        background: @index-ls-color;
        .flex-center();
      }
    }
    .carousel {
      a {
        text-decoration: none;
        color: black;
      }
      width: 100%;
      height: @index-center-left-height;
      position: relative;
      .left {
        width: @index-center-left-width;
        height: @index-center-left-height;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: absolute;
        top: 0;
        left: @index-center-left-margin-left;
        z-index: 99;
        background: rgba(173, 186, 255, 0.93);
        font-size: 12px;
      }
      .left-col {
        width: 100%;
        flex: 1;
        .flex-center();
        &:hover {
          padding-left: 3px;
          border-left: 3px solid red;
        }
        &:hover .content {
          display: block;
        }
        .content {
          display: none;
          background: white;
          width: 500px;
          height: @index-center-left-height;
          position: absolute;
          top: 0;
          left: @index-center-left-width;
          z-index: 99;
        }
      }
    }
    .seckill_list {
      margin-top: 10px;
      height: 120px;
      overflow: hidden;
      table {
        margin: 0 auto;
        tr {
          td {
            border: 0;
            .kill {
              width: @index-center-left-width;
              height: 120px;
              background: rgba(207, 34, 190, 0.5);
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-between;
            }
            .kill_shop {
              width: 198px;
              height: 120px;
              margin: 0 10px;
              background: white;
              display: flex;
              justify-content: flex-start;
              .kill_shop-left {
                width: 55%;
                height: 100%;
                margin-left: 5px;
                display: flex;
                flex-direction: column;
                a {
                  margin-top: 10px;
                  text-decoration: none;
                  color: black;
                  font-size: 10px;
                }
              }
              .kill_shop-right {
                width: 45%;
                height: 100%;
                img {
                  margin-top: 10px;
                }
              }
            }
          }
        }
      }
    }
    .offer {
      width: 90%;
      margin: 20px auto;
      display: flex;
      justify-content: flex-start;
      .coupon {
        width: 190px;
        height: 200px;
        background: #ea3524;
        display: flex;
        flex-direction: column;
        align-items: center;
        .array {
          display: flex;
          flex-direction: column;
          color: white;
          .one {
            font-size: 30px;
            margin-top: 20px;
          }
          .two {
            margin-top: 20px;
          }
          .three {
            margin-top: 20px;
          }
        }
      }
      .ofter-list {
        flex: 1;
        margin: 0 10px;
        height: 200px;
        background: white;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        img {
          width: 100%;
          height: 100%;
        }
        a {
          text-decoration: none;
          color: #8c939d;
        }
      }
    }
    .shop-lists {
      width: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
    .center-loading {
      width: 82%;
      height: 100px;
      margin: 0 auto;
      font-size: 20px;
      text-align: center;
      line-height: 100px;
    }
  }

  .time {
    height: 20px;
    margin: 0;
  }
</style>
