<template>
  <div>
    <pre>
      column: {id: '序号',name: '名称'}  
      
      tableData: [
        {id: 1, name: '测试1'},
        {id: 2,name: '测试2'}
      ]
    </pre>
     <el-button @click="exportExcel">Json数据导出Excel</el-button>
  </div>
</template>

<script>
import XLSX from 'xlsx'
export default {
  name: 'jsonToExcel',
  data() {
    return {
      columns: {
        id: '序号',
        name: '名称'
      },
      tableData: [{
        name: '测试1',
        id: 1
      }, {
        id: 2,
        name: '测试2'
      }]  
    }
  },
  methods: {
    exportExcel() {
      const header = Object.values(this.columns)
      const columnKeys = Object.keys(this.columns)
      const bodys = this.tableData.map(row => {
        return columnKeys.map(key => row[key])
      })      
      const aoa = [ header, ...bodys]
      const wb = XLSX.utils.book_new()
      const ws = XLSX.utils.aoa_to_sheet(aoa);
      XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
      XLSX.writeFile(wb, 'out.xlsx');
    }
  }
}
</script>

<style>

</style>