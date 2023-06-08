<template>
  <e-charts class="chart" :option="option" autoresize />
</template>

<script>
  import * as ecStat from 'echarts-stat';
  export default {
    props: {
      value: Array,
      styles: Object,
    },
    computed: {
      option() {
        this.$echarts.registerTransform(ecStat.transform.regression);
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
          dataset: [{
              source: this.value,
            },
            {
              transform: {
                type: 'ecStat:regression',
                config: {
                  method: 'exponential'
                }
              }
            }
          ],
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
            },
          },
          xAxis: {
            type: 'category',
            splitLine: {
              lineStyle: {
                type: "dashed",
              },
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#FFFFFF",
                fontSize: this.styles.fontSize, //更改坐标轴文字大小
              },
            },
          },
          yAxis: {
            splitLine: {
              show: this.styles.isShowLine,
              lineStyle: {
                type: "dashed",
              },
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#FFFFFF",
                fontSize: this.styles.fontSize, //更改坐标轴文字大小
              },
            },
          },
          series: [{
              name: "scatter",
              type: "scatter",
              color: this.styles.areaColor,
              datasetIndex: 0,
            },
            {
              name: "line",
              type: "line",
              color: this.styles.lineColor,
              datasetIndex: 1,
              symbolSize: 0.1,
              symbol: "circle",
              label: {
                show: true,
                fontSize: this.styles.showFontSize,
                color: this.styles.showColor,
              },
              labelLayout: {
                dx: -20
              },
              encode: {
                label: 2,
                tooltip: 1
              },
            },
          ],
        };
      },
    },
  };
</script>

<style>
</style>