<template>
  <e-charts class="chart" :option="option" autoresize/>
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
          top: '11%',
          itemHeight:this.styles.itemHeight,
          itemWidth:this.styles.itemWidth,
          textStyle: {
            color: "#FFFF", 
            fontSize: this.styles.itemFontSize
          }
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '70%',
            center: ['50%','60%'],
            itemStyle: {
                  normal: {
                      label: {
                          textStyle: {
                            color:'snow',
                              fontSize: 14,
                              fontWeight:'bolder'
                          }
                      },
                    labelLine : {
                          lineStyle:{
                            color:'snow'
                          }
                      }
                  }
              },
            data:this.value.map(item => item),
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
</style>