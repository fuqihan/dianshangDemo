<template>
  <div class="search">
    <f-header :msg="header"></f-header>
    <div class="search-breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/index' }" style="font-size: 20px">首页</el-breadcrumb-item>
        <el-breadcrumb-item style="font-size: 20px">搜索</el-breadcrumb-item>
        <el-breadcrumb-item style="font-size: 20px">{{search}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!--<search-option></search-option>-->
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
        <div v-for="item in shopData">
          <router-link :to="{name: 'shopShow'}">
            <shopList :shopData="item"></shopList>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import searchOption from '../../components/searchOption/searchOption.vue'
  import shopList from '../../components/shopList/shopsList.vue'
  import { sortingOne, sortingTwo, sortingThree, sortingFour } from '../../config/sortingInfo'
  import fHeader from '../../components/header/header.vue'

  const sortingList = ['综合', '销量', '新品', '价格']
  const shopData = [
    {
      shopUrl: 'https://img14.360buyimg.com/jdcms/s220x220_jfs/t2359/227/2070719850/187826/d2d8d64e/568c7d12N18c9df53.jpg!q90.webp',
      shopName: '上海绿源(SHLY) 节能灯 E27 灯泡 白炽灯色 U型 3U18W 色温2700K 黄光',
      shopPrice: 12.90
    }
  ]
  export default{
    data () {
      return {
        sortingInfoList: [true, false, false, false],
        sortingList: sortingList,
        header: '搜索',
        shopData: shopData
      }
    },
    components: {
      searchOption,
      shopList,
      fHeader
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
    },
    computed: {
      search () {
          return this.$store.state.search
      }
    }
  }
</script>

<style lang="less">
  @import "../../style/my";

  .search {
    .search-breadcrumb {
      margin: 20px 0 0 80px;
      width: 700px;
      height: 50px;
      font-size: 30px;
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
