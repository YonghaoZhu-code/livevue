<template>
    <div class="headerBox">
        <div class="logo">
          <img class="imgshow" src="../assets/logo.png"/>
        </div>
        <ul class="ulbox">
         <li><router-link to="/">首页</router-link ></li>
         <li><router-link to="/isliveing">直播</router-link></li>
         <li><router-link to="/classification">分类</router-link></li>
         </ul>
         <div class="search">
             <el-input v-model="keyWord" size="large" placeholder="输入关键字搜索" ></el-input>
             <el-button type="primary" icon="el-icon-search" size="mini">搜索</el-button>
         </div>
         <div class="headimg">
             <div class="islogin" >
                <el-avatar :src="HeaderUrl" icon="el-icon-user-solid" :size="50"></el-avatar>
                <div v-if="userInfo.username" class="yeslogin" >
                    <div>{{userInfo.username}}</div>
                   <router-link to="/mine">
                    <div>个人中心</div>
                    </router-link>
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
        // this.HeaderUrl = this.$baseURL + JSON.parse(window.sessionStorage.getItem('userInfo')).HeaderUrl
        if (this.userInfo.HeaderUrl === undefined) { this.HeaderUrl = '' } else { this.HeaderUrl = this.$baseURL + this.userInfo.HeaderUrl }
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
      window.sessionStorage.clear('userInfo')
      // 清空用户信息
      this.setUserInfo({})
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
<style lang="less" scoped>
.headerBox{
    width:100%;
    height: 60px;
    padding: 0;
    display: flex;
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
       color: #212121;
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
            a{
            text-decoration: none;
            }
            .tologin{
              margin-left: 3px;
              color: #212121;
              cursor: pointer;
            }
            .yeslogin{
                display: flex;
                justify-content: space-between;
                width: 290px;
                div{
                    margin-left: 10px;
                    color: #212121;
                    cursor: pointer;
                    font-size: 20px;
                }
            }
        }
    }
}

</style>
