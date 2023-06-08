<template>
  <e-charts class="chart" :option="option" autoresize/>
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
        grid:{
          show:false,
          top:'20%',    // 一下数值可为百分比也可为具体像素值
          right:'5%',
          bottom:'10%',
          left:'10%'
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
        legend: {
          top: '10%',
          show:this.styles.itemShow,
          itemHeight: this.styles.itemHeight,
          itemWidth: this.styles.itemWidth,
          data: ['Evaporation', 'Precipitation', 'Temperature'],
          textStyle: {
            color: "#FFFF", 
          }
        },
        xAxis: [
          {
            type: 'category',
            data:this.value[0],
            axisPointer: {
              type: 'shadow'
            },

            axisLabel: {
            textStyle: {
  
              color:'snow'
            }
          },
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: 'Precipitation',
            splitLine: {
              show: false,
            },
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: '{value} ml',
              textStyle: {
              
              color:'snow'
            }
            },

          },
          {
            type: 'value',
            name: 'Temperature',
            min: 0,
            max: 25,
            splitLine: {
              show: false,
            },
            interval: 5,
            axisLabel: {
              formatter: '{value} °C',
              textStyle: {
              
              color:'snow'
            }
            }
          }
        ],
        series: [
          {
            name: 'Evaporation',
            type: 'bar',
            color:this.styles.areaColorO,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' ml';
              }
            },
            data:this.value[1],
          },
          {
            name: 'Precipitation',
            type: 'bar',
            color: this.styles.areaColorT,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' ml';
              }
            },
            data:this.value[2],
          },
          {
            name: 'Temperature',
            type: 'line',
            yAxisIndex: 1,
            lineStyle: {
              color: this.styles.lineColor,
            },
            tooltip: {
              valueFormatter: function (value) {
                return value + ' °C';
              }
            },
            data: this.value[3],
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
</style>