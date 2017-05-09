<template>
  <div class="bottom">
    <div class="one">
      <div class="array">
        <diamond :size="diamondSize" :text="diamondText[0]"></diamond>
        <span>品类齐全，轻松购物</span>
      </div>
      <div class="array">
        <diamond :size="diamondSize" :text="diamondText[1]"></diamond>
        <span>多仓直发，极速配送</span>
      </div>
      <div class="array">
        <diamond :size="diamondSize" :text="diamondText[2]"></diamond>
        <span>正品行货，精致服务</span>
      </div>
      <div class="array">
        <diamond :size="diamondSize" :text="diamondText[3]"></diamond>
        <span>天天低价，畅选无忧</span>
      </div>

    </div>
    <div class="two">
      <div class="message">
        <dl>
          <dt>新手入门</dt>
          <dd>购物流程</dd>
          <dd>会员制度</dd>
          <dd>订单查询</dd>
          <dd>发票制度</dd>
          <dd>常见问题</dd>
        </dl>
      </div>
      <div class="message">
        <dl>
          <dt>支付方式</dt>
          <dd>货到付款</dd>
          <dd>网上支付</dd>
          <dd>银行装张</dd>
          <dd>礼品卡支付</dd>
          <dd>其他支付</dd>
        </dl>
      </div>
      <div class="message">
        <dl>
          <dt>配送服务</dt>
          <dd>配送范围及运费</dd>
          <dd>配送进度查询</dd>
          <dd>自提服务</dd>
          <dd>商品验货与签收</dd>
        </dl>
      </div>
      <div class="message">
        <dl>
          <dt>售后保障</dt>
          <dd>退换货政策</dd>
          <dd>退换货政策</dd>
          <dd>退款说明</dd>
          <dd>延保说明页面</dd>
          <dd>联系客服</dd>
        </dl>
      </div>
      <div class="message">
        <dl>
          <dt>商家合作</dt>
          <dd>商家入驻</dd>
          <dd>商必赢</dd>
          <dd>平台规则</dd>
          <dd>企业采购</dd>
        </dl>
      </div>
      <div class="code">
        <div class="qr">
          <span>支持一下</span>
          <img :src="codeImg.url" alt="">
        </div>
        <div class="qr">
          <span>支持一下</span>
          <img :src="codeImg.url" alt="">
        </div>
      </div>
    </div>
    <div class="three">
      <span>关于我们</span>
      <span>|</span>
      <span>我们的团队</span>
      <span>|</span>
      <span>网站联盟</span>
      <span>|</span>
      <span>热门搜索</span>
      <span>|</span>
      <span>友情链接</span>
      <span>|</span>
      <span>我们的社区</span>
      <span>|</span>
      <span>诚征英才</span>
      <span>|</span>
      <span>商家登陆</span>
      <span>|</span>
      <span>供应商登录</span>
      <span>|</span>
      <span>放心搜</span>
    </div>
    <div class="four">
      <span>并没有营业号</span>
      <span>|</span>
      <span>并没有牌照</span>
      <span>|</span>
      <span>并没有营业执照</span>
      <span>|</span>
      <span>电话: 18789801138</span>
    </div>
  </div>
</template>

<script>
  import { qr } from '../../../../static/outImg'
  import diamond from '../../../components/diamond/diamond.vue'
  export default{
    data () {
      return {
        codeImg: {url: qr},
        diamondSize: '36px',
        diamondText: ['多', '快', '好', '省']
      }
    },
    components: {
      diamond
    }
  }
</script>

<style lang="less">
  @import "../../../style/my";

  .bottom {
    width: 100%;
    background: #eaeaea;
    .one {
      width: 80%;
      height: 100px;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .array {
        display: flex;
        flex-direction: row;
        align-items: center;
        span {
          margin-left: 15px;
        }
      }
    }
    .two {
      width: 100%;
      display: flex;
      flex-wrap: nowrap;
      .message {
        width: 195px;
        dl {
          text-align: center;
          dt {
            height: 32px;
            line-height: 32px;
            font-size: 14px;
            color: #666;
            font-weight: bold;
          }
          dd {
            margin: 0;
            height: 24px;
            line-height: 24px;
            font-size: 12px;
            white-space: normal;
          }
        }
      }
      .code {
        flex: 1;
        .flex-center();
        .qr {
          display: flex;
          flex-direction: column;
          align-items: center;
          img {
            width: 100px;
            height: 100px;
            margin: 0 20px;
          }
        }
      }
    }
    .three {
      width: 60%;
      height: 40px;
      margin: 0 auto;
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .four {
      width: 40%;
      margin: 0 auto;
      font-size: 12px;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
