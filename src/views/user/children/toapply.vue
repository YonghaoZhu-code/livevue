<template>
    <div class="box">
<div class="form">
     <el-form label-position="right" label-width="80px" :model="apply" >
   <el-form-item label="申请名称" >
    <el-input v-model="apply.name"></el-input>
  </el-form-item>
  <el-form-item label="申请类别">
   <el-select v-model="apply.type" placeholder="请选择分区">
      <el-option label="图书区" value=2></el-option>
      <el-option label="数码区" value=3></el-option>
      <el-option label="美妆区" value=4></el-option>
      <el-option label="服饰区" value=5></el-option>
      <el-option label="汽车区" value=6></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="申请理由">
     <el-input type="textarea" v-model="apply.catalog"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="toapply">提交申请</el-button>
  </el-form-item>
</el-form>
</div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      apply: {
        name: '',
        type: null,
        catalog: ''
      }
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    async toapply () {
      const { data: res } = await this.$http.get('/admin/addapply', { params: { uid: this.userInfo.uid, username: this.userInfo.username, name: this.apply.name, type: this.apply.type } })
      if (res.code === 200) {
        this.$router.push('userinfo')
        this.$message.success('已提交申请,请等待审核')
      }
    }
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
