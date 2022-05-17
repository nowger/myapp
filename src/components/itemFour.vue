<template>
  <div>
    <h2>产品类别</h2>
    <div class="chart" id="fourChart"></div>
  </div>
</template>

<script>
import { inject, onMounted, reactive } from "vue"

export default {
  setup() {
    let $echarts = inject("echarts")
    let $http = inject("axios")

    let data = reactive({})

    async function getState() {
      data = await $http({ url: "/four/data" })
    }

    onMounted(() => {
      getState().then(() => {
        console.log("柱状图", data)

        let myChart = $echarts.init(document.getElementById("fourChart"))
        myChart.setOption({
          xAxis: {
            type: "category",
            data: data.data.chartData.chartData.day,
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
          },
          yAxis: {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#fff",
              },
            },
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          legend: {},
          grid: {
            left: "1%",
            right: "5%",
            bottom: "3%",
            containLabel: true,
          },
          series: [
            {
              name: "服饰",
              type: "bar",
              data: data.data.chartData.chartData.num.chemical,
              stack: "total",
              label: {
                show: true,
              },
              emphasis: {
                focus: "series",
              },
            },
            {
              name: "数码",
              type: "bar",
              data: data.data.chartData.chartData.num.clothes,
              stack: "total",
              label: {
                show: true,
              },
              emphasis: {
                focus: "series",
              },
            },
            {
              name: "家电",
              type: "bar",
              data: data.data.chartData.chartData.num.digit,
              stack: "total",
              label: {
                show: true,
              },
              emphasis: {
                focus: "series",
              },
            },
            {
              name: "家居",
              type: "bar",
              data: data.data.chartData.chartData.num.electrical,
              stack: "total",
              label: {
                show: true,
              },
              emphasis: {
                focus: "series",
              },
            },
            {
              name: "日化",
              type: "bar",
              data: data.data.chartData.chartData.num.gear,
              stack: "total",
              label: {
                show: true,
              },
              emphasis: {
                focus: "series",
              },
            },
          ],
        })
      })
      return {
        getState,
        data,
      }
    })
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
