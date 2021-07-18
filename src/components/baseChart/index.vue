<template>
  <div :id="id" :class="className" :style="{ height, width }" />
</template>

<script>
import echarts from 'echarts'
import { debounce } from 'lodash'
const defaultOptions = {
  title: {
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      textStyle: {
        color: '#fff'
      }
    }
  },
  grid: {
    left: '5%',
    right: '5%',
    top: '15%',
    bottom: '8%',
  },
  legend: {
    x: '5%',
    top: '10%',
    textStyle: {
      color: '#90979c'
    },
  },
  calculable: true,
}
export default {
  props: {
    chartOptions:{
      type: Object,
      default: () => {}
    },
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '300px'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {
      chart: null,
      resizeHandler: null
    }
  },
  mounted() {
    this.initChart()
    this.initResizeHandler()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null

    this.removeResizeHandler()
    this.resizeHandler = null
  },
  watch: {
    'chartOptions': function(newVal){
      if(newVal){
        console.log('update---');
        this.chartUpdate(newVal)
      }
    }
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id))
      this.chartUpdate(this.chartOptions)
    },
    initResizeHandler() {
      this.resizeHandler = debounce(() => {
        if (this.chart) {
          this.chart.resize()
        }
      }, 200)
      window.addEventListener('resize', this.resizeHandler)
    },
    removeResizeHandler() {
      window.removeEventListener('resize', this.resizeHandler)
    },
    chartUpdate(options) {
      const chartOptions = {
        ...defaultOptions,
        ...options
      }     
      this.chart.setOption(chartOptions, { notMerge: true })
      this.chart.resize()
    }
  }
}
</script>
