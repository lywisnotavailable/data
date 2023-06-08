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
    console.log(this.value[0]);
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
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}%",
        },
        legend: {
          show:this.styles.itemShow,
          top: "10%",
          data: ["Show", "Click", "Visit", "Inquiry", "Order"],
          itemHeight:this.styles.itemHeight,
          itemWidth:this.styles.itemWidth,
          textStyle: {
            color: "#FFFF",
            fontSize: this.styles.itemFontSize
          },
        },
        series: [
          {
            name: "Expected",
            type: "funnel",
            left: "10%",
            top: "20%",
            bottom: 20,
            width: "80%",
            label: {
              formatter: "{b}Expected",
              fontSize: "13",
              color: "white",
            },
            labelLine: {
              show: false,
            },
            itemStyle: {
              opacity: 0.7,
            },
            emphasis: {
              label: {
                position: "inside",
                formatter: "{b}Expected: {c}%",
              },
            },
            data: this.value[1],
          },
          {
            name: "Actual",
            type: "funnel",
            left: "10%",
            top: "20%",
            width: "80%",
            maxSize: "80%",
            label: {
              position: "inside",
              formatter: "{c}%",
              color: this.styles.comFontColor,
              textStyle: {
                fontSize: this.styles.comFontSize,
              },
            },
            itemStyle: {
              opacity: 0.5,
              borderColor: "#fff",
              borderWidth: 2,
            },
            emphasis: {
              label: {
                position: "inside",
                formatter: "{b}Actual: {c}%",
              },
            },
            data: this.value[0],
            // Ensure outer shape will not be over inner shape when hover.
            z: 100,
          },
        ],
      };
    },
  },
};
</script>

<style>
</style>