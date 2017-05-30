<template>
  <div class="search-option">
    <div class="search-option-crumbs"></div>
    <table border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td class="op-list-1">分类：</td>
        <td class="op-list-2"><span v-for="item in optionList">{{item}}</span></td>
      </tr>
    </table>
  </div>
</template>

<script>
  const optionList = ['家居', '家具', '家装', '厨具', '家具', '家装', '厨具', '家具', '家装', '厨具', '家具', '家装', '厨具', '家具', '家装', '厨具', '家具', '家装', '厨具', '家具', '家装', '厨具', '家具', '家装', '厨具', '家具', '家装', '厨具', '家具', '家装', '厨具', '家具', '家装', '厨具', '家具', '家装', '厨具', '家具', '家装', '厨具', '家具', '家装', '厨具', '家具', '家装', '厨具', '家具', '家装', '厨具', '家具', '家装', '厨具', '家具', '家装', '厨具', '家具', '家装', '厨具', '家具', '家装', '厨具']

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
