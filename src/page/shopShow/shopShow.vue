<template>
  <div class="shop-show">
    <div class="shop-show-header">
      <div class="shop-show-header-top">
       <span class="focus"><i class="iconfont icon-wodedingdan"
                              style="font-size: 20px; margin-right: 5px"></i>商品介绍</span>
      </div>
      <div class="shop-show-header-option">
        <breadcrumb></breadcrumb>
      </div>
    </div>
    <div class="shop-show-intro">
      <div class="shop-show-intro-left">
        <img src="" alt="" width="350" height="449">
        <div class="shop-show-intro-left-bottom">
          <img src="" alt="" width="50" height="64" v-for="item in 5">
        </div>
      </div>
      <div class="shop-show-intro-center">
        <span>{{shopMsg.name}}</span>
        <p class="shop-show-intro-center-introduction">{{shopMsg.introduction}}</p>
        <div class="shop-show-intro-center-price-wrap">
          <table>
            <tr>
              <td class="shop-table-left">价格</td>
              <td class="shop-table-right">￥{{shopMsg.price}}</td>
            </tr>
            <tr>
              <td class="shop-table-left">促销</td>
              <td style="font-size: 14px">指定商品满¥299，立减¥150，每单仅享1次<br>指定商品满¥299，立减¥150，每单仅享1次</td>
            </tr>
          </table>
        </div>
        <el-input-number class="shop-show-intro-center-num" v-model="num" @change="handleChange" :min="1" :max="10"></el-input-number>
        <button class="shop-btn" @click="aa">加入购物车</button>
      </div>
      <div class="shop-show-intro-right">
        <span>同类推荐</span>
        <div class="shop-show-intro-right-img"  v-for="item in 4">
          <img src="" alt="" width="150" height="150">
        </div>
      </div>
    </div>
    <div class="shop-show-tab">
     <div class="shop-show-tab-header">
       <span>商品介绍</span>
       <span>商品评论</span>
     </div>
    </div>
  </div>
</template>

<script>
  import breadcrumb from '../../components/breadcrumbs/breadcrumbs.vue'
  const shopMsg = {
    'name': '美仑达 四川蒲江青见柑橘 5斤装 自营水果',
    'introduction': '【5月补维C 就选柑橘皇后“青见”！口感PK全球柑/桔/橙/柚】【“青见”桔橙：靓女（青见）的丑宝宝就是不知火】：汁多味美胜似丑柑丑橘不知火 似橙非橙 惊艳你的味蕾【供应香港的精选脐橙 3斤26.9！】',
    'price': 11.1
  }
  export default{
    data () {
      return {
        shopMsg: shopMsg,
        num: 1
      }
    },
    components: {
      breadcrumb
    }
  }
</script>

<style lang="less">
  @import "../../style/my";

  .shop-show {
    margin: 0;
    width: 100%;
    .shop-show-header {
      .shop-show-header-top {
        height: 45px;
        width: 100%;
        border-bottom: 2px solid @index-ls-color;
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

    }
    .shop-show-intro {
      margin: 10px auto;
      width: 95%;
      display: flex;
      justify-content: space-between;
      .shop-show-intro-left {
        width: 352px;
        height: 577px;
        .shop-show-intro-left-bottom {
          width: 100%;
          display: flex;
          justify-content: center;
          img {
            margin: 5px 5px;
          }
        }
      }
      .shop-show-intro-center {
        width: 590px;
        display: flex;
        flex-direction: column;
        .shop-show-intro-center-introduction {
          font-size: 13px;
          color: #e4393c;
        }
        .shop-show-intro-center-price-wrap {
          width: 100%;
          table {
            width: 100%;
            background: rgba(193, 193, 193, 0.2);
            tr {
              .shop-table-left {
                width: 20%;
                font-size: 14px;
                text-align: left;
              }
              .shop-table-right {
                font-size: 30px;
                color: red;
              }
            }
          }
        }
        .shop-show-intro-center-num {
          margin: 30px 0 10px 20px;
        }
        .shop-btn {
          margin: 20px 0 20px 20px;
          width: 150px;
          border: none;
          cursor: pointer;
          border-radius: 0 5px 5px 0;
          height: 50px;
          background: @index-ls-color;
          color: white;
          font-size: 20px;
        }
      }
      .shop-show-intro-right {
        width: 210px;
        display: flex;
        flex-direction: column;
        align-items: center;

      }
    }
    .shop-show-tab {
     width: 90%;
      margin: 20px auto;
    }
  }

</style>
