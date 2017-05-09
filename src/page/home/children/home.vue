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
          <div class="content">{{item}}</div>
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
          <td>
            <div class="kill_shop"></div>
          </td>
          <td>
            <div class="kill_shop"></div>
          </td>
          <td>
            <div class="kill_shop"></div>
          </td>
          <td>
            <div class="kill_shop"></div>
          </td>
        </tr>
      </table>
    </div>
    <!--品牌 团购 排行榜-->
    <div class="ptp">
      <div class="tree"></div>
      <div class="tree" style="margin: 0 16px"></div>
      <div class="tree"></div>
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

    </div>
    <shops></shops>
  </div>
</template>

<script>
  import { a, b, c, d, e, f } from '../../../../static/outImg'
  import swiper from '../../../components/swiper/swiper.vue'
  import countdown from '../../../components/countdown/countdown.vue'
  import shops from './shopsList.vue'

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
  export default{
    data () {
      return {
        listTree: listTree,
        listImg: [
          {url: a}, {url: b}, {url: c}, {url: d}, {url: e}, {url: f}
        ],
        message: '正在倒计时',
        endTime: '2017-06-03 20:06:00'
      }
    },
    components: {
      'f-swiper': swiper,
      countdown,
      shops
    }
  }
</script>


<style lang="less">
  @import "../../../style/my";

  .center {
    width: 100%;
    padding: 0;
    margin: 0;
    .top {
      width: 100%;
      height: 45px;
      font-size: 16px;
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
      height: 100px;
      overflow: hidden;
      table {
        tr {
          td {
            border: 0;
            .kill {
              margin-left: @index-center-left-margin-left;
              width: @index-center-left-width;
              height: 100px;
              background: rgba(207, 34, 190, 0.5);
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-between;
            }
            .kill_shop {
              width: 198px;
              height: 100px;
            }
          }
        }
      }
    }
    .ptp {
      width: 100%;
      margin: 20px 0;
      display: flex;
      justify-content: center;
      .tree {
        width: 25%;
        height: 450px;
        background: red;
      }
    }
    .offer {
      width: 80%;
      margin: 20px auto;
      display: flex;
      justify-content: flex-start;
      .coupon {
        width: 190px;
        height: 215px;
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
    }
  }

  span {
    font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  }

  .time {
    height: 20px;
    margin: 0;
  }
</style>
