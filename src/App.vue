<template>
  <div id="app">
    <el-container>
    <!-- 头 -->
    <el-header>
     <Header />
     </el-header>
    <el-main>
      <!-- 路由占位符 主要部分 -->
      <!--  匹配完整路径 使其能跳转自身   -->
      <router-view ></router-view>
    </el-main>
  </el-container>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  data () { return {} },
  components: { Header },
  name: 'app'
}
</script>

<style lang="less" scoped>
.el-container{
  width: 100vw;
}
.el-header{
  display: block;
  padding: 0;
  width: 100%;
  overflow: hidden;
}
.el-main{
  padding: 0;
  width: 100%;
  overflow: hidden;
}
</style>
