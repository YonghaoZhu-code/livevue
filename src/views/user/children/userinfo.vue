<template>
    <div class="box">
      <div  class="info">
        <i class="el-icon-edit" @click="change">修改资料</i>
       <p>用户名:<span>{{userInfo.username}}</span></p>
       <p>邮箱:<span>{{userInfo.email}}</span></p>
       <p>年龄:<span>{{age}}</span></p>
       <p>性别:<span>{{sex}}</span></p>
      </div>
      <div v-show="flag" class="change">
      <el-form :model="form"  label-width="80px">
    <!-- 上传头像 -->
    <el-form-item label="更换头像" >
   <el-upload
   list-type="picture-card"
  class="avatar-uploader"
  name="img"
  :data="{email:userInfo.email}"
  :action="uploadUrl"
  :show-file-list="false">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
 </el-form-item>
     <el-form-item label="用户名">
    <el-input v-model="form.username"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="form.password"></el-input>
     </el-form-item>
     <el-form-item class="btns">
      <el-button type="primary" >保存</el-button>
     </el-form-item>
      </el-form>
      </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      //  username:'',
      //  email:'',
      age: 23,
      sex: '女',
      flag: false,
      imageUrl: '',
      // email: this.userInfo.email,
      uploadUrl: this.$baseURL + 'uploads/headerimg',
      form: {
        username: '',
        password: ''
      }

    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    ...mapActions(['setUserInfo']),
    change () {
      this.flag = !this.flag
    }
  }
}
</script>
<style lang="less" scoped>
.box{
  display: flex;
  margin:0 auto;
.info{
  width: 400px;
  margin: 20px;
  i{margin-left: 30px;
    color: #409EFF;
    cursor: pointer;
  }
  p{
    font-size: 20px;
    color: rgb(124, 122, 121);
    margin: 30px;
    span{
      font-size:18px;
      color: rgb(15, 15, 15);
    }
  }
}
.change{
  margin-top: 20px;
  width: 200px;
}}
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  .avatar {
    width: 60px;
    height: 60px;
    display: block;
  }
</style>
