<template>
  <div id="app">

    <div id="ww" class="menu">
      <div class="blockMenu">
        <div @click="xianShi1" title="柱状图">
          <svg t="1680183726398" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="6313" width="40" height="40">
            <path
              d="M95.743954 952.636499h914.090232a14.360374 14.360374 0 0 1 14.165326 13.70231v43.812551a14.019041 14.019041 0 0 1-14.140945 13.70231H38.521886a14.238469 14.238469 0 0 1-14.140945-14.140945V38.521886A14.360374 14.360374 0 0 1 38.156172 24.380941h43.812551c7.631234 0 13.70232 6.436568 13.70231 14.140945v914.114613zM163.839922 402.529332c0-20.284943 14.969898-36.79084 35.206078-36.790839h69.071206c19.455991 0 35.206078 16.993516 35.206078 36.81522v438.369315c0.09024 9.801138-3.535236 19.309705-10.215614 26.209511a33.840746 33.840746 0 0 1-24.990464 10.60571H199.070381c-19.382848-0.219428-35.011031-16.505897-35.206078-36.815221V402.529332z m209.212853-269.482538c0-19.6998 14.994279-35.49865 35.206078-35.49865h69.071205a35.596174 35.596174 0 0 1 35.206079 35.49865v709.192805c0.09024 9.508567-3.63276 18.627039-10.215614 25.307416A34.303984 34.303984 0 0 1 477.37882 877.713868h-69.071205c-19.358467 0-35.108555-15.92004-35.206078-35.596174V133.022413z m232.59410 415.378088c0-20.089895 14.945517-36.400745 35.157316-36.400745h69.022444c19.455991 0 35.181698 15.701326 35.181697 36.400745v292.912622c0.09024 9.801138-3.63276 19.1878-10.28807 25.990083A33.621317 33.621317 0 0 1 709.729186 877.713868h-68.998063a33.645698 33.645698 0 0 1-24.89294-10.410662 37.205316 37.205316 0 0 1-10.313138-25.990083V548.400501h0.09024z m209.115329-196.388478c0-19.334086 14.969898-35.059793 35.206078-35.059793h69.071205c19.455991 0 35.206078 16.091421 35.206079 35.059793v490.642052c0 19.334086-14.994279 35.059793-35.206079 35.059793h-69.071205a35.376745 35.376745 0 0 1-35.206078-35.059793V352.012023z"
              fill="#ffffff" p-id="6314"></path>
          </svg>
        </div>
      </div>
      <div class="blockMenu">
        <div @click="xianShi2" title="折线图">
          <svg t="1680183637646" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="6110" width="40" height="40">
            <path
              d="M176.664381 916.309333H1024V999.619048H24.380952V0h83.309715v869.571048l271.286857-380.781715L646.826667 616.838095 903.972571 136.533333l73.435429 39.326477-294.716952 550.521904-276.48-132.242285z"
              fill="#ffffff" p-id="6111"></path>
          </svg>
        </div>
      </div>
      <div class="blockMenu">
        <div @click="xianShi3" title="饼状图">
          <svg t="1680183785667" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="6719" width="40" height="40">
            <path
              d="M549.254095 0.219429v469.430857h469.430857C1018.684952 214.211048 804.693333 0.219429 549.254095 0.219429z"
              fill="#ffffff" p-id="6720"></path>
            <path
              d="M494.031238 517.973333V48.542476c-262.339048 0-469.430857 214.016-469.430857 469.430857 0 255.439238 213.991619 469.430857 469.430857 469.430857 262.339048 0 469.430857-213.991619 469.430857-469.430857H494.031238z"
              fill="#ffffff" p-id="6721"></path>
          </svg>
        </div>
      </div>
      <div class="blockMenu">
        <div @click="xianShi5" title="散点图">
          <svg t="1681434978967" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="4246" width="40" height="40">
            <path
              d="M990.2 1024H33.8C15.2 1024 0 1008.8 0 990.2V33.8C0 15.2 15.2 0 33.8 0c18.7 0 33.8 15.2 33.8 33.8v888.6c0 18.7 15.2 33.8 33.8 33.8H990c18.7 0 33.8 15.2 33.8 33.8 0.2 18.8-15 34-33.6 34z"
              p-id="4247" fill="#ffffff"></path>
            <path
              d="M189 883.9c-24.3 0-44-19.7-44-44s19.7-44 44-44 44 19.7 44 44-19.7 44-44 44zM269 745.9c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52zM321 594.2c-36.6 0-66.3-29.7-66.3-66.3 0-36.6 29.7-66.3 66.3-66.3 36.6 0 66.3 29.7 66.3 66.3 0 36.6-29.7 66.3-66.3 66.3zM441 867.9c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zM517 691.9c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zM589 519.9c-28.7 0-52-23.3-52-52s23.3-52 52-52 52 23.3 52 52-23.3 52-52 52zM689 306.2c-36.6 0-66.3-29.7-66.3-66.3 0-36.6 29.7-66.3 66.3-66.3 36.6 0 66.3 29.7 66.3 66.3 0 36.6-29.7 66.3-66.3 66.3zM761 711.9c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zM665 863.9c-15.5 0-28-12.5-28-28s12.5-28 28-28 28 12.5 28 28-12.5 28-28 28zM841 541.9c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zM923 338.8c-18.2 0-32.9-14.7-32.9-32.9 0-18.1 14.7-32.9 32.9-32.9 18.1 0 32.9 14.7 32.9 32.9 0 18.1-14.7 32.9-32.9 32.9z"
              p-id="4248" fill="#ffffff"></path>
          </svg>
        </div>
      </div>
      <div class="blockMenu">
        <div @click="xianShi6" title="漏斗图">
          <svg t="1681434850564" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="4008" width="40" height="40">
            <path
              d="M853.312 384L746.688 640H277.312L170.688 384h682.624zM880 320l80-192H64l80 192h736zM720 704l-80 192H384l-80-192h416z"
              fill="#ffffff" p-id="4009"></path>
          </svg>
        </div>
      </div>
      <div class="blockMenu">
        <div @click="xianShi7" title="仪表板">
          <svg t="1681434901405" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="3112" width="40" height="40">
            <path
              d="M284.281905 870.936381c-85.162667-74.532571-134.339048-184.58819-134.339048-300.592762 0-215.79581 168.082286-391.168 374.881524-391.168s374.808381 175.37219 374.808381 391.168c0.073143 116.150857-49.371429 226.304-134.924191 300.592762L839.68 975.238095C952.124952 879.420952 1024 733.988571 1024 570.343619 1024 282.160762 800.329143 48.761905 524.166095 48.761905 248.003048 48.761905 24.380952 282.185143 24.380952 570.343619 24.84419 727.405714 92.696381 876.007619 209.334857 975.238095l74.971429-104.301714z"
              fill="#ffffff" p-id="3113"></path>
            <path
              d="M148.821333 570.343619c0-215.79581 167.375238-391.168 373.321143-391.168 77.141333 0 148.699429 24.746667 208.432762 66.486857L804.571429 140.678095C723.72419 82.651429 626.639238 48.761905 522.142476 48.761905 247.125333 48.761905 24.380952 282.185143 24.380952 570.343619 24.380952 733.379048 95.963429 879.420952 207.945143 975.238095l74.654476-104.301714c-84.821333-74.532571-133.802667-184.58819-133.778286-300.592762z"
              fill="#ffffff" p-id="3114"></path>
            <path
              d="M569.61219 627.492571c5.022476-7.119238 8.777143-15.11619 11.093334-23.576381L731.428571 268.190476 470.503619 523.873524a80.700952 80.700952 0 0 0-18.285714 18.139428c-23.113143 32.914286-15.408762 79.09181 16.822857 102.64381 32.256 23.576381 77.507048 15.725714 100.62019-17.164191h-0.048762z"
              fill="#ffffff" p-id="3115"></path>
          </svg>
        </div>
      </div>
      <div class="blockMenu">
        <div @click="xianShi4" title="添加">
          <svg t="1680184313823" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="7769" width="40" height="40">
            <path
              d="M925.696 384q19.456 0 37.376 7.68t30.72 20.48 20.48 30.72 7.68 37.376q0 20.48-7.68 37.888t-20.48 30.208-30.72 20.48-37.376 7.68l-287.744 0 0 287.744q0 20.48-7.68 37.888t-20.48 30.208-30.72 20.48-37.376 7.68q-20.48 0-37.888-7.68t-30.208-20.48-20.48-30.208-7.68-37.888l0-287.744-287.744 0q-20.48 0-37.888-7.68t-30.208-20.48-20.48-30.208-7.68-37.888q0-19.456 7.68-37.376t20.48-30.72 30.208-20.48 37.888-7.68l287.744 0 0-287.744q0-19.456 7.68-37.376t20.48-30.72 30.208-20.48 37.888-7.68q39.936 0 68.096 28.16t28.16 68.096l0 287.744 287.744 0z"
              p-id="7770" fill="#ffffff"></path>
          </svg>
        </div>
      </div>
    </div>

    <div class="pici">
      <div class="pic" v-show="showPic">
      </div>
      <div class="pic1" v-show="showPic1">
        <barChart @func=getMsgFromSon></barChart>
      </div>
      <div class="pic2" v-show="showPic2">
        <lineChart @func=getMsgFromSon></lineChart>
      </div>
      <div class="pic3" v-show="showPic3">
        <pieChart @func=getMsgFromSon></pieChart>
      </div>
      <div class="pic4" v-show="showPic4">
        <addFile></addFile>
      </div>
      <div class="pic5" v-show="showPic5">
        <scatterChart @func=getMsgFromSon></scatterChart>
      </div>
      <div class="pic6" v-show="showPic6">
        <funnelChart @func=getMsgFromSon></funnelChart>
      </div>
      <div class="pic7" v-show="showPic7">
        <gaugeChart @func=getMsgFromSon></gaugeChart>
      </div>
    </div>
    <!-- <div id="hahahaha" class="centerDraw"
     v-bind:style="{backgroundImage:'url(' + bg + ')',
        backgroundRepeat:'no-repeat',
        backgroundSize:'100% 100%'}">
    </div> -->
    <div class="centerDraw" ref="centerDraw" @dragover="e => e.preventDefault()" @drop="onDrop" v-bind:style="{backgroundImage:'url(' + bg + ')',
      backgroundRepeat:'no-repeat',
      backgroundSize:'100% 100%'}">
      <vue-drag-resize v-for="(item, i) in list" :key="item.id" ref="widget" class="box" :x="item.x" :y="item.y"
        :z="item.z" :w="item.w" :h="item.h" :isActive="item.focused"
        @contextmenu.native.prevent="onContextMenuOpen($event,item)" @click.native="onFocus(item)">
        <component style="position:absolute;" :is="item.component" ref="inner-widget" :value="item.value"
          :styles="item.styles" @drop.native.stop="onDrop($event,i)" />
      </vue-drag-resize>
    </div>

    <!-- 右键配置 -->
    <context-menu ref="contextMenu">
      <li>
        <a @click.prevent="onLayerTop">置顶</a>
      </li>
      <li>
        <a @click.prevent="onLayerBottom">置底</a>
      </li>
      <li>
        <a @click.prevent="onLayerRemove">删除</a>
      </li>
    </context-menu>

    <!-- 右侧配置项 -->
    <div class="rmenu">
      <detail :current="current" :form="currentForm" @change="onStyleChange" />
    </div>

  </div>
