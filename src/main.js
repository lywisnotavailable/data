import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import * as echarts from 'echarts'
import VueDragResize from 'vue-drag-resize'
import ECharts from 'vue-echarts'
import 'echarts';
import 'vue-context/dist/css/vue-context.css';

Vue.component('vue-drag-resize', VueDragResize);
Vue.component('ECharts', ECharts);
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

Vue.use(ElementUI)
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')