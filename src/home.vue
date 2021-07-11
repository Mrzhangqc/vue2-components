<template>
  <div class="home-container">
    <el-card class="box-card">
      <CommonTable/>
    </el-card>
 
  </div>
</template>

<script>
import CommonTable from './components/table'
export default {
  name: 'Home',
  components: {
    CommonTable
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-container{
  padding: 20px
}
</style>