</template>

<script>
  let currentId = 0;
  let widgetX = 0;
  let widgetY = 0;
  let currentWidget1 = null;
  let currentWidget2 = null;

  // 左侧可拖拽图表封装
  import barChart from './barChart.vue';
  import lineChart from './lineChart.vue';
  import pieChart from './pieChart.vue';
  import detail from './detail.vue';
  import scatterChart from './scatterChart.vue';
  import funnelChart from './funnelChart.vue';
  import gaugeChart from './gaugeChart.vue';


  // 各种图表
  import barWithNegative from '../components/bar/barWithNegative.vue'

  import smoothLine from '../components/line/smoothLine.vue'
  import pieBorder from '@/components/pie/pieBorder.vue'
  import pieHalf from '@/components/pie/pieHalf.vue'
  import basicBar from '../components/bar/basicBar.vue'
  import areaLine from '../components/line/areaLine.vue'
  import basicLine from '../components/line/basicLine.vue'
  import basicPie from '../components/pie/basicPie.vue'
  import HBar from '../components/bar/HBar.vue'
  import basicScatter from '../components/Scatter/basicScatter.vue'
  import exponentialRegression from '../components/Scatter/exponentialRegression.vue'
  import spFunnel from '../components/funnel/spFunnel.vue'
  import basicFunnel from '../components/funnel/basicFunnel.vue'
  import basicGauge from '../components/Gauge/basicGauge.vue'
  import gradeGauge from '../components/Gauge/gradeGauge.vue'
  import barLine from '../components/line/barLine.vue'
  // 右键配置
  import ContextMenu from 'vue-context';
  // 图表信息配置（没啥卵用）
  import * as CONFIG from '@/constants/config'
  import { cloneDeep } from 'lodash';
 


  export default {
    components: {
      exponentialRegression,
      barLine,
      barChart,
      basicGauge,
      gradeGauge,
      spFunnel,
      pieBorder,
      basicFunnel,
      funnelChart,
      gaugeChart,
      scatterChart,
      pieHalf,
      smoothLine,
      areaLine,
      lineChart,
      pieChart,
      detail,
      barWithNegative,
      basicBar,
      basicLine,
      basicPie,
      HBar,
      basicScatter,
      ContextMenu,
    },
    data() {
      let infoArray = [];
      let sizeArray = [];
      let list = [];
      return {
        list,
        widgetList: CONFIG.WIDGET_LIST,
        num: 1,
        index: 1,
        showPic: true,
        showPic1: false,
        showPic2: false,
        showPic3: false,
        showPic4: false,
        showPic5: false,
        showPic6: false,
        showPic7: false,
        bg: require("../assets/a14.png")
      }
    },
    created() {
      if (localStorage.getItem('info') === null) {
        console.log("没有东西")
      } else {
        this.createEvent();
        localStorage.setItem('info', null);
      }
    },
    mounted() {
      window.addEventListener('storage', this.createEvent)
    },
    destroyed() {
      window.removeEventListener('storage', this.createEvent)
    },
    computed: {
      current() {
        return this.list.find(item => item.focused);
      },
      currentForm() {
        if (!this.current) {
          return [];
        }
        return CONFIG.WIDGET_LIST.find(item => this.current.type === item.type).styleForm;
      },
    },
    methods: {
      onStyleChange(id, newStyles) {
        this.list = this.list.map((item) => {
          if (item.id == id) {
            item.style = newStyles;
          }
          return item;
        });
      },
      // 删除
      onLayerRemove() {
        this.list = this.list.filter(item => !item.focused);
      },
      // 置顶
      onLayerTop() {
        const currentItem = this.list.find(item => item.focused);
        const maxZ = Math.max(...this.list.map(item => item.z)) || 0;
        if (currentItem.z === maxZ) {
          alert('已经是最顶层了');
          return;
        }
        currentItem.z = maxZ + 1;
      },
      // 置底
      onLayerBottom() {
        const currentItem = this.list.find(item => item.focused);
        const minZ = Math.min(...this.list.map(item => item.z)) || 0;
        if (currentItem.z === minZ) {
          alert('已经是最底层了');
          return;
        }
        // z不能为 -1
        if (minZ - 1 < 0) {
          this.list = this.list.map(item => {
            item.z -= minZ - 1;
            return item;
          });
          currentItem.z = 0;
        } else {
          currentItem.z = minZ - 1;
        }
      },
      // 当前获取焦点，其他取消焦点
      onFocus(currentItem) {
        console.log("现在点击的是",currentItem)
        this.list = this.list.map(item => {
          item.focused = item.id === currentItem.id;
          return item;
        })
      },
      // 右键配置
      onContextMenuOpen(e, item) {
        // 打开右键
        this.$refs.contextMenu.open(e);
        this.onFocus(item);
      },
      // 获取props传参
      getMsgFromSon(data1, data2, data3) {
        widgetX = data1;
        widgetY = data2;
        currentWidget1 = data3;
      },
      onDrop(e, i) {
        console.log(e.target, this.$refs.centerDraw)
        let x = e.offsetX - widgetX;
        let y = e.offsetY - widgetY;
        if (i !== undefined) {
          const currentWidget = this.$refs['widget'][i].$el;
          x = e.offsetX + currentWidget.offsetLeft - widgetX;
          y = e.offsetY + currentWidget.offsetTop - widgetY;
        }
        this.$refs.contextMenu.close();
        const newItem = {
          id: currentId++,
          x: x,
          y: y,
          z: !this.list.length ? 0 : Math.max(...this.list.map(item => item.z)) + 1, // 新增图表层级最高
          w: '500',
          h: '400',
          label: currentWidget1.label,
          component: currentWidget1.component,
          value: cloneDeep(currentWidget1.default.value),
          type: currentWidget1.type,
          styles: cloneDeep(currentWidget1.styles)
        };
        this.list.push(newItem)
        this.onFocus(newItem);
      },
      createEvent() {
        console.log(JSON.parse(localStorage.getItem('info')));
        this.infoArray = JSON.parse(localStorage.getItem('info'));
        this.sizeArray = JSON.parse(localStorage.getItem('size'));
        for (let i = 0; i < this.infoArray.length; i += 2) {
          if (this.infoArray[i] == 'Bar') {

            for (var j = 0; j < CONFIG.WIDGET_LIST.length; j++) {
              if (CONFIG.WIDGET_LIST[j].type === 'basicBar') {
                currentWidget2 = CONFIG.WIDGET_LIST[j];
              }
            }

            let left1 = (this.infoArray[i + 1][0] / this.sizeArray[0]) * 1725;
            let top1 = (this.infoArray[i + 1][1] / this.sizeArray[1]) * 1431 - 110;
            let height1 = (this.infoArray[i + 1][3] / this.sizeArray[1]) * 1431 - top1;
            let width1 = (this.infoArray[i + 1][2] / this.sizeArray[0]) * 1725 - left1;
            this.list.push({
              id: currentId++,
              x: left1,
              y: top1,
              w: width1,
              h: height1,
              // component: 'basicBar',
              label: currentWidget2.label,
              component: currentWidget2.component,
              value: currentWidget2.default.value,
              type: currentWidget2.type,
              styles: currentWidget2.styles
            })
          } else if (this.infoArray[i] == 'Line') {
            console.log("Line");
            for (var j2 = 0; j2 < CONFIG.WIDGET_LIST.length; j2++) {
              if (CONFIG.WIDGET_LIST[j2].type === 'basicLine') {
                currentWidget2 = CONFIG.WIDGET_LIST[j2];
              }
            }
            let left2 = (this.infoArray[i + 1][0] / this.sizeArray[0]) * 1725;
            let top2 = (this.infoArray[i + 1][1] / this.sizeArray[1]) * 1431 - 110;
            let height2 = (this.infoArray[i + 1][3] / this.sizeArray[1]) * 1431 - top2;
            let width2 = (this.infoArray[i + 1][2] / this.sizeArray[0]) * 1725 - left2;
            this.list.push({
              id: currentId++,
              x: left2,
              y: top2,
              w: width2,
              h: height2,
              label: currentWidget2.label,
              component: currentWidget2.component,
              value: currentWidget2.default.value,
              type: currentWidget2.type,
              styles: currentWidget2.styles
            })
          } else if (this.infoArray[i] == 'Pie') {
            console.log("Pie");
            for (var j3 = 0; j3 < CONFIG.WIDGET_LIST.length; j3++) {
              if (CONFIG.WIDGET_LIST[j3].type === 'basicPie') {
                currentWidget2 = CONFIG.WIDGET_LIST[j3];
              }
            }
            let left3 = (this.infoArray[i + 1][0] / this.sizeArray[0]) * 1725;
            let top3 = (this.infoArray[i + 1][1] / this.sizeArray[1]) * 1431 - 110;
            let height3 = (this.infoArray[i + 1][3] / this.sizeArray[1]) * 1431 - top3;
            let width3 = (this.infoArray[i + 1][2] / this.sizeArray[0]) * 1725 - left3;
            this.list.push({
              id: currentId++,
              x: left3,
              y: top3,
              w: width3,
              h: height3,
              label: currentWidget2.label,
              component: currentWidget2.component,
              value: currentWidget2.default.value,
              type: currentWidget2.type,
              styles: currentWidget2.styles
            })
          } else if (this.infoArray[i] == 'Doughnut') {
            console.log("Doughnut");
            for (var j4 = 0; j4 < CONFIG.WIDGET_LIST.length; j4++) {
              if (CONFIG.WIDGET_LIST[j4].type === 'pieBorder') {
                currentWidget2 = CONFIG.WIDGET_LIST[j4];
              }
            }
            let left4 = (this.infoArray[i + 1][0] / this.sizeArray[0]) * 1725;
            let top4 = (this.infoArray[i + 1][1] / this.sizeArray[1]) * 1431 - 110;
            let height4 = (this.infoArray[i + 1][3] / this.sizeArray[1]) * 1431 - top4;
            let width4 = (this.infoArray[i + 1][2] / this.sizeArray[0]) * 1725 - left4;
            this.list.push({
              id: currentId++,
              x: left4,
              y: top4,
              w: width4,
              h: height4,
              label: currentWidget2.label,
              component: currentWidget2.component,
              value: currentWidget2.default.value,
              type: currentWidget2.type,
              styles: currentWidget2.styles
            })
          } else if (this.infoArray[i] == 'HBar') {
            for (var j5 = 0; j5 < CONFIG.WIDGET_LIST.length; j5++) {
              if (CONFIG.WIDGET_LIST[j5].type === 'HBar') {
                currentWidget2 = CONFIG.WIDGET_LIST[j5];
              }
            }
            console.log("HBar");
            let left5 = (this.infoArray[i + 1][0] / this.sizeArray[0]) * 1725;
            let top5 = (this.infoArray[i + 1][1] / this.sizeArray[1]) * 1431 - 110;
            let height5 = (this.infoArray[i + 1][3] / this.sizeArray[1]) * 1431 - top5;
            let width5 = (this.infoArray[i + 1][2] / this.sizeArray[0]) * 1725 - left5;
            this.list.push({
              id: currentId++,
              x: left5,
              y: top5,
              w: width5,
              h: height5,
              label: currentWidget2.label,
              component: currentWidget2.component,
              value: currentWidget2.default.value,
              type: currentWidget2.type,
              styles: currentWidget2.styles
            })
          } else if (this.infoArray[i] == 'BarLine') {
            for (var j6 = 0; j6 < CONFIG.WIDGET_LIST.length; j6++) {
              if (CONFIG.WIDGET_LIST[j6].type === 'barLine') {
                currentWidget2 = CONFIG.WIDGET_LIST[j6];
              }
            }
            console.log("BarLine");
            let left6 = (this.infoArray[i + 1][0] / this.sizeArray[0]) * 1725;
            let top6 = (this.infoArray[i + 1][1] / this.sizeArray[1]) * 1431 - 110;
            let height6 = (this.infoArray[i + 1][3] / this.sizeArray[1]) * 1431 - top6;
            let width6 = (this.infoArray[i + 1][2] / this.sizeArray[0]) * 1725 - left6;
            this.list.push({
              id: currentId++,
              x: left6,
              y: top6,
              w: width6,
              h: height6,
              label: currentWidget2.label,
              component: currentWidget2.component,
              value: cloneDeep(currentWidget2.default.value),
              type: currentWidget2.type,
              styles: cloneDeep(currentWidget2.styles)
            })
          } else if (this.infoArray[i] == 'Scatter') {
            console.log("Scatter");
            for (var j7 = 0; j7 < CONFIG.WIDGET_LIST.length; j7++) {
              if (CONFIG.WIDGET_LIST[j7].type === 'basicScatter') {
                currentWidget2 = CONFIG.WIDGET_LIST[j7];
              }
            }
            let left7 = (this.infoArray[i + 1][0] / this.sizeArray[0]) * 1725;
            let top7 = (this.infoArray[i + 1][1] / this.sizeArray[1]) * 1431 - 110;
            let height7 = (this.infoArray[i + 1][3] / this.sizeArray[1]) * 1431 - top7;
            let width7 = (this.infoArray[i + 1][2] / this.sizeArray[0]) * 1725 - left7;
            this.list.push({
              id: currentId++,
              x: left7,
              y: top7,
              w: width7,
              h: height7,
              label: currentWidget2.label,
              component: currentWidget2.component,
              value: currentWidget2.default.value,
              type: currentWidget2.type,
              styles: currentWidget2.styles
            })
          } else {
            console.log("None");
          }
        }
        localStorage.setItem('info', null);
      },

      xianShi1() {
        console.log("隐藏pici,显示pic1");
        this.showPic = false;
        this.showPic2 = false;
        this.showPic3 = false;
        this.showPic4 = false;
        this.showPic5 = false;
        this.showPic6 = false;
        this.showPic7 = false;
        this.showPic1 = true;
      },
      xianShi2() {
        console.log("隐藏pici,显示pic2");
        this.showPic = false;
        this.showPic1 = false;
        this.showPic3 = false;
        this.showPic4 = false;
        this.showPic5 = false;
        this.showPic6 = false;
        this.showPic7 = false;
        this.showPic2 = true;
      },
      xianShi3() {
        console.log("隐藏pici,显示pic3");
        this.showPic = false;
        this.showPic2 = false;
        this.showPic1 = false;
        this.showPic4 = false;
        this.showPic5 = false;
        this.showPic6 = false;
        this.showPic7 = false;
        this.showPic3 = true;
      },
      xianShi5() {
        console.log("隐藏pici,显示pic3");
        this.showPic = false;
        this.showPic2 = false;
        this.showPic1 = false;
        this.showPic4 = false;
        this.showPic3 = false;
        this.showPic6 = false;
        this.showPic7 = false;
        this.showPic5 = true;
      },
      xianShi6() {
        console.log("隐藏pici,显示pic3");
        this.showPic = false;
        this.showPic2 = false;
        this.showPic1 = false;
        this.showPic4 = false;
        this.showPic3 = false;
        this.showPic5 = false;
        this.showPic7 = false;
        this.showPic6 = true;
      },
      xianShi7() {
        console.log("隐藏pici,显示pic3");
        this.showPic = false;
        this.showPic2 = false;
        this.showPic1 = false;
        this.showPic4 = false;
        this.showPic3 = false;
        this.showPic5 = false;
        this.showPic6 = false;
        this.showPic7 = true;
      },
      xianShi4() {

        this.$router.push('/trueFirstView');
        console.log("隐藏pici,显示pic4");
        this.showPic = false;
        this.showPic2 = false;
        this.showPic3 = false;
        this.showPic1 = false;
        this.showPic4 = true;
      },
     
    }

  };
