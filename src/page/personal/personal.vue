<template>
  <div class="personal">
    <f-header :msg="header"></f-header>
    <div class="personal-center">
      <div class="personal-center-tab">
        <el-tree :data="personalTab" :default-expand-all="true" @node-click="treeClick"
                 class="personal-center-tab-tree"></el-tree>
      </div>
      <div class="personal-center-router">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import header from '../../components/header/header.vue'
  import { personalTab } from '../../config/tab'
  export default{
    data () {
      return {
        header: '个人中心',
        personalTab: personalTab
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
  .personal {
    width: 100%;
    min-height: 610px;
    .personal-center {
      width: 100%;
      background-color: #f5f5f5;
      display: flex;
      justify-content: flex-start;
      .personal-center-tab {
        width: 12%;
        margin: 20px 20px;
      }
      .personal-center-router {
        flex: 1;
        margin: 20px 20px;
      }
    }
  }

</style>
