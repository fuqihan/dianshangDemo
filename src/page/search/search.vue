<template>
  <div class="search">
    <div class="search-header">
      <div class="search-header-top">
       <span class="focus"><i class="iconfont icon-wodedingdan"
                              style="font-size: 20px; margin-right: 5px"></i>搜索结果</span>
      </div>
      <div class="search-header-option">
        <search-option></search-option>
      </div>
    </div>
  </div>
</template>

<script>
  import searchOption from '../../components/searchOption/searchOption.vue'
  export default{
    components: {
      searchOption
    }
  }
</script>

<style lang="less">
  @import "../../style/my";

  .search {
    .search-header {
      .search-header-top {
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
  }
</style>
