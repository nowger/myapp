<template>
	<div class="contain" >
		<div class="home" ref="main"></div>
	</div>
</template>

<script >
import * as echarts from "echarts";
export default {
  name: 'HomeEcharts',
  mounted() {
    let myChart=echarts.init(this.$refs.main)
    myChart.setOption({
      color:'#657fE9',
      title:{
        text:"营销情况",
        backgroundColor:"#ffffff",
        borderColor:"#0cccc0",
        borderWidth:1,
        x:"center",
      },
      tooltip:{
        trigger:"axis",
        axisPointer:{
          type:"shadow"
        },
        formatter(params){
          for(var i=0;i<params.length;i++){
            return "名字:&nbsp&nbsp"+params[i].name+"<br>价格:&nbsp&nbsp"+params[i].data.value+"<br>生产日期:&nbsp&nbsp"+params[i].data.date;
          }
        }
      },
      itemStyle:{
        normal:{
          color:["0cccc0","blue","red","yellow"]
        }
      },
      legend:{
          show:true,
          icon:"circle",
          right:10,
          textStyle:{
            color:"green",
          }
      },
      xAxis:{
        data:["苹果","西瓜","香蕉","橘子"]
      },
      yAxis:{
        
      },
      series:{
        name:"水果",
        type:"bar",
        data:[{value:10,date:"2022-05-16"},
            {value:5,date:"2022-05-16"},
            {value:7,date:"2022-05-16"},
            {value:4,date:"2022-05-16"}
        ],
        itemStyle: {
            normal: {
                color: function(params) {
                    //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                    var colorList = ['#61a0c8', '#61a0a8', '#91c7ae','#749f83'];
                    return colorList[params.dataIndex]
                }

            }
        }
      }
    })
  },
}
</script>

<style>
.contain{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}
.home{
  width: 600px;
  height: 600px;
  border:1px solid #0cccc0;
}


</style>