<template>
  <div class="cc">

    <el-select v-model="value" placeholder="请选择">
      <el-option v-for="item in options22" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
    <div class="a" v-if="value === '静态数据'">
      <div class="dataCon">数据内容</div>
      <div class="data">
        <div class="title" style="color: black;">
          请输入JSON格式数据 
         <svg @click="getCode" t="1682558394695"  class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2329" width="40" height="40"><path d="M481.723733 640.477867a27.306667 27.306667 0 0 1-19.319466-7.918934l-110.318934-110.3872a27.306667 27.306667 0 0 1 0-38.6048 27.306667 27.306667 0 0 1 38.6048 0l110.421334 110.2848a27.306667 27.306667 0 0 1-19.319467 46.626134z" fill="#2c2c2c" p-id="2330"></path><path d="M481.723733 640.477867a27.306667 27.306667 0 0 1-17.476266-6.314667 27.306667 27.306667 0 0 1-3.413334-38.468267l183.773867-220.637866a27.306667 27.306667 0 0 1 38.5024-3.515734 27.306667 27.306667 0 0 1 3.413333 38.468267l-183.808 220.672a27.306667 27.306667 0 0 1-20.992 9.796267z" fill="#2c2c2c" p-id="2331"></path></svg>
        </div>
        <editor v-model="content" theme="chrome" :options=editorOptions @init="editorInit" lang="html" width="400"
          height="600"></editor>
        
      </div>
     
    </div>
    <div class="a" v-if="value === '数据库匹配'">
      <div class="dataCon" style="padding: 10px">
        <div class="formTitle">数据：</div>
        <input class="inp" placeholder="请选择数据拖入" />
      </div>
      <div class="inputData"></div>
      <div class="dataCon">数据映射</div>
      <div class="con">
        <el-form size="small" class="border-box" style="padding: 10px">
          <form class="formBox">
            <div class="formTitle">类目：</div>
            <input class="inp" size="medium" placeholder="请拖入数据" />
          </form>
          <form class="formBox">
            <div class="formTitle">值：</div>
            <input class="inp" size="medium" placeholder="请拖入数据" />
          </form>
          <form class="formBox">
            <div class="formTitle">筛选字段：</div>
            <input class="inp" size="medium" placeholder="请拖入数据" />
          </form>
          <form class="formBox">
            <div class="formTitle">排序字段：</div>
            <input class="inp" size="medium" placeholder="请拖入数据" />
          </form>
        </el-form>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "dataBinding",
    components: {
      editor: require('vue2-ace-editor'),
    },

    methods: {
      getCode() {
        
        var obj=JSON.parse(this.content)
        // this.$emit('gets',obj)
        this.$set(this.current,"value",obj)
      // console.log(typeof obj)
        // console.log(obj)
      },
      editorInit: function () {
        require('brace/ext/language_tools') //language extension prerequsite...
        require('brace/mode/html')
        require('brace/mode/javascript') //language
        require('brace/mode/less')
        require('brace/theme/chrome')
        require('brace/snippets/javascript') //snippet
        
      },
    },
    props: {
      current: {
        type: Object,
        default () {
          return null;
        }
      },
      form: {
        type: Array,
        default () {
          return [];
        },
      },
    },
    watch: {
      current(newVal) {
        if (newVal) {
          console.log("aaaaaaaaaaaa",this.current)
          console.log("bbbbbbbbbbbb",JSON.stringify(this.current.value))
          
          this.content = this.current !== ' ' ? JSON.stringify(this.current.value,null,2) : '',
          this.styles = newVal.styles;
        }
      }
    },

    data() {
      return {
        content: '', // 代码块
        //content: '',
        editorOptions: { // 设置代码编辑器的样式
          enableBasicAutocompletion: true,
          enableSnippets: true,
          enableLiveAutocompletion: true,
          tabSize: 2,
          fontSize: 25,
          showPrintMargin: false //去除编辑器里的竖线
        },
        styles: {},
        show1: true,
        show2: false,
        options22: [{
          value: '静态数据',
          label: '静态数据'
        }, {
          value: '数据库匹配',
          label: '数据库匹配'
        }],
        value: ''
      }
    }
  }
</script>

<style scoped>
  .s {
    height: 100%;
    width: 100%;
  }

  .btn{
    margin-top: 20px;
    width: 100%;
  }
  .cc {
    width: 90%;
    margin-left: 5%;
    margin-top: 5%;
  }

  .el-select {
    width: 100%
  }

  input {
    /* width: fit-content !important; */
    padding-left: 5px !important;
    padding-right: 0px !important;
  }

  .title {
    margin-left: 5px;
    font-size: 20px;
    align-items: center;
  }

  .el-select-dropdown {
    border: none !important;
  }

  .a {
    width: 100%;
    color: #757575;
  }

  .formBox {
    margin-top: 20px !important;
    height: 40px;
  }

  .dataCon {
    position: relative;
    height: 40px;
    margin-top: 20px;
    width: 96%;
    color: white;
    font-size: 20px;
    font-weight: 100;
    border-radius: 5px;
  }

  .data {
    margin-top: 10px;
    background: white;
    width: 100%;
    height: auto;
  }

  .formTitle {
    position: absolute;
    line-height: 40px;
    width: 35%;
    color: white;
    font-size: 20px;
    font-weight: 100;
    display: flex;
    justify-content: space-between;
  }

  .inputData {
    height: 200px;
    margin-top: 10px;
    border-radius: 5px;
    background: white;
    width: 100%;
  }

  .inp {
    position: absolute;
    right: 1%;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    width: 45%;
    border-radius: 5px;
    border: none !important;
  }

  .con {
    width: 100%;
    height: auto;
    border-radius: 5px;
    position: relative;
  }
 
  .el-button--commit:hover {
    background: rgb(230, 162, 60);
    border-color: rgb(230, 162, 60);
    color: #fff;
  }
  .el-button--commit {
    background: #fff;
    border-color: black;
    color: black;
  }
  .icon {
    float: right;
    padding-top: 0 !important;
  }
  
</style>