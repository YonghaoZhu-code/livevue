<template>
    <div class="headerBox">
        <div class="logo">
          <img class="imgshow" src="../assets/logo.png"/>
        </div>
        <ul class="ulbox">
         <li><router-link to="/">首页</router-link ></li>
         <li><router-link to="/login">分类</router-link></li>
         <li><router-link to="/mine">排行</router-link></li>
         </ul>
         <div class="search">
             <el-input v-model="keyWord" size="large" placeholder="输入关键字搜索" ></el-input>
             <el-button type="danger" icon="el-icon-search" size="mini">搜索</el-button>
         </div>
         <div class="headimg">
             <div class="islogin" >
                <el-avatar :src="HeaderUrl" icon="el-icon-user-solid" :size="50"></el-avatar>
                <div v-if="userInfo.username" class="yeslogin" >
                    <div>{{userInfo.username}}</div>
                    <div @click="tomine">个人中心</div>
                    <div @click="loginOut">退出登录</div>
                </div>
                <div v-else class="tologin" @click="toLogin">请先登录</div>
             </div>
         </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      keyWord: '',
      HeaderUrl: ''
    }
  },
  watch: {
    userInfo (newValue) {
      if (newValue) {
        // 获取用户头像
        //    this.headimg=this.userInfo.HeaderUrl
        console.log('用户信息变化了，嘻嘻')
      }
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    ...mapActions(['setUserInfo']),
    toLogin () {
      this.$router.push({ name: 'login' })
    },
    loginOut () {
      window.sessionStorage.clear('token')
      // 清空用户信息
      this.setUserInfo({})
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
<style lang="less" scoped>
.headerBox{
    width: 100vw;
    height: 60px;
    padding: 0;
    display: flex;
    background-color: rgb(252, 208, 244);
    .logo{
        height: 60px;
        width: 170px;
        .imgshow {
            width: 100%;
            height: 100%;
        }
    }
.ulbox{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 60px;
  width: 280px;
  li{
     font-size: 20px;
     a{
       text-decoration: none;
       color: rgb(90, 36, 36);
     }
  }

}
    .search{
        height: 60px;
        margin-left: 60px;
        padding: 0;
        display: flex;
        .el-input{
            margin-top: 9px;
        }
        .el-button{
            height: 40px;
            margin-top: 9px;
        }
    }
    .headimg{
        margin-left: 150px;
        .islogin{
            height: 60px;
            display: flex;
            align-items: center;
            .tologin{
              margin-left: 3px;
              color: brown;
              cursor: pointer;
            }
            .yeslogin{
                display: flex;
                justify-content: space-between;
                width: 290px;
                div{
                    margin-left: 10px;
                    color: rgb(204, 102, 71);
                    cursor: pointer;
                }
            }
        }
    }
}

</style>
