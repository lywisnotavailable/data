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
            name: "Funnel",
            type: "funnel",
            left: "10%",
            top: "20%",
            bottom: 20,
            width: "80%",
            min: 0,
            max: 100,
            minSize: "0%",
            maxSize: "100%",
            sort: "descending",
            gap: 2,
            label: {
              show: true,
              position: "inside",
              color: this.styles.comFontColor,
              textStyle: {
                fontSize: this.styles.comFontSize,
              },
            },
            labelLine: {
              length: 10,
              lineStyle: {
                width: 1,
                type: "solid",
              },
            },
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 1,
            },
            emphasis: {
              label: {
                fontSize: 20,
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