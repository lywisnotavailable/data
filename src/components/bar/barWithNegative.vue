<template>
  <e-charts class="chart" :option="option" autoresize/>
</template>

<script>
export default {
  props: {
    value: Array,
    styles: Object,
  },
  created() {
    console.log(this.value);
  },
  computed: {
    option() {
      return {
        title: {
          text: this.styles.title,
          left: this.styles.titleLeft,
          top: this.styles.titleTop,
          show: this.styles.isShowTitle,
          textStyle: {
            fontSize: this.styles.titleFontSize,
            color: this.styles.titleFontColor,
          },
        },
        grid: {
          top:90,
          bottom: 15,
        },
        xAxis: {
          show: this.styles.xAxisVisible,
          type: "value",
          
          axisLabel:{
            textStyle: {
              fontSize: this.styles.fontSize,
              color:'snow'
            },
          },
          position: "top",
          splitLine: {
            show:this.styles.isShowLine,
            lineStyle: {
              type: "dashed",
            },
          },
        },
        yAxis: {
          show: this.styles.yAxisVisible,
          type: "category",
          axisLine: { show: false },
          axisLabel: {
            show: false,
            
          },
          axisTick: { show: false },
          splitLine: { show: false },
          data: this.value.map((item) => item.name),
        },
        series: [
          {
            name: "Cost",
            type: "bar",
            stack: "Total",
            label: {
              show: true,
              formatter: "{b}",
              textStyle: {
                fontSize: this.styles.fontSize,
              },
            },
            color: this.styles.areaColor,
            barWidth: this.styles.itemBorderWidth,
            itemStyle: {
              normal: {
                barBorderRadius: [
                  0,
                  this.styles.itemBorderRadius,
                  this.styles.itemBorderRadius,
                  0,
                ],
              },
            },
            data: this.value.map((item) => item.value),
          },
        ],
      };
    },
  },
};
</script>

<style scoped>
</style>