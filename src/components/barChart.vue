// 柱状图
<template>
  <div id="app">
    <div @mousedown="(e) => onWidgetMouseDown(e,'basicBar')" id="O">
      <div class="chartsName">基础柱状图</div>
      <img src="../assets/微信图片_20230331163038.png">      
    </div>
    <div @mousedown="(e) => onWidgetMouseDown(e,'barWithNegative')" id="T">
      <div class="chartsName">交错正负轴柱状图</div>
      <img src="../assets/111.png">
    </div>
    <div @mousedown="(e) => onWidgetMouseDown(e,'HBar')" id="Th">
      <div class="chartsName">条形图</div>
      <img src="../assets/222.png">
    </div>
   </div> 
</template>

<script>
import * as CONFIG from '@/constants/config'
export default {
  name: "barCharts",
  components:{
  },
  // 自定义指令 实现可拖动
  data () {
    return {
    }
  },
  methods: {
    onWidgetMouseDown(e,widget) {
      console.log("widget",widget)
      for(var i = 0;i < CONFIG.WIDGET_LIST.length;i++){
        if(CONFIG.WIDGET_LIST[i].type === widget){
          this.$emit('func',e.offsetX,e.offsetY,CONFIG.WIDGET_LIST[i]);
          return ;
        } 
      }
      this.$emit('func',e.offsetX,e.offsetY,widget);
    },
  }
};
</script>

<style scoped>
html,
body,
#app {
  display: flex;
  flex-direction: column;
}
.chartsName{
  color: snow;
  font-size:25px;
  width: 300px;
  height: 50px;
  background: rgb(18,18,18);
  position: relative;
  /* margin-top:20px; */
  padding-top:20px;
}
#T,#Th,#F {
  width: 80%;
  height: 22%;
  margin-left: 10%;
  text-align: center;
  margin-top: 29px; 
}
#O{
  width: 80%;
  height: 22%;
  margin-left: 10%;
  text-align: center;
}
img {
  width: 300px;
  height: 200px;
  background: rgba(0, 0, 0, 0);
}
</style>