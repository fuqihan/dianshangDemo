<template>
  <div class="personal-tab2">
    <div class="editor-header">
      <span class="editor-header">请为你的商品添加介绍吧</span>
    </div>
    <!-- bidirectional data binding（双向数据绑定） -->
    <quill-editor v-model="content" ref="myQuillEditor">
    </quill-editor>
    <button @click="editorSub">提交</button>
    <!--<input style="display: none" :id="uniqueId" type="file" name="avator" multiple-->
    <!--accept="image/jpg,image/jpeg,image/png,image/gif" @change="uploadImg('uploadFormMulti')">-->
  </div>
</template>

<script>
  export default{
    data () {
      return {
        content: '<h2>I am Example</h2>',
        editorOption: {}
      }
    },
    methods: {
      editorSub () {
        console.log(this.content)
      },
      uploadImg: async function () {
        this.editor.insertEmbed(10, 'image', './static/img/pr.27bc9bb.jpg')
      }
    },
    computed: {
      editor () {
        return this.$refs.myQuillEditor.quill
      }
    }
  }
</script>

<style lang="less">
  .personal-tab2 {
    width: 90%;
    padding: 20px;
    min-height: 500px;
    background: white;
    .editor-header {
      width: 100%;
      text-align: center;
      font-size: 20px;
      margin-bottom: 20px;
    }
  }
</style>
