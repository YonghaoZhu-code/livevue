<template>
<div class="mainbox">
<div class="topBox">
  <div class="header">
<div class="img">
   <el-avatar :src="imageUrl+userInfo.HeaderUrl" icon="el-icon-user-solid" :size="100"></el-avatar>
   <h1>{{userInfo.username}}</h1>
</div>
<div>
  <el-row>
    <el-col span="6">
      <router-link to="/">
     <i class="el-icon-setting" style="color: #23C9ED;margin: 4px"></i>个人信息
     </router-link>
    </el-col>
     <el-col span="6">
       <router-link to="/">
     <i class="el-icon-collection-tag" style="color: #F3A034;margin: 4px"></i>关注
     </router-link>
    </el-col>
     <el-col span="6">
       <router-link to="/">
     <i class="el-icon-collection" style="color: #FB7299;margin: 4px"></i>收藏
     </router-link>
    </el-col>
     <el-col span="6">
       <router-link to="/">
    <i class="el-icon-service" style="color: #F3A034;margin: 4px"></i>申请直播
    </router-link>
    </el-col>
  </el-row>
   </div>
    <!-- <el-upload
  class="avatar-uploader"
  name="img"
  :data="{email}"
  :action="uploadUrl"
  :show-file-list="false">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload> -->
</div>
</div>
<div class="ctx">
  <router-view></router-view>
</div>
</div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      imageUrl: this.$baseURL
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    ...mapActions(['setUserInfo'])
  }
}
</script>
<style lang="less" scoped>
.mainbox{
  height: 90vh;
    width: 100vw;
}
.topBox{
  height:30vh;
  display: flex;
  justify-content: center;
  .header{
    width: 70vw;
    background-color: #fff;
   .img{
     width: 70vw;
     height: 25vh;
     overflow: hidden;
     background: url('./minebg.webp');
     background-repeat: no-repeat;
     background-size: cover;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     el-avatar{
         display: inline-block;
         margin-bottom: 10px;
     }
     h1{
       font-size: 20px;
       color: rgb(73, 8, 14);
       margin-top: 10px;
     }
   }
   .el-col{
     a{text-decoration: none;
     }
   }
  }
}
// .avatar-uploader .el-upload {
//     border: 1px dashed #d9d9d9;
//     border-radius: 6px;
//     cursor: pointer;
//     position: relative;
//     overflow: hidden;
//   }
//   .avatar-uploader .el-upload:hover {
//     border-color: #409EFF;
//   }
//   .avatar-uploader-icon {
//     font-size: 28px;
//     color: #8c939d;
//     width: 178px;
//     height: 178px;
//     line-height: 178px;
//     text-align: center;
//   }
//   .avatar {
//     width: 178px;
//     height: 178px;
//     display: block;
//   }
</style>
