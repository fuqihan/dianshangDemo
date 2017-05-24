<template>
  <div class="share-header">
    <div class="share-header-top">
       <span class="focus"><i class="iconfont icon-wodedingdan"
                              style="font-size: 20px; margin-right: 5px"></i>{{msg}}</span>
    </div>
  </div>
</template>

<script>
export default{
  props: ['msg']
}
</script>

<style lang="less">
  @import "../../style/my";
  .share-header {
    .share-header-top {
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
</style>
