<template>
  <div>
    <h2>产品周销</h2>
    <div class="chart" id="twoChart"></div>
  </div>
</template>

<script>
import { inject, onMounted, reactive } from "vue"

export default {
  setup() {
    let $echarts = inject("echarts")
    let $http = inject("axios")
    // 创建一个变量用于存储请求过来的数据
    let data = reactive({})
    // 获取数据
    async function getState() {
      data = await $http({ url: "/two/data" })
    }
    onMounted(() => {
      getState().then(() => {
        // console.log("折线图", data)

        // 初始化
        let myChart = $echarts.init(document.getElementById("twoChart"))

        myChart.setOption({
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              label: {
                backgroundColor: "#e6b600",
              },
            },
          },
          legend: {
            data: ["服饰", "数码", "家电", "家居", "日化"],
          },
          grid: {
            left: "1%",
            right: "5%",
            bottom: "3%",
            containLabel: true,
          },
          xAxis: {
            type: "category", //设置类目轴
            boundaryGap: false,
            data: data.data.chartData.chartData.day,
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
          },
          yAxis: {
            type: "value", //设置数值轴
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
          },
          series: [
            {
              name: "服饰",
              type: "line",
              data: data.data.chartData.chartData.num.chemical,
              smooth: true, //折线图平滑效果,变成曲线图
              showSymbol: false, //隐藏数据点
              stack: "Total", //数据堆叠
              lineStyle: {
                width: 0,
              },
              emphasis: {
                focus: "series", //只显示选中的高亮
              },
              areaStyle: {
                opacity: 0.8,
                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgb(128,255,165)",
                  },
                  {
                    offset: 1,
                    color: "rgb(1,191,236)",
                  },
                ]),
              },
            },
            {
              name: "数码",
              type: "line",
              data: data.data.chartData.chartData.num.clothes,
              smooth: true, //折线图平滑效果,变成曲线图
              showSymbol: false, //隐藏数据点
              stack: "Total", //数据堆叠
              lineStyle: {
                width: 0,
              },
              emphasis: {
                focus: "series", //只显示选中的高亮
              },
              areaStyle: {
                opacity: 0.8,
                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgb(0,221,255)",
                  },
                  {
                    offset: 1,
                    color: "rgb(77,119,255)",
                  },
                ]),
              },
            },
            {
              name: "家电",
              type: "line",
              data: data.data.chartData.chartData.num.digit,
              smooth: true, //折线图平滑效果,变成曲线图
              showSymbol: false, //隐藏数据点
              stack: "Total", //数据堆叠
              lineStyle: {
                width: 0,
              },
              emphasis: {
                focus: "series", //只显示选中的高亮
              },
              areaStyle: {
                opacity: 0.8,
                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgb(55,162,255)",
                  },
                  {
                    offset: 1,
                    color: "rgb(116,21,219)",
                  },
                ]),
              },
            },
            {
              name: "家居",
              type: "line",
              data: data.data.chartData.chartData.num.electrical,
              smooth: true, //折线图平滑效果,变成曲线图
              showSymbol: false, //隐藏数据点
              stack: "Total", //数据堆叠
              lineStyle: {
                width: 0,
              },
              emphasis: {
                focus: "series", //只显示选中的高亮
              },
              areaStyle: {
                opacity: 0.8,
                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgb(255,0,135)",
                  },
                  {
                    offset: 1,
                    color: "rgb(135,0,157)",
                  },
                ]),
              },
            },
            {
              name: "日化",
              type: "line",
              data: data.data.chartData.chartData.num.gear,
              smooth: true, //折线图平滑效果,变成曲线图
              showSymbol: false, //隐藏数据点
              stack: "Total", //数据堆叠
              lineStyle: {
                width: 0,
              },
              emphasis: {
                focus: "series", //只显示选中的高亮
              },
              areaStyle: {
                opacity: 0.8,
                color: new $echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgb(255,191,0)",
                  },
                  {
                    offset: 1,
                    color: "rgb(224,62,76)",
                  },
                ]),
              },
            },
          ],
        })
      })
    })
    return {
      getState,
      data,
    }
  },
}
</script>

<style lang="less" scoped>
.chart {
  height: 4.5rem;
}
h2 {
  height: 0.6rem;
  color: #fff;
  line-height: 0.6rem;
  font-size: 0.25rem;
  text-align: center;
}
</style>
