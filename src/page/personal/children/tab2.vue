<template>
  <div class="personal-tab2">
    <div class="editor-header">
      <span class="editor-header">请为你的商品添加介绍吧</span>
    </div>
    <!-- bidirectional data binding（双向数据绑定） -->
    <quill-editor v-model="content"
                  :options="editorOption"
                  @blur="onEditorBlur($event)"
                  @focus="onEditorFocus($event)"
                  @ready="onEditorReady($event)">
      <div id="toolbar" slot="toolbar">
        <!-- Add a bold button -->
        <button class="ql-bold">Bold</button>
        <button class="ql-italic">Italic</button>
        <!-- Add font size dropdown -->
        <select class="ql-size">
          <option value="small"></option>
          <!-- Note a missing, thus falsy value, is used to reset to default -->
          <option selected></option>
          <option value="large"></option>
          <option value="huge"></option>
        </select>
        <!-- Add subscript and superscript buttons -->
        <button class="ql-script" value="sub"></button>
        <button class="ql-script" value="super"></button>
        <button @click="customButtonClick" >image</button>
      </div>
    </quill-editor>
    <form method="post" enctype="multipart/form-data" class="uploadFile" action="http://localhost:3000/users/upload">
     <button class="btn btn-success btn-file-up"><input type="file" name="file" class="file_up" id='file'  @change="uploadImg">上传文件</button>
</form>
    <button @click="aaa">提交</button>
  </div>
</template>

<script>
  import {upload} from '../../../config/api'
  export default {
    data() {
      return {
        name: 'custom-toolbar-example',
        content: '<h2>请为你的商品添加介绍吧</h2>',
        someData: '',
        editorOption: {
          modules: {
            toolbar: '#toolbar'
          }
        }
      }
    },
    methods: {
      onEditorBlur(editor) {
        // console.log('editor blur!', editor)
      },
      onEditorFocus(editor) {
        // console.log('editor focus!', editor)
      },
      onEditorReady(editor) {
        // console.log('editor ready!', editor)
      },
      customButtonClick() {
        let uniqueId = this.$refs.uniqueId
        uniqueId.click()
      },
      async aaa () {
        let formData = new FormData()
        formData.append('file', this.$refs.uniqueId.value)
        let data = await upload(formData)
        console.log(data)
      },
      async uploadImg(event) {
        this.someData = event.target.files[0]
        let formData = new FormData()
        formData.append("file", this.someData);
        let data =await upload(formData)
        console.log(data)
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
