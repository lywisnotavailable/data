<template>
  <e-charts class="chart" :option="option" autoresize/>
</template>

<script>
export default {
  props: {
    value: Array,
    styles: Object,
  },
  updated(){
    console.log(this.styles)
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
        xAxis: {
          show: this.styles.xAxisVisible,
          type: 'category',
          data: this.value.map(item => item.name),//['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          axisLabel: {
            textStyle: {
              fontSize: this.styles.fontSize,
              color:'snow',
            }
          }
        },
        yAxis: {
          show: this.styles.yAxisVisible,
          type: 'value',
          splitLine:{
            show:this.styles.isShowLine 
          },
          axisLabel: {
            textStyle: {
              fontSize: this.styles.fontSize,
              color:'snow',
            }
          }
        },
        series: [
          {
            data: this.value.map(item => item.value), //[120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            color: this.styles.areaColor,
            barWidth:this.styles.itemBorderWidth,
            itemStyle: {
                normal: {
                  barBorderRadius:[this.styles.itemBorderRadius,this.styles.itemBorderRadius,0,0]
                }
            }
          }
        ]
      }
    }
  },
}
</script>

<style scoped>
</style>