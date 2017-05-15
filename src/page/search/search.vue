<template>
  <div class="search">
    <div class="search-header">
      <div class="search-header-top">
       <span class="focus"><i class="iconfont icon-wodedingdan"
                              style="font-size: 20px; margin-right: 5px"></i>搜索结果</span>
      </div>
      <div class="search-header-option">
        <breadcrumb></breadcrumb>
        <search-option></search-option>
      </div>
    </div>
    <div class="search-shop">
      <div class="search-shop-sorting">
        <div class="search-shop-sorting-list" @click="sortingInfo(0)"
             :class="{ searchShopSortingInfo: sortingInfoList[0] }">
          <span>{{sortingList[0]}}</span>
          <i class="el-icon-caret-bottom"></i>
        </div>
        <div class="search-shop-sorting-list" @click="sortingInfo(1)"
             :class="{ searchShopSortingInfo: sortingInfoList[1] }">
          <span>{{sortingList[0]}}</span>
          <i class="el-icon-caret-bottom"></i>
        </div>
        <div class="search-shop-sorting-list" @click="sortingInfo(2)"
             :class="{ searchShopSortingInfo: sortingInfoList[2] }">
          <span>{{sortingList[0]}}</span>
          <i class="el-icon-caret-bottom"></i>
        </div>
        <div class="search-shop-sorting-list" @click="sortingInfo(3)"
             :class="{ searchShopSortingInfo: sortingInfoList[3] }">
          <span>{{sortingList[0]}}</span>
          <i class="el-icon-caret-bottom"></i>
        </div>
        <div class="search-shop-sorting-msg">
          <span>共:&nbsp1000 :&nbsp件商品 &nbsp 目前为:&nbsp 10 :&nbsp件</span>
        </div>
      </div>
      <div class="search-shop-list">
        <div v-for="item in 10">
          <router-link :to="{name: 'shopShow'}"> <shopList></shopList></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import searchOption from '../../components/searchOption/searchOption.vue'
  import breadcrumb from '../../components/breadcrumbs/breadcrumbs.vue'
  import shopList from '../../components/shopList/shopsList.vue'
  import { sortingOne, sortingTwo, sortingThree, sortingFour } from '../../config/sortingInfo'

  const sortingList = ['综合', '销量', '新品', '价格']

  export default{
    data () {
      return {
        sortingInfoList: [true, false, false, false],
        sortingList: sortingList
      }
    },
    components: {
      searchOption,
      breadcrumb,
      shopList
    },
    methods: {
      sortingInfo (index) {
        switch (index) {
          case 0:
            this.sortingInfoList = sortingOne
            break
          case 1:
            this.sortingInfoList = sortingTwo
            break
          case 2:
            this.sortingInfoList = sortingThree
            break
          case 3:
            this.sortingInfoList = sortingFour
            break
        }
      }
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
    .search-shop {
      margin: 10px auto;
      width: 90%;
      .search-shop-sorting {
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: flex-start;
        .search-shop-sorting-list {
          width: 50px;
          height: 15px;
          padding: 6px;
          font-size: 10px;
          border: 1px solid rgba(0, 0, 0, 0.3);
          span {
            float: left;
            margin-left: 3px;
          }
          i {
            float: left;
            margin-top: 4px;
            margin-left: 5px;
          }
        }
        .search-shop-sorting-msg {
          flex: 1;
          position: relative;
          span {
            position: absolute;
            top: 2px;
            right: 2px;
          }
        }
      }
      .search-shop-list {
        margin-top: 10px;
        margin-left: 70px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
      }
    }
  }

  .searchShopSortingInfo {
    background: rgba(255, 61, 78, 0.87);
    color: white;
  }
</style>
