<template>
    <div class="box">
<div class="left"></div>
<div class="main">
    <div class="top">
        <el-row>
  <el-button round>圆角按钮</el-button>
  <el-button type="primary" round>主要按钮</el-button>
  <el-button type="success" round>成功按钮</el-button>
  <el-button type="info" round>信息按钮</el-button>
  <el-button type="warning" round>警告按钮</el-button>
  <el-button type="danger" round>危险按钮</el-button>
</el-row>
    </div>
</div>
<div class="right"></div>
</div>
</template>
<script>

export default {

  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
.box{
  min-height: 90vh;
  width: 100vw;
  background-color: #efe;
  display: flex;
}
.left{
  width: 175px;
  min-height: 90vh;
}
.main{
  min-height: 90vh;
  flex:1;
  min-height: 100%;
}
.right{
   min-height: 90vh;
  width: 175px;
}
</style>
