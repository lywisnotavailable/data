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
            color: this.styles.titleFontColor,
          },
        },
        series: [
          {
            name: "Pressure",
            type: "gauge",
            center: ["50%", "60%"],
            detail: {
              formatter: "{value}",
              color: "snow",
            },
            itemStyle: {
              color: this.styles.fontColor,
            },
            axisLabel: {
              color: this.styles.pointerColor,
            },
            axisLine: {
              lineStyle: {
                color: [[1,this.styles.cricleColor]],
              },
            },
            data: this.value,
          },
        ],
      };
    },
  },
};
</script>

<style>
</style>