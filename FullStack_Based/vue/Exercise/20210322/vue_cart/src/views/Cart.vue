<template>
  <div id="my_echarts"></div>
</template>

<script>
import { onMounted , reactive } from "vue";
import * as echarts from "echarts";

export default {
  setup() {
    const options = reactive({
      title: {
        text: "ECharts 入门示例",
      },
      tooltip: {},
      legend: {
        data: ["销量"],
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });

    onMounted(() => {
        //初始化echarts
        const mychart = echarts.init(document.getElementById("my_echarts"));

        //使用刚指定的配置和数据显示图表
        mychart.setOption(options);
    });
  },
};
</script>

<style>
#my_echarts {
  width: 600px;
  height: 400px;
}
</style>