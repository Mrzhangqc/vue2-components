<template>
  <el-row :gutter="10">
    <el-col :md="8">
      <chart-line :chartOptions="options.chartOptions"></chart-line>
    </el-col>
  </el-row>
</template>

<script>
import options from './lineOptions'
import ChartLine from 'components/chartLineBar'
export default {
  name: 'chart-config',
  components: {
    ChartLine
  },
  data() {
    return {
      options
    }
  }
}
</script>

<style>

</style>