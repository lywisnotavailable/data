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
            type: "gauge",
            startAngle: 180,
            endAngle: 0,
            center: ["50%", "75%"],
            radius: "90%",
            min: 0,
            max: 1,
            splitNumber: 8,
            axisLine: {
              lineStyle: {
                width: 6,
                color: [
                  [0.25, "#FF6E76"],
                  [0.5, "#FDDD60"],
                  [0.75, "#58D9F9"],
                  [1, "#7CFFB2"],
                ],
              },
            },
            pointer: {
              icon: "path://M12.8,0.7l12,40.1H0.7L12.8,0.7z",
              length: "12%",
              width: 20,
              offsetCenter: [0, "-60%"],
              itemStyle: {
                color: "inherit",
              },
            },
            axisTick: {
              length: 12,
              lineStyle: {
                color: "inherit",
                width: 2,
              },
            },
            splitLine: {
              length: 20,
              lineStyle: {
                color: "snow",
                width: 5,
              },
            },
            axisLabel: {
              color: this.styles.fontColor,
              fontSize: this.styles.fontSize,
              distance: -60,
              rotate: "tangential",
              formatter: function (value) {
                if (value === 0.875) {
                  return "Grade A";
                } else if (value === 0.625) {
                  return "Grade B";
                } else if (value === 0.375) {
                  return "Grade C";
                } else if (value === 0.125) {
                  return "Grade D";
                }
                return "";
              },
            },
            title: {
              offsetCenter: [0, "-10%"],
              fontSize: 20,
            },
            detail: {
              fontSize: 30,
              offsetCenter: [0, "-35%"],
              valueAnimation: true,
              formatter: function (value) {
                return Math.round(value * 100) + "";
              },
              color: this.styles.pointerColor,
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