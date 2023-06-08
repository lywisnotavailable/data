<template>
  <e-charts class="chart" :option="option" autoresize />
</template>

<script>
  export default {
    props: {
      value: Array,
      styles: Object,
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
              color: this.styles.titleFontColor
            }
          },
          grid: {
            show: false,
            top: '18%', // 一下数值可为百分比也可为具体像素值
            right: '5%',
            bottom: '10%',
            left: '10%'
          },
          xAxis: {
            show: this.styles.xAxisVisible,
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              textStyle: {
                fontSize: this.styles.fontSize,
                color: 'snow',
              }
            },
            data: this.value.map(item => item.name), // ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
          yAxis: {
            show: this.styles.yAxisVisible,
            type: 'value',
            splitLine: {
              show: this.styles.isShowLine
            },
            axisLabel: {
              textStyle: {
                fontSize: this.styles.fontSize,
                color: 'snow',
              }
            }
          },
          series: [{
            data: this.value.map(item => item.value), // [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {
              color: this.styles.areaColor,
            },
            lineStyle: {
              color: this.styles.lineColor,
            }
          }]
        }
      }
    },
  }
</script>

<style scoped>

</style>