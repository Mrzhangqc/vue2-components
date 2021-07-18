<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      height="496"
      :default-sort = "{prop: 'id', order: 'ascending'}"
      >
      <el-table-column
        prop="id"
        label="序号"
        sortable
        width="100">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        sortable
        >
      </el-table-column>
    </el-table>
    <el-pagination
      :style="{textAlign: 'right', marginTop: '15px'}"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageInfo.currentPage"
      :page-sizes="[10, 20, 30, 50]"
      :page-size="pageInfo.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageInfo.total">
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: 'page-table',
  methods: {
    handlePageData(){
      const { currentPage, pageSize } = this.pageInfo
      this.tableData = this.mockData.slice(
        (currentPage - 1) * pageSize,
        currentPage *pageSize
      )
    },
    handleSizeChange(val) {
      this.pageInfo.pageSize = val
      this.handlePageData()
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.pageInfo.currentPage = val
      this.handlePageData()
      console.log(`当前页: ${val}`);
    }
  },
  data() {
    return {
      pageInfo: {
        pageSize: 10,
        currentPage: 1,
        total: 100
      },
      tableData: [],
      mockData: []
    }
  },
  created() {
    for (let i = 0; i < this.pageInfo.total; i++) {
      let n = i + 1
      this.mockData.push({
        id: n,
        date: `2016-05-${n}`,
        name: `王小虎${n}`,
        address: `上海市普陀区金沙江路 150${n} 弄`
      })
    }
    this.handlePageData()
  }
}
</script>