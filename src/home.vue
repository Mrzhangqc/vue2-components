<template>
  <div class="home-container">
    <el-card>
      <CommonTable/>
    </el-card>
    <el-card>
      <LineBar :chartOptions="chartOptions"/>
    </el-card>
    <el-card>
      <JsonToExcel />
    </el-card>
  </div>
</template>

<script>
import CommonTable from './components/table'
import LineBar from './components/chartLineBar'
import JsonToExcel from './components/jsonToExcel/jsonToExcel'

export default {
  name: 'Home',
  components: {
    CommonTable,
    LineBar,
    JsonToExcel
  },
  data() {
    return {
      chartOptions: {
        legend: {
          data: ['蒸发量', '降水量', '平均温度']
        },
        xAxis: [{
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisPointer: {
            type: 'shadow'
          }
        }],
        yAxis: [{
          type: 'value',
          name: '水量',
          min: 0,
          max: 250,
          interval: 50,
          axisLabel: {
            formatter: '{value} ml'
          }
        }, {
          type: 'value',
          name: '温度',
          min: 0,
          max: 25,
          interval: 5,
          axisLabel: {
            formatter: '{value} °C'
          }
        }],
        series: [{
          name: '蒸发量',
          type: 'bar',
          data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        }, {
          name: '平均温度',
          type: 'line',
          yAxisIndex: 1,
          data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }]
      }
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.chartOptions = {}
    // }, 2000);
  }
}
</script>

<style scoped>
.home-container{
  padding: 20px
}
</style>
<style>
 .el-card + .el-card {
  margin-top: 20px
}
</style>
