<template>
  <div class="chart-container">
    <chart 
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
      default: () => {}
    }
  }
}
</script>

