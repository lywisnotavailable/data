export const Bar_Line_Style = {
  componentName: '#barline',
  areaColorO: '#5470c6',
  areaColorT: '#3cb371',
  itemShow:'false',
  itemHeight: '20',
  itemWidth: '20',
  lineColor:'#5470c6',
  title: '我是标题',
  isShowTitle: false,
  titleFontSize: '18',
  titleFontColor: '#fffafa',
  titleLeft: '210',
  titleTop: '20',
};

export const Bar_Line = {
  value: [
    ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
    [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
    [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
  ]
};

export const Basic_Bar = {
  value: [
    {
      name: 'Mon',
      value: 120,
    },
    {
      name: 'Tue',
      value: 200,
    },
    {
      name: 'Wed',
      value: 150,
    },
    {
      name: 'Thu',
      value: 80,
    },
    {
      name: 'Fri',
      value: 70,
    },
    {
      name: 'Sat',
      value: 110,
    },
    {
      name: 'Sun',
      value: 130,
    }
  ]
};

export const Basic_Bar_Style = {
  componentName: '基础柱状图',
  areaColor: '#5470c6',
  xAxisVisible: true, // 是否显示x轴
  yAxisVisible: true, // 是否显示y轴
  itemBorderRadius: '0',
  itemBorderWidth: '25',
  fontSize: '12',
  // xAxisContent: JSON.stringify(Basic_Bar.value),
  title: '我是标题',
  isShowTitle: false,
  titleFontSize: '18',
  titleFontColor: '#fffafa',
  titleLeft: '210',
  titleTop: '20',
  isShowLine: false,
};

export const Area_Bar = {
  value: [
    {
      name: 'Mon',
      value: 820,
    },
    {
      name: 'Tue',
      value: 932,
    },
    {
      name: 'Wed',
      value: 901,
    },
    {
      name: 'Thu',
      value: 934,
    },
    {
      name: 'Fri',
      value: 1290,
    },
    {
      name: 'Sat',
      value: 1330,
    },
    {
      name: 'Sun',
      value: 1320,
    }
  ]
};

export const Area_Bar_Style = {
  componentName: '基础面积图',
  areaColor: '#5470c6',
  lineColor: '#add8e6',
  xAxisVisible: true, // 是否显示x轴
  yAxisVisible: true, // 是否显示y轴
  fontSize: '12',
  title: '我是标题',
  isShowTitle: false,
  titleFontSize: '18',
  titleFontColor: '#fffafa',
  titleLeft: '210',
  titleTop: '20',
  isShowLine: false,
};

export const Basic_Scatter = {
  value: [
    [10.0, 8.04],
    [8.07, 6.95],
    [13.0, 7.58],
    [9.05, 8.81],
    [11.0, 8.33],
    [14.0, 7.66],
    [13.4, 6.81],
    [10.0, 6.33],
    [14.0, 8.96],
    [12.5, 6.82],
    [9.15, 7.2],
    [11.5, 7.2],
    [3.03, 4.23],
    [12.2, 7.83],
    [2.02, 4.47],
    [1.05, 3.33],
    [4.05, 4.96],
    [6.03, 7.24],
    [12.0, 6.26],
    [12.0, 8.84],
    [7.08, 5.82],
    [5.02, 5.68]
  ],
}

export const Basic_Scatter_Style = {
  componentName: '基础散点图',
  areaColor: '#5470c6',
  fontSize: '12',
  title: '我是标题',
  isShowTitle: false,
  titleFontSize: '18',
  titleFontColor: '#fffafa',
  titleLeft: '210',
  titleTop: '20',
  isShowLine: false,
};

export const Exponential_Regression_Style = {
  componentName: '指数回归图',
  areaColor: '#5470c6',
  lineColor: '#fffafa',
  showFontSize: '12',
  showColor: '#fffafa',
  fontSize: '12',
  title: '我是标题',
  isShowTitle: false,
  titleFontSize: '18',
  titleFontColor: '#fffafa',
  titleLeft: '210',
  titleTop: '20',
  isShowLine: false,
};

export const Exponential_Regression = {
  value: [
    [1, 486.4],
    [2, 529.7],
    [3, 593.5],
    [4, 717.0],
    [5, 896.4],
    [6, 1022.2],
    [7, 1196.5],
    [8, 1492.3],
    [9, 1690.2],
    [10, 1854.9],
    [11, 2161.8],
    [12, 2663.1],
    [13, 3463.4],
    [14, 4675.4],
    [15, 5847.1],
    [16, 6788.6],
    [17, 7446.6],
    [18, 7939.7]
  ],
}

export const Sp_funnel_Style = {
  componentName: '特殊漏斗图',
  itemHeight: '20',
  itemShow: false,
  itemWidth: '20',
  itemFontSize: '12',
  comFontSize: '18',
  comFontColor: '#fffafa',
  title: '我是标题',
  isShowTitle: false,
  titleFontSize: '18',
  titleFontColor: '#fffafa',
  titleLeft: '210',
  titleTop: '13',
  isShowLine: false,
};

export const Sp_funnel = {
  value: [
    [{ value: 30, name: 'Visit' },
    { value: 10, name: 'Inquiry' },
    { value: 5, name: 'Order' },
    { value: 50, name: 'Click' },
    { value: 80, name: 'Show' }],
    [{ value: 60, name: 'Visit' },
    { value: 40, name: 'Inquiry' },
    { value: 20, name: 'Order' },
    { value: 80, name: 'Click' },
    { value: 100, name: 'Show' }]
  ],
}

export const Basic_funnel_Style = {
  componentName: '基础漏斗图',
  itemHeight: '20',
  itemShow: false,
  itemWidth: '20',
  itemFontSize: '12',
  comFontSize: '18',
  comFontColor: '#fffafa',
  title: '我是标题',
  isShowTitle: false,
  titleFontSize: '18',
  titleFontColor: '#fffafa',
  titleLeft: '210',
  titleTop: '13',
  isShowLine: false,
};

export const Basic_funnel = {
  value: [
    { value: 60, name: 'Visit' },
    { value: 40, name: 'Inquiry' },
    { value: 20, name: 'Order' },
    { value: 80, name: 'Click' },
    { value: 100, name: 'Show' }
  ],
}

export const Basic_gauge_Style = {
  componentName: '基础仪表盘',
  title: '我是标题',
  isShowTitle: false,
  fontColor: '#5470c6',
  pointerColor: '#ffffff',
  cricleColor: '#5470c6',
  titleFontSize: '18',
  titleFontColor: '#fffafa',
  titleLeft: '210',
  titleTop: '40',
  isShowLine: false,
};

export const Basic_gauge = {
  value: [
    { value: 50, name: 'SCORE' }
  ],
}

export const Grade_gauge_Style = {
  componentName: '等级仪表盘',
  title: '我是标题',
  isShowTitle: false,
  fontColor: '#fffafa',
  fontSize: '18',
  pointerColor: '#5470c6',
  titleFontSize: '18',
  titleFontColor: '#fffafa',
  titleLeft: '210',
  titleTop: '20',
  isShowLine: false,
};

export const Grade_gauge = {
  value: [
    { value: 70, name: 'Grade Rating', }
  ],
};

export const Bar_With_Negative = {
  value: [
    {
      name: 'ten',
      value: { value: -0.07, label: 'right' },
    },
    {
      name: 'nine',
      value: { value: -0.09, label: 'right' },
    },
    {
      name: 'eight',
      value: 0.2,
    },
    {
      name: 'seven',
      value: 0.44,
    },
    {
      name: 'six',
      value: { value: -0.23, label: 'right' },
    },
    {
      name: 'five',
      value: 0.08,
    },
    {
      name: 'four',
      value: { value: -0.17, label: 'right' },
    },
    {
      name: 'three',
      value: 0.47,
    },
    {
      name: 'two',
      value: { value: -0.36, label: 'right' },
    },
    {
      name: 'one',
      value: 0.18,
    }
  ]
};

export const Bar_With_Negative_Style = {
  componentName: '交错正负轴柱状图',
  areaColor: '#5470c6',
  xAxisVisible: true, // 是否显示x轴
  yAxisVisible: true, // 是否显示y轴
  itemBorderRadius: '0',
  itemBorderWidth: '20',
  fontSize: '15',
  title: '我是标题',
  isShowTitle: false,
  titleFontSize: '18',
  titleFontColor: '#fffafa',
  titleLeft: '210',
  titleTop: '20',
  isShowLine: false,
};

export const HBar = {
  value: [
    {
      name: 'Brazil',
      value: 518,
      value2: 619
    },
    {
      name: 'Indonesia',
      value: 323,
      value2: 393
    },
    {
      name: 'USA',
      value: 329,
      value2: 231
    },
    {
      name: 'India',
      value: 604,
      value2: 521
    },
    {
      name: 'China',
      value: 531,
      value2: 634
    },
    {
      name: 'UK',
      value: 630,
      value2: 681
    }
  ]
};

export const HBar_Style = {
  componentName: '条形图',
  areaColorO: '#5470c6',
  areaColorT: '#3cb371',
  xAxisVisible: true, // 是否显示x轴
  yAxisVisible: true, // 是否显示y轴
  itemShow: false,
  itemHeight: '20',
  itemWidth: '20',
  itemBorderRadius: '0',
  itemBorderWidth: '15',
  fontSize: '12',
  title: '我是标题',
  isShowTitle: false,
  titleFontSize: '18',
  titleFontColor: '#fffafa',
  titleLeft: '210',
  titleTop: '20',
  isShowLine: false,
};

export const Basic_Line = {
  value: [
    {
      name: 'Mon',
      value: 150,
    },
    {
      name: 'Tue',
      value: 230,
    },
    {
      name: 'Wed',
      value: 224,
    },
    {
      name: 'Thu',
      value: 218,
    },
    {
      name: 'Fri',
      value: 135,
    },
    {
      name: 'Sat',
      value: 147,
    },
    {
      name: 'Sun',
      value: 260,
    }
  ]
};

export const Basic_Line_Style = {
  componentName: '基础折线图',
  lineColor: '#5470c6',
  xAxisVisible: true, // 是否显示x轴
  yAxisVisible: true, // 是否显示y轴
  fontSize: '12',
  title: '我是标题',
  isShowTitle: false,
  titleFontSize: '18',
  titleFontColor: '#fffafa',
  titleLeft: '210',
  titleTop: '20',
  isShowLine: false,
};

export const Smooth_Line = {
  value: [
    {
      name: 'Mon',
      value: 820,
    },
    {
      name: 'Tue',
      value: 932,
    },
    {
      name: 'Wed',
      value: 901,
    },
    {
      name: 'Thu',
      value: 934,
    },
    {
      name: 'Fri',
      value: 1290,
    },
    {
      name: 'Sat',
      value: 1330,
    },
    {
      name: 'Sun',
      value: 1320,
    }
  ]
};

export const Smooth_Line_Style = {
  componentName: '平滑折线图',
  lineColor: '#5470c6',
  xAxisVisible: true, // 是否显示x轴
  yAxisVisible: true, // 是否显示y轴
  fontSize: '12',
  title: '我是标题',
  isShowTitle: false,
  titleFontSize: '18',
  titleFontColor: '#fffafa',
  titleLeft: '210',
  titleTop: '20',
  isShowLine: false,
};

export const Pie_Border = {
  value: [
    {
      name: 'Search Engine',
      value: 1048,
    },
    {
      name: 'Direct',
      value: 735,
    },
    {
      name: 'Email',
      value: 580,
    },
    {
      name: 'Union Ads',
      value: 484,
    },
    {
      name: 'Video Ads',
      value: 300,
    }
  ]
};

export const Pie_Border_Style = {
  componentName: '环形图',
  title: '我是标题',
  itemShow: false,
  isShowTitle: false,
  itemHeight: '20',
  itemWidth: '20',
  itemFontSize: '12',
  itemBorderRadius: '0',
  itemLineWidth: '0',
  titleFontSize: '18',
  titleFontColor: '#fffafa',
  titleLeft: '210',
  titleTop: '15',
  isShowLine: false,
};

export const Basic_Pie = {
  value: [
    {
      name: 'Search Engine',
      value: 1048,
    },
    {
      name: 'Direct',
      value: 735,
    },
    {
      name: 'Email',
      value: 580,
    },
    {
      name: 'Union Ads',
      value: 484,
    },
    {
      name: 'Video Ads',
      value: 300,
    }
  ]
};

export const Basic_Pie_Style = {
  componentName: '饼状图',
  title: '我是标题',
  itemShow: false,
  isShowTitle: false,
  itemHeight: '20',
  itemWidth: '20',
  itemFontSize: '12',
  titleFontSize: '18',
  titleFontColor: '#fffafa',
  titleLeft: '210',
  titleTop: '15',
  isShowLine: false,
};

export const pie_Half_Pie = {
  value: [
    { value: 1048, name: 'Search Engine' },
    { value: 735, name: 'Direct' },
    { value: 580, name: 'Email' },
    { value: 484, name: 'Union Ads' },
    { value: 300, name: 'Video Ads' },
    {
      value: 1048 + 735 + 580 + 484 + 300,
      itemStyle: {
        color: 'none',
        decal: {
          symbol: 'none'
        }
      },
      label: {
        show: false
      }
    }
  ]
};

export const pie_Half_Pie_Style = {
  componentName: '半环形图',
  title: '我是标题',
  itemShow: false,
  isShowTitle: false,
  itemHeight: '20',
  itemWidth: '20',
  itemFontSize: '12',
  itemBorderRadius: '0',
  itemLineWidth: '0',
  titleFontSize: '18',
  titleFontColor: '#fffafa',
  titleLeft: '210',
  titleTop: '20',
  isShowLine: false,
};