<template>
  <div class="s">
    <div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="black" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="1" @click="show11">外观设置</el-menu-item>
        <el-menu-item index="2" @click="show22">数据绑定</el-menu-item>
      </el-menu>
    </div>
    <div v-show="show1" class="r" v-if="current">
      <el-form :model="styles">
        <el-form-item v-for="formItem in form" :key="formItem.key" :label="formItem.label">
          <component v-model="styles[formItem.key]" :is="formItem.component" />
        </el-form-item>
      </el-form>
    </div>
    

    <div class="cc" v-show="show2">
      <dataBinding :current="current" :form="currentForm"/>
      <!-- <el-select v-model="value" placeholder="请选择">
        <el-option v-for="item in options22" :key="item.value" :label="item.label" :value="item.value">
        </el-option>

      </el-select>
      <div class="a" v-if="value === '静态数据'">
        <div class="dataCon">数据内容</div>
        <div class="data">
          <div class="title">请输入JSON格式数据</div>
          <editor v-model="content" theme="chaos" :options=editorOptions @init="editorInit" lang="html" width="400"
            height="500"></editor>
        </div>
      </div>
      <div class="a" v-if="value === '数据库匹配'">
        <div class="dataCon">
          数据 ：
          <input class="inp" placeholder="请选择数据拖入" />
        </div>
        <div class="inputData"></div>
        <div class="dataCon">数据映射</div>
        <div class="con">
          <el-form size="small" class="border-box" style="padding: 10px">
            <el-form-item label="类目 ：" text-align: right>
              <br />
              <input class="inp" size="medium" placeholder="请拖入数据" />
            </el-form-item>
            <el-form-item label="值 ：" text-align: right>
              <br />
              <input class="inp" size="medium" placeholder="请拖入数据" />
            </el-form-item>
            <el-form-item label="筛选字段 ：" text-align: right>
              <br />
              <input class="inp" size="medium" placeholder="请拖入数据" />
            </el-form-item>
            <el-form-item label="排序字段 ：" text-align: right>
              <br />
              <input class="inp" size="medium" placeholder="请拖入数据" />
            </el-form-item>
          </el-form>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import dataBinding from '../components/dataBinding.vue'
  export default {
    name: "detailMenu",
    components: {
      editor: require('vue2-ace-editor'),
      dataBinding,
    },

    methods: {
      // reget(data){
      //   this.$set(this.current,"value",data);
      //   console.log("修改后",this.current);
      // },
      editorInit: function () {
        require('brace/ext/language_tools') //language extension prerequsite...
        require('brace/mode/html')
        require('brace/mode/javascript') //language
        require('brace/mode/less')
        require('brace/theme/chrome')
        require('brace/snippets/javascript') //snippet
      },
      show11() {
        this.show2 = false;
        this.show1 = true;
      },
      show22() {
        this.show1 = false;
        this.show2 = true;
      }
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
          this.styles = newVal.styles;
        }
      }
    },

    data() {
      return {
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
::v-deep .el-color-picker__trigger{
  width: 70px;
}
.r {
  height: 100%;
  width: 100%;
  margin-top: 20px;
  margin-right: 0%;
  background: rgb(18, 18, 18);
}

.btnde{
  margin-bottom: 25px;
}
::v-deep .el-form-item__label {
    vertical-align: middle;
    float: left;
    color: #DCDFE6;
    line-height: 40px;
    font-size: 20px;
    padding: 0;
    box-sizing: border-box;
    width: 30%;
    text-align: left;
    padding-left: 20px;
}
.el-input-number .el-input__inner {
    -webkit-appearance: none;
    padding-left: 80px;
    border-right: 100px;
    text-align: left;
    /* width: 50%; */
}
.el-input{
  width: 180px;
}
.el-input__inner {
    -webkit-appearance: none;
    background-color: #FFF;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #DCDFE6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    outline: 0;
    /* padding-right: 100px; */
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100% ;
    font-size: 17px;
}
::v-deep .el-form-item__content {
    line-height: 40px;
    font-size: 14px;
    position: absolute;
    right: 1%;
}

.el-menu-item{
  font-size: 20px;
}

</style>