</script>

<style scoped>
  html,
  body,
  #app {
    width: 100%;
    height: 100%;
    display: flex;
  }

  .rmenu {
    height: 100%;
    width: 23%;
    margin-right: 0%;
    background: rgb(18, 18, 18);
  }

  .menu {
    height: 100%;
    width: 5%;
    margin-left: 0%;
    background: rgb(18, 18, 18);
  }

  .blockMenu {
    text-align: center;
    margin-top: 60px;
  }

  .pic {
    width: 15%;
    height: 100%;
    margin-left: 1%;
    background: #1b1b20;
  }

  .pic1 {
    width: 15%;
    height: 100%;
    margin-left: 1%;
    background: #1b1b20;
  }

  .pic2 {
    width: 15%;
    height: 100%;
    margin-left: 1%;
    background: rgb(255, 255, 255);
  }

  .pic3 {
    width: 15%;
    height: 100%;
    margin-left: 1%;
    background: rgb(255, 255, 255);
  }

  .pic5 {
    width: 15%;
    height: 100%;
    margin-left: 1%;
    background: rgb(255, 255, 255);
  }

  .pic6 {
    width: 15%;
    height: 100%;
    margin-left: 1%;
    background: rgb(255, 255, 255);
  }

  .pic7 {
    width: 15%;
    height: 100%;
    margin-left: 1%;
    background: rgb(255, 255, 255);
  }

  .pici {
    width: 15%;
    height: 100%;
    margin-left: 1%;
    background: #1b1b20;
  }

  .centerDraw {
    background: rgba(255, 255, 255, 0.171);
    margin-left: 0.8%;
    width: 80%;
    height: 100%;
    position: relative;
  }

  .aaaa {
    position: absolute;
    width: 200px;
    height: 200px;
  }
</style>