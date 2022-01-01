import * as echarts from "echarts";

class EchartsInfo {
  technologyType(): Object {
    return {
      title: {
        text: "开发技术",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {},
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "value",
        boundaryGap: [0, 0.01],
        axisLabel: {
          show: true,
          interval: "auto",
          formatter: "{value} %",
        },
      },
      yAxis: {
        type: "category",
        data: ["JavaScript", "TypeScript", "Vue3", "NodeJs"],

        show: true,
      },
      series: [
        {
          name: "前端",
          type: "bar",
          data: [80, 20, 100, 100],
        },
        {
          name: "后端",
          type: "bar",
          data: [100, 0, 0, 100],
        },
      ],
    };
  }

  myPie(): Object {
    return {
      backgroundColor: '#2c343c',
      title: {
        text: 'Development technology',
        left: 'center',
        top: 20,
        textStyle: {
          color: '#ccc'
        }
      },
      tooltip: {
        trigger: 'item',
      },
      visualMap: {
        show: false,
        min: 0,
        max: 150,
        inRange: {
          colorLightness: [0, 1]
        },
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: [
            { value: 80, name: 'JavaScript' },
            { value: 50, name: 'TypeScript' },
            { value: 100, name: 'Vue3' },
            { value: 100, name: 'NodeJs' },
          ].sort(function (a, b) {
            return a.value - b.value;
          }),
          roseType: 'radius',
          label: {
            color: 'rgb(228, 228, 228)'
          },
          labelLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            smooth: 0.2,
            length: 10,
            length2: 20
          },
          itemStyle: {
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx: any) {
            return Math.random() * 200;
          },
        }
      ]
    };
  }

  myData(category: any[], lineData: any[], barData: any[]): object {
    return {
      title: {
        text: 'User All Count',
        left: 'center',
        top: 20,
        textStyle: {
          color: '#ccc'
        }
      },
      backgroundColor: '#0f375f',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['line', 'bar'],
        textStyle: {
          color: '#ccc'
        }
      },
      xAxis: {
        data: category,
        axisLine: {
          lineStyle: {
            color: '#ccc'
          }
        }
      },
      yAxis: {
        splitLine: { show: false },
        axisLine: {
          lineStyle: {
            color: '#ccc'
          }
        }
      },
      series: [
        {
          name: 'line',
          type: 'line',
          smooth: true,
          showAllSymbol: true,
          symbol: 'emptyCircle',
          symbolSize: 15,
          data: lineData
        },
        {
          name: 'bar',
          type: 'bar',
          barWidth: 10,
          itemStyle: {
            borderRadius: 5,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#14c8d4' },
              { offset: 1, color: '#43eec6' }
            ])
          },
          data: barData
        },
        {
          name: 'line',
          type: 'bar',
          barGap: '-100%',
          barWidth: 10,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(20,200,212,0.5)' },
              { offset: 0.2, color: 'rgba(20,200,212,0.2)' },
              { offset: 1, color: 'rgba(20,200,212,0)' }
            ])
          },
          z: -12,
          data: lineData
        },
        {
          name: 'dotted',
          type: 'pictorialBar',
          symbol: 'rect',
          itemStyle: {
            color: '#0f375f'
          },
          symbolRepeat: true,
          symbolSize: [12, 4],
          symbolMargin: 1,
          z: -10,
          data: lineData
        }
      ]
    }
  }
}

export default new EchartsInfo()