<template>
  <div class="table-container">
    <common-table></common-table>
  </div>
</template>

<script>
import CommonTable from 'components/table'
export default {
  name: 'table-container',
  components: {
    CommonTable
  }
 }
</script>

<style lang="scss" scoped>
  .table-container{

  }
</style>