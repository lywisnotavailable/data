import VueRouter from "vue-router";
import Vue from "vue";

import Bar from '../components/barChart';
import Line from '../components/lineChart.vue'
import Pie from '../components/pieChart.vue'
import DetailMenu from '../components/detail.vue'
import homeView from '../components/HomeView.vue'
import aheadView from '../components/aheadView.vue'
import trueFirstView from '../components/trueFirstView.vue'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'aheadView',
      component: aheadView,
    },
    {
      path: '/trueFirstView',
      name: 'trueFirstView',
      component: trueFirstView,
    },
    {
      path: '/bar',
      name: 'bar',
      component: Bar,
      children:[{
        path:'detail',
				component:DetailMenu,
      }]
    },
    {
      path: "/line",
      component: Line,
      meta: {
        title: "折线图",
      },
    },
    {
      path: "/pie",
      component: Pie,
      meta: {
        title: "饼状图",
      },
    },
    {
      path: "/homeView",
      component: homeView,
    },
  ],
});
