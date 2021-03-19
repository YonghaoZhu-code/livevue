<template>
    <el-container class="home-container">
        <!-- 头部区域 -->
  <el-header>
      <div>电商管理系统</div>
      <div class="btn"><el-button type="primary"  @click="loginOut">退出登录</el-button></div>
      </el-header>
  <el-container>
      <!-- 侧边栏 -->
    <el-aside width="200px">Aside</el-aside>
    <!-- 主区域 -->
    <el-main>Main</el-main>
  </el-container>
</el-container>
</template>
<script>
export default {
  methods: {
    loginOut () {
      window.sessionStorage.clear('token')
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="less" scoped>
.home-container{
    height: 100vh;
    position: relative;
}
.el-header{
    background-color: #373D41;
    .btn{
      position: absolute;
      right: 0px;
      padding: 3px;
      .el-bottom{
        width: 15px;
        height: 10px;
      }
    }

}
.el-aside{
    background-color: #333744;
}
.el-main{
    background-color: #eaedf1;
}
</style>
