<template>
  <div>
    <h2>库存统计</h2>
    <div class="chart" id="threeChart"></div>
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
      data = await $http({ url: "/three/data" })
    }
    onMounted(() => {
      getState().then(() => {
        // console.log("饼状图", data)

        // 初始化
        let myChart = $echarts.init(document.getElementById("threeChart"))

        myChart.setOption({
          legend: {
            top: "bottom",
          },
          tooltip: {
            show: true, //提示框显示
          },
          series: [
            {
              type: "pie", //类型:饼状
              data: data.data.chartData.chartData,
              radius: [10, 100],
              center: ["50%", "45%"],
              roseType: "area", //设置玫瑰图
              itemStyle: {
                borderRadius: 10,
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
