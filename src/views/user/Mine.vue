<template>
<div class="mainbox">
<div class="left"></div>
<div class="main">
<div class="topBox">
  <div class="header">
<div class="img">
   <el-avatar :src="imageUrl+userInfo.HeaderUrl" icon="el-icon-user-solid" :size="100"></el-avatar>
   <h1>{{userInfo.username}}</h1>
</div>
<div>
  <el-row>
    <el-col span="6">
      <router-link to="userinfo">
     <i class="el-icon-setting" style="color: #23C9ED;margin: 4px"></i>个人信息
     </router-link>
    </el-col>
     <el-col span="6">
       <router-link to="/">
     <i class="el-icon-collection-tag" style="color: #bf4;margin: 4px"></i>关注
     </router-link>
    </el-col>
     <el-col span="6">
       <router-link to="/">
     <i class="el-icon-s-promotion" style="color: #FB7299;margin: 4px"></i>动态
     </router-link>
    </el-col>
     <el-col span="6">
    <router-link to="tolive" v-if="this.userInfo.role!=1">
    <i class="el-icon-service" style="color: #F3A034;margin: 4px"></i>开启直播
    </router-link>
    <router-link to="toapply" v-else class="mmp">
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
  <router-view ></router-view>
</div>
</div>
<div class="right"></div>
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
  min-height: 90vh;
  width: 100vw;
  background-color: #efe;
  display: flex;
}
.topBox{
  height:30vh;
  .header{
    background-color: #fff;
    border-radius: 8px;
   .img{
     width: 100%;
     height: 25vh;
     overflow: hidden;
     background: url('./mine.webp');
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
       color: #212121;
       margin-top: 10px;
     }
   }
   .el-col{
     a{text-decoration: none;
     }
     .mmp{
       a{text-decoration: none;
     }
     }
   }
  }
}
.left{
  width: 205px;
  min-height: 90vh;
}
.main{
  min-height: 90vh;
  flex:1;
  min-height: 100%;
}
.right{
   min-height: 90vh;
  width: 205px;
}
.ctx{
  margin-top: 5px;
  background-color: #fff;
  border-radius: 8px;
}
</style>
