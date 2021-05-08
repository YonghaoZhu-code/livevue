<template>
    <div class="box">
<div class="form">
     <el-form label-position="right" label-width="80px" :model="apply" >
   <el-form-item label="申请名称" >
    <el-input v-model="apply.title"></el-input>
  </el-form-item>
  <el-form-item label="申请类别">
   <el-input v-model="apply.shopping"></el-input>
  </el-form-item>
  <el-form-item label="申请理由">
     <el-input type="textarea" v-model="apply.catalog"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onnext">提交申请</el-button>
  </el-form-item>
</el-form>
</div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      apply: {
        title: '',
        catalog: '',
        shopping: ''
      }
    }
  },
  methods: {

  }

}
</script>
<style lang="less" scoped>
.form{
    width: 600px;
    margin: 0 auto;
    padding-bottom: 6px;
    padding-top: 4px;

}
</style>
