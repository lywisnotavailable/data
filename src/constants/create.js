import * as echarts from "echarts";
export default function makeEcharts(name, bbox, imageSize1, imageSize2) {
        if (name === "Bar") {
        console.log("Bar1", bbox);
        let id1 = "Bar" + bbox;
        var newElement1 = document.createElement("div");
        document.getElementById("hahahaha").appendChild(newElement1);
        newElement1.id = id1;
        let left1 = (bbox[0] / imageSize1) * 1725 + 450;
        let top1 = (bbox[1] / imageSize2) * 1431;
        let height1 = (bbox[3] / imageSize2) * 1431 - top1 - 100;
        let width1 = (bbox[2] / imageSize1) * 1725 - left1 + 450;
        console.log("left1",left1)
        console.log("top1",top1)
        console.log("height1",height1)
        console.log("width1",width1)
        // newElement1.draggable = "true";
        newElement1.style.position = "absolute";
        newElement1.style.width = `${width1}px`;
        newElement1.style.top = `${top1}px`;
        newElement1.style.left = `${left1}px`;
        newElement1.style.height = `${height1}px`;
        var chartDom1 = document.getElementById(id1);
        var myChart1 = echarts.init(chartDom1);
        var option1;
        option1 = {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLabel: {
              show: true,
                textStyle: {
                  color: '#FFFFFF',
                  fontSize : 20      //更改坐标轴文字大小
                }
            },
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              show: true,
                textStyle: {
                  color: '#FFFFFF',
                  fontSize : 20      //更改坐标轴文字大小
                }
            },
          },
          series: [
            {
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar'
            }
          ]
        };
        option1 && myChart1.setOption(option1);
        }else if (name === "Line") {
          console.log("Line1", bbox);
          let id2 = "Line" + bbox;
          var newElement2 = document.createElement("div");
          document.body.appendChild(newElement2);
          newElement2.id = id2;
          console.log("bbox:", bbox[0]);
          let left2 = (bbox[0] / imageSize1) * 1725 + 450;
          let top2 = (bbox[1] / imageSize2) * 1431 + 0;
          let height2 = (bbox[3] / imageSize2) * 1431 - top2 + 0;
          let width2 = (bbox[2] / imageSize1) * 1725 - left2 + 450;
          newElement2.style.position = "absolute";
          // newElement2.style.border = "5px solid red";
          newElement2.style.width = `${width2}px`;
          newElement2.style.top = `${top2}px`;
          newElement2.style.left = `${left2}px`;
          newElement2.style.height = `${height2}px`;
          var chartDom2 = document.getElementById(id2);
          var myChart2 = echarts.init(chartDom2);
          var option2;
          option2 = {
            grid: {
              x: "35px",
              y: "35px",
              x2: "20px",
              y2: "20px",
            },
            xAxis: {
              type: "category",
              data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              axisLabel: {
                show: true,
                  textStyle: {
                    color: '#FFFFFF',
                    fontSize : 15      //更改坐标轴文字大小
                  }
              },
            },
            yAxis: {
              type: "value",
              axisLabel: {
                show: true,
                  textStyle: {
                    color: '#FFFFFF',
                    fontSize : 15      //更改坐标轴文字大小
                  }
              },
            },
            series: [
              {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: "line",
              },
            ],
          };

          option2 && myChart2.setOption(option2);
        } else if (name === "Pie") {
          console.log("Pie1", bbox);
          var id3 = "Pie" + bbox;
          var newElement3 = document.createElement("div");
          document.body.appendChild(newElement3);
          newElement3.id = id3;
          console.log("bbox:", bbox[0]);
          let left3 = (bbox[0] / imageSize1) * 1725 + 450;
          let top3 = (bbox[1] / imageSize2) * 1431 + 0;
          let height3 = (bbox[3] / imageSize2) * 1431 - top3 + 0;
          let width3 = (bbox[2] / imageSize1) * 1725 - left3 + 450;
          newElement3.style.position = "absolute";
          // newElement3.style.border = "5px solid red";
          newElement3.style.width = `${width3}px`;
          newElement3.style.top = `${top3}px`;
          newElement3.style.left = `${left3}px`;
          newElement3.style.height = `${height3}px`;
          var chartDom3 = document.getElementById(id3);
          var myChart3 = echarts.init(chartDom3);
          var option3;
          option3 = {
            tooltip: {
              trigger: 'item',
              "textStyle": {
                      "fontSize": 20
                  }
            },
            legend: {
              orient: 'vertical',
              left: 'left',
              "textStyle": {
                      "fontSize": 20,
                      "color": '#FFFFFF',
                  }
            },
            series: [
              {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [
                  { value: 1048, name: 'Search Engine' },
                  { value: 735, name: 'Direct' },
                  { value: 580, name: 'Email' },
                  { value: 484, name: 'Union Ads' },
                  { value: 300, name: 'Video Ads' }
                ],
                "label": {
                      "normal": {
                          "show": true,
                          "textStyle": {
                              "fontSize": 20,
                              "color": '#FFFFFF', }
                      },
                      "emphasis": {
                          "show": true
                      }
                  },
                emphasis: {
                  itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          };
          option3 && myChart3.setOption(option3);
        } else if (name === "Doughnut") {
          console.log("Doughnu1", bbox);
          let id4 = "Doughnut" + bbox;
          var newElement4 = document.createElement("div");
          document.body.appendChild(newElement4);
          newElement4.id = id4;
          let left4 = (bbox[0] / imageSize1) * 1725 + 450;
          let top4 = (bbox[1] / imageSize2) * 1431 + 0;
          let height4 = (bbox[3] / imageSize2) * 1431 - top4 + 0;
          let width4 = (bbox[2] / imageSize1) * 1725 - left4 + 450;
          newElement4.style.position = "absolute";
          // newElement4.style.border = "5px solid red";
          newElement4.style.width = `${width4}px`;
          newElement4.style.top = `${top4}px`;
          newElement4.style.left = `${left4}px`;
          newElement4.style.height = `${height4}px`;
          var chartDom4 = document.getElementById(id4);
          var myChart4 = echarts.init(chartDom4);
          var option4;
          option4 = {
            grid: {
              x: "35px",
              y: "35px",
              x2: "20px",
              y2: "20px",
            },
            tooltip: {
              trigger: "item",
            },
            legend: {
              top: "5%",
              left: "center",
              "textStyle": {
                      "fontSize": 20,
                      "color": '#FFFFFF',
                  }
            },
            series: [
              {
                name: "Access From",
                type: "pie",
                radius: ["40%", "70%"],
                avoidLabelOverlap: false,
                label: {
                  show: false,
                  position: "center",
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
                data: [
                  { value: 1048, name: "Search Engine" },
                  { value: 735, name: "Direct" },
                  { value: 580, name: "Email" },
                  { value: 484, name: "Union Ads" },
                  { value: 300, name: "Video Ads" },
                ],
              },
            ],
          };

          option4 && myChart4.setOption(option4);
        } else if (name === "HBar") {
          console.log("HBar1", bbox);
          let id5 = "HBar" + bbox;
          var newElement5 = document.createElement("div");
          document.body.appendChild(newElement5);
          newElement5.id = id5;
          let left5 = (bbox[0] / imageSize1) * 1725 + 450;
          let top5 = (bbox[1] / imageSize2) * 1431 + 0;
          let height5 = (bbox[3] / imageSize2) * 1431 - top5 + 0;
          let width5 = (bbox[2] / imageSize1) * 1725 - left5 + 450;
          newElement5.style.position = "absolute";
          // newElement5.style.border = "5px solid red";
          newElement5.style.width = `${width5}px`;
          newElement5.style.top = `${top5}px`;
          newElement5.style.left = `${left5}px`;
          newElement5.style.height = `${height5}px`;
          var chartDom5 = document.getElementById(id5);
          var myChart5 = echarts.init(chartDom5);
          var option5;
          option5 = {
            grid: {
              x: "35px",
              y: "35px",
              x2: "20px",
              y2: "20px",
            },
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "shadow",
              },
            },
            legend: {
              "textStyle": {
                      "fontSize": 20,
                      "color": '#FFFFFF',
                  }
            },
            xAxis: {
              type: "value",
              boundaryGap: [0, 0.01],
              axisLabel: {
                show: true,
                  textStyle: {
                    color: '#FFFFFF',
                    fontSize : 15      //更改坐标轴文字大小
                  }
              },
            },
            yAxis: {
              type: "category",
              data: ["Brazil", "Indonesia", "USA", "India", "China", "World"],
              axisLabel: {
                show: true,
                  textStyle: {
                    color: '#FFFFFF',
                    fontSize : 10      //更改坐标轴文字大小
                  }
              },
            },
            series: [
              {
                name: "2011",
                type: "bar",
                data: [182030, 234890, 290340, 204970, 201744, 430230],
              },
              {
                name: "2012",
                type: "bar",
                data: [193250, 234380, 431000, 121594, 134141, 481807],
              },
            ],
          };
          option5 && myChart5.setOption(option5);
        } else if (name === "BarLine") {
          console.log("BarLine1", bbox);
          let id6 = "Doughnut" + bbox;
          var newElement6 = document.createElement("div");
          document.body.appendChild(newElement6);
          newElement6.id = id6;
          let left6 = (bbox[0] / imageSize1) * 1725 + 450;
          let top6 = (bbox[1] / imageSize2) * 1431 + 0;
          let height6 = (bbox[3] / imageSize2) * 1431 - top6 + 0;
          let width6 = (bbox[2] / imageSize1) * 1725 - left6 + 450;
          newElement6.style.position = "absolute";
          newElement6.style.width = `${width6}px`;
          newElement6.style.top = `${top6}px`;
          newElement6.style.left = `${left6}px`;
          newElement6.style.height = `${height6}px`;
          var chartDom6 = document.getElementById(id6);
          var myChart6 = echarts.init(chartDom6);
          var option6;
          option6 = {
            grid: {
              x: "35px",
              y: "35px",
              x2: "20px",
              y2: "20px",
            },
            tooltip: {
              trigger: "axis",
              axisPointer: {
                type: "cross",
                crossStyle: {
                  color: "#999",
                },
              },
            },
            toolbox: {
              feature: {
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ["line", "bar"] },
                restore: { show: true },
                saveAsImage: { show: true },
              },
            },
            legend: {
              data: ["Evaporation", "Precipitation", "Temperature"],
              "textStyle": {
                      "fontSize": 25,
                      "color": '#FFFFFF',
                  }
            },
            xAxis: [
              {
                type: "category",
                data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                axisPointer: {
                  type: "shadow",
                },
                axisLabel: {
                show: true,
                  textStyle: {
                    color: '#FFFFFF',
                    fontSize : 15      //更改坐标轴文字大小
                  }
              },
              },
            ],
            yAxis: [
              {
                type: "value",
                name: "Precipitation",
                min: 0,
                max: 250,
                interval: 50,
                axisLabel: {
                  formatter: "{value} ml",
                show: true,
                  textStyle: {
                    color: '#FFFFFF',
                    fontSize : 10      //更改坐标轴文字大小
                  }
              },
              },
              {
                type: "value",
                name: "Temperature",
                min: 0,
                max: 25,
                interval: 5,
                axisLabel: {
                  formatter: "{value} °C",
                show: true,
                  textStyle: {
                    color: '#FFFFFF',
                    fontSize : 10      //更改坐标轴文字大小
                  }
              },
              },
            ],
            series: [
              {
                name: "Evaporation",
                type: "bar",
                tooltip: {
                  valueFormatter: function (value) {
                    return value + " ml";
                  },
                },
                data: [
                  150.0,
                  65.9,
                  120.0,
                  73.2,
                  65.6,
                  76.7,
                  135.6,
                  162.2,
                  32.6,
                  20.0,
                  6.4,
                  3.3,
                ],
              },
              {
                name: "Precipitation",
                type: "bar",
                tooltip: {
                  valueFormatter: function (value) {
                    return value + " ml";
                  },
                },
                data: [
                  140.6,
                  0.9,
                  100.0,
                  76.4,
                  68.7,
                  70.7,
                  10.6,
                  182.2,
                  48.7,
                  18.8,
                  6.0,
                  2.3,
                ],
              },
              {
                name: "Temperature",
                type: "line",
                yAxisIndex: 1,
                tooltip: {
                  valueFormatter: function (value) {
                    return value + " °C";
                  },
                },
                data: [19.0, 10.2, 15.3, 8.5, 7.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
              },
            ],
          };
          option6 && myChart6.setOption(option6);
        } else if (name === "Scatter") {
          console.log("Scatter1", bbox);
          let id7 = "Doughnut" + bbox;
          var newElement7 = document.createElement("div");
          document.body.appendChild(newElement7);
          newElement7.id = id7;
          let left7 = (bbox[0] / imageSize1) * 1725 + 450;
          let top7 = (bbox[1] / imageSize2) * 1431 + 0;
          let height7 = (bbox[3] / imageSize2) * 1431 - top7 + 0;
          let width7 = (bbox[2] / imageSize1) * 1725 - left7 + 450;
          newElement7.style.position = "absolute";
          newElement7.style.width = `${width7}px`;
          newElement7.style.top = `${top7}px`;
          newElement7.style.left = `${left7}px`;
          newElement7.style.height = `${height7}px`;
          var chartDom7 = document.getElementById(id7);
          var myChart7 = echarts.init(chartDom7);
          var option7;
          option7 = {
            xAxis: {axisLabel: {
        show: true,
          textStyle: {
            color: '#FFFFFF',
            fontSize : 30      //更改坐标轴文字大小
          }
      },},
            yAxis: {axisLabel: {
        show: true,
          textStyle: {
            color: '#FFFFFF',
            fontSize : 30      //更改坐标轴文字大小
          }
      },},
            series: [
              {
                symbolSize: 25,
                data: [
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
                  [5.02, 5.68],
                ],
                type: "scatter",
              },
            ],
          };

          option7 && myChart7.setOption(option7);
        } else {
          console.log("None");
        }
        
 }