<template>
  <e-charts class="chart" :option="option" autoresize />
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
              color: this.styles.titleFontColor
            }
          },
          grid: {
            show: false,
            top: "20%", // 一下数值可为百分比也可为具体像素值
            right: "5%",
            bottom: "10%",
            left: "10%",
          },
          xAxis: {
            type: 'category',
            axisLabel: {
              textStyle: {
                color: "snow",
                fontSize: this.styles.fontSize,
              },
            },
          },
          yAxis: {
            type: 'value',
            splitLine: {
              show: this.styles.isShowLine
            },
            axisLabel: {
              textStyle: {
                color: "snow",
                fontSize: this.styles.fontSize,
              }
            }
          },
          series: [{
            symbolSize: 10,
            color: this.styles.areaColor,
            data: this.value,
            type: "scatter",
          }, ],
        };
      },
    },
  };
</script>

<style scoped>
</style>