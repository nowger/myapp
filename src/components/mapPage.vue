<template>
  <div class="map" id="map"></div>
</template>

<script>
import axios from "axios"
import { onMounted, reactive, inject } from "vue"

export default {
  setup() {
    let $echarts = inject("echarts")
    let mapData = reactive({})
    async function getState() {
      mapData = await axios.get("/china/data")
    }
    onMounted(() => {
      getState().then(() => {
        // console.log("map", mapData)
        $echarts.registerMap("china", mapData.data.chinaData)
        let myChart = $echarts.init(document.getElementById("map"))
        myChart.setOption({
          geo: {
            map: "china",
            itemStyle: {
              areaColor: "#0099ff",
              borderColor: "#00ffff",
              shadowColor: "rgba(230,130,70,0.5)", //透明度
              shadowBlur: 30,
              emphasis: {
                focus: "self", //淡入淡出效果
              },
            },
          },
          visualMap: {
            type: "continuous", //连续类型
            min: 100,
            max: 5000,
            calculable: true, //滑动效果
            inRange: {
              color: ["#50a3ba", "#eac736", "#d94e5d"],
            },
            textStyle: {
              color: "#fff",
            },
          },
          tooltip: {
            trigger: "item", //设置类目
          },
          title: {
            text: "城市销量",
            left: "45%",
            textStyle: {
              color: "#fff",
              fontSize: 20,
              textShadowBlur: 10, //文本阴影
              textShadowColor: "#33ffff",
            },
          },
          // 散点图数据
          series: [
            {
              type: "scatter",
              itemStyle: {
                color: "red",
              },
              coordinateSystem: "geo", //指定坐标系
              data: [
                { naem: "北京", value: [116.46, 39.92, 4367] },
                { naem: "上海", value: [121.48, 31.22, 8675] },
                { naem: "深圳", value: [114.07, 22.62, 2461] },
                { naem: "广州", value: [113.23, 23.16, 187] },
                { naem: "西安", value: [108.45, 34, 3421] },
              ],
            },
          ],
        })
      })
    })
    return {
      getState,
      mapData,
    }
  },
}
</script>

<style lang="less" scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>
