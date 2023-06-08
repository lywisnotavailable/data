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
            show:this.styles.itemShow,
            itemHeight: this.styles.itemHeight,
            itemWidth: this.styles.itemWidth,
            top: '40',
            left: '50',
            // top left 修改图例的位置
            textStyle: {
              color: "#FFFF",
              fontSize: 20
            }
          },
          grid: {
            top: 90,
            left: '2%',
            right: '4%',
            bottom: '5%',
            containLabel: true
          },
          xAxis: {
            show: this.styles.xAxisVisible,
            type: 'value',
            boundaryGap: [0, 0.01],
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
          yAxis: {
            show: this.styles.yAxisVisible,
            type: 'category',
            axisLabel: {
              textStyle: {
                fontSize: this.styles.fontSize,
                color: 'snow'
              }
            },
            data: this.value.map(item => item.name),
          },
          series: [{
              name: '2011',
              type: 'bar',
              color: this.styles.areaColorO,
              barWidth: this.styles.itemBorderWidth,
              data: this.value.map(item => item.value),
              itemStyle: {
                normal: {
                  barBorderRadius: [0, this.styles.itemBorderRadius, this.styles.itemBorderRadius, 0]
                }
              }
            },
            {
              name: '2012',
              type: 'bar',
              color: this.styles.areaColorT,
              barWidth: this.styles.itemBorderWidth,
              data: this.value.map(item => item.value2),
              itemStyle: {
                normal: {
                  barBorderRadius: [0, this.styles.itemBorderRadius, this.styles.itemBorderRadius, 0]
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