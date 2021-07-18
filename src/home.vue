<template>
  <div class="home-container">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical"
      background-color="#545c64"
      :unique-opened="true"
      :router="true"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="chart">
        <template slot="title">图表仪表盘</template>
        <el-menu-item-group>
          <el-menu-item index="/chartLine">折线图</el-menu-item>
        </el-menu-item-group>
       </el-submenu>

      <el-submenu index="table">
        <template slot="title">表格组件</template>
        <el-menu-item-group>
         <el-menu-item index="/table">分页表格</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

       <el-submenu index="excel">
        <template slot="title">文件下载</template>
        <el-menu-item-group>
         <el-menu-item index="/excel">导出Excel</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    </el-menu>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import JsonToExcel from './components/jsonToExcel/jsonToExcel'

export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.home-container{
  display: flex;
  height: 100%;
  .container{
    flex: 1;
    padding: 15px;
  }
}
</style>
<style lang="scss">
.el-menu-vertical{
  display: inline-block;
  text-align: left;
  width: 240px;
  min-height: 400px;

  .el-submenu{
    .el-menu{
      .el-menu-item.is-active{
        background-color: rgb(67, 74, 80) !important;
      }
    }
  }
}
</style>
