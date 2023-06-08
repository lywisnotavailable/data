<template>
  <e-charts class="chart" :option="option" autoresize />
</template>

<script>
  export default {
    props: {
      value: Array,
      styles: Object,
    },
    updated() {
      console.log(this.styles)
    },
    computed: {
      option() {
        return {
          grid: {
            show: false,
            top: '20%', // 一下数值可为百分比也可为具体像素值
            right: '5%',
            bottom: '10%',
            left: '10%'
          },
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
          xAxis: {
            show: this.styles.xAxisVisible,
            type: 'category',
            data: this.value.map(item => item.name),
            axisLabel: {
              textStyle: {
                fontSize: this.styles.fontSize,
                color: 'snow'
              }
            }
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
                color: 'snow'
              }
            }
          },
          series: [{
            data: this.value.map(item => item.value),
            type: 'line',
            lineStyle: {
              color: this.styles.lineColor,
            }
          }]
        }
      }
    }
  }
</script>

<style scoped>
</style>