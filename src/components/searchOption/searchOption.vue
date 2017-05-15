<template>
  <div class="search-option">
    <div class="search-option-crumbs"></div>
    <table border="0" cellpadding="0" cellspacing="0">
      <tr v-for="option in optionList">
        <td class="op-list-1">品牌：</td>
        <td class="op-list-2"><span v-for="item in option">{{item}}</span></td>
      </tr>
    </table>
  </div>
</template>

<script>
  const optionList = {
    1: ['家居', '家具', '家装', '厨具', '家具', '家装', '厨具', '家具', '家装', '厨具', '家具', '家装', '厨具'],
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
        optionList: optionList
      }
    }
  }
</script>

<style lang="less">
  .search-option {
    margin: 0;
    border: 0;
    table {
      width: 90%;
      margin-left: 89px;
      tr {
       .op-list-1 {
         width: 100px;
         background: #8c939d;
         text-align: center;

       }
        .op-list-2 {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 10px;
          span {
            width: 100px;
            text-align: center;
          }
        }
      }
    }
  }
</style>
