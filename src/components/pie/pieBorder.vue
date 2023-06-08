<template>
  <e-charts class="chart" :option="option" autoresize />
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
        grid: {
          left: "5%", // 与容器左侧的距离
          right: "5%", // 与容器右侧的距离
          bottom: "0%",
          containLabel: true,
        },
        legend: {
          show:this.styles.itemShow,
          top: "10%",
          left: "center",
          itemHeight:this.styles.itemHeight,
          itemWidth:this.styles.itemWidth,
          textStyle: {
            color: "#FFFF",
            fontSize: this.styles.itemFontSize,
          },
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: ["30%", "70%"],
            center: ["50%", "61%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            itemStyle: {
              borderRadius: this.styles.itemBorderRadius,
              borderColor: '#fff',
              borderWidth: this.styles.itemLineWidth
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: this.value.map(item => item),
          },
        ],
      }
    }
  }
};
</script>

<style>
</style>