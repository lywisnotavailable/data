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
        legend: {
          show:this.styles.itemShow,
          itemHeight:this.styles.itemHeight,
          itemWidth:this.styles.itemWidth,
          top: '20%',
          left: 'center',
          textStyle: {
            color: "#FFFF", 
            fontSize:  this.styles.itemFontSize
          },
          selectedMode: false
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '115%'],
            center: ['50%', '100%'],
            // adjust the start angle
            startAngle: 180,
            itemStyle: {
              borderRadius: this.styles.itemBorderRadius,
              borderColor: '#fff',
              borderWidth: this.styles.itemLineWidth
            },
            label: {
              show: false,
              formatter(param) {
                // correct the percentage
                return param.name + ' (' + param.percent * 2 + '%)';
              }
            },
            data: this.value,
          }
        ]
      }
    }
  }
}
</script>

<style>
</style>