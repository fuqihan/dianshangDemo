<template>
  <div class="businessmen">
    <f-header :msg="header"></f-header>
    <div class="businessmen-center">
      <div class="businessmen-center-tab">
        <el-tree :data="businessmenTab" :default-expand-all="true" @node-click="treeClick"
                 class="businessmen-center-tab-tree"></el-tree>
      </div>
      <div class="businessmen-center-router">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import header from '../../components/header/header.vue'
  import { businessmenTab } from '../../config/tab'
  export default{
    data () {
      return {
        header: '商家管理',
        businessmenTab: businessmenTab
      }
    },
    components: {
      'f-header': header
    },
    methods: {
      treeClick (data) {
        this.$router.push({path: data.name})
      }
    }
  }
</script>

<style lang="less">
  .businessmen {
    width: 100%;
    min-height: 610px;
    .businessmen-center {
      width: 100%;
      background-color: #f5f5f5;
      display: flex;
      justify-content: flex-start;
      .businessmen-center-tab {
        width: 12%;
        margin: 20px 20px;
      }
      .businessmen-center-router {
        flex: 1;
        margin: 20px 20px;
      }
    }
  }

</style>
