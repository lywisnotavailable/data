// 折线图
<template>
  <div id="app">
    <div @mousedown="(e) => onWidgetMouseDown(e,'basicLine')" id="O">
      <div class="chartsName">基础折线图</div>
      <img src="../assets/line-simple1.png">      
    </div>
    <div @mousedown="(e) => onWidgetMouseDown(e,'areaLine')" id="T">
      <div class="chartsName">基础面积图</div>
      <img src="../assets/area-basic.png">
    </div>
    <div  @mousedown="(e) => onWidgetMouseDown(e,'smoothLine')" id="Th">
      <div class="chartsName">平滑折线图</div>
      <img src="../assets/line-smooth.png">
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
      console.log("widget",widget);
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