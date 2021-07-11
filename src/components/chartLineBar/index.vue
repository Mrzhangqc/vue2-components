<template>
  <div class="chart-container">
    <chart 
      height="100%" 
      width="100%"
      :chartOptions="chartOptions"
    />
  </div>
</template>

<script>
import Chart from '../baseChart'

export default {
  name: 'lineBarChart',
  components: { Chart },
  props: {
    chartOptions: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style scoped>
.chart-container{
  position: relative;
  width: 100%;
  height: 300px;
}
</style>

