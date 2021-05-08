<template>
    <div class="login-container">
    <el-card class="box-card">
      <div class="loginTitle">请登录</div>
      <el-form :model="loginForm"  class="login-form" :rules="loginFormRules" ref="loginFormRef">
    <el-tabs value="first" :stretch="true">
    <el-tab-pane label="密码登录" name="first">
      <!-- 用户账号 -->
  <el-form-item prop="loginid" label="用户名">
    <el-input v-model="loginForm.loginid" prefix-icon="el-icon-user-solid" placeholder="请输入用户名或邮箱"></el-input>
  </el-form-item >
  <!-- 密码 -->
   <el-form-item prop="password" label="密 码">
    <el-input v-model="loginForm.password" type="password" prefix-icon="el-icon-lock" placeholder="请输入密码"></el-input>
  </el-form-item>
  <!-- 按钮区 -->
   <el-form-item class="btns">
      <el-button type="primary" @click="login" >登录</el-button>
      <el-button type="info" @click="reset" >重置</el-button>
   </el-form-item>

    </el-tab-pane>
    <el-tab-pane label="验证码登录" name="second">
      <el-form-item  prop="email" label="邮 箱">
    <el-input v-model="loginForm.email"  placeholder="请输入邮箱地址"></el-input>
  </el-form-item >
  <!-- 验证码 -->
   <el-form-item prop="code" label="验证码">
    <el-input class="codeinput" v-model="loginForm.code" placeholder="请输入验证码"></el-input>
    <el-button id="btn" :type="sbtntype" @click="getCode" >
      <span v-show="show">获取验证码</span>
      <span v-show="!show">{{count}}s后获取</span>
    </el-button>
  </el-form-item>
  <!-- 按钮区 -->
   <el-form-item class="btns">
      <el-button id="loginbtn" :type="lbtntype" @click="codelogin" >登 录</el-button>
  </el-form-item>
 </el-tab-pane>
 <div @click="register" class="register">没有账号？点击注册</div>
  </el-tabs>
  </el-form>
  </el-card>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      loginForm: {
        loginid: '',
        password: '',
        email: '',
        code: '',
        timmer: null
      },
      loginFormRules: {
        loginid: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }],
        password: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
        email: [{ required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }],
        code: [{ min: 6, max: 6, message: '请输入6位数字验证码', trigger: 'blur' }]
      },
      show: true,
      count: '60',
      sbtntype: 'primary',
      lbtntype: 'info'

    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    ...mapActions(['setUserInfo']),
    register () {
      this.$router.push({ name: 'register' })
    },
    // 通过密码发送登录验证
    async login () {
      if (this.loginForm.loginid === '' || this.loginForm.password === '') return
      const { data: res } = await this.$http.post('/loginbypw', { loginid: this.loginForm.loginid, password: this.loginForm.password })
      if (res.code !== 200) return this.$message.error(res.msg)
      const userInfo = JSON.stringify(res.userInfo)
      window.sessionStorage.setItem('userInfo', userInfo)
      this.setUserInfo(res.userInfo)
      this.$router.push('/')
      return this.$message.success(res.msg)
    },
    reset () { this.$refs.loginFormRef.resetFields() },
    // 通过验证码登录
    async  codelogin () {
      if (this.lbtntype === 'info' || this.loginForm.code === '' || this.loginForm.email === '') return
      const { data: res } = await this.$http.get('loginbymail', { params: { email: this.loginForm.email, mailcode: this.loginForm.code } })
      // console.log(data)
      if (res.code !== 200) return this.$message.error(res.msg)
      // window.sessionStorage.setItem('token', res.Token)
      return this.$message.success(res.msg)
    },
    // 获取验证码
    async getCode () {
      const isEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
      if (this.show === false || !isEmail.test(this.loginForm.email)) return
      this.show = false
      this.sbtntype = 'info'
      this.lbtntype = 'primary'
      this.timmer = setInterval(() => { this.count-- }, 1000)
      setTimeout(() => {
        this.show = true
        this.count = 60
        this.sbtntype = 'primary'
        this.lbtntype = 'info'
        clearInterval(this.timmer)
      }, 60000)
      // 请求发送验证码
      const { data: res } = await this.$http.get('/sendmailcode', { params: { email: this.loginForm.email } })
      // console.log(data)
      if (res.code !== 200) return this.$message.error('发送验证失败')
      this.$message.success(res.msg)
    }
  }
}
</script>
<style lang="less" scoped>
.login-container{
    background: url('../assets/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 90vh;
    width: 100vw;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box-card{
    width: 450px;
    height: 400px;
    background: #fff;
    .loginTitle{
      height: 20px;
      text-align: center;
      color: rgb(103, 179, 250);
      line-height: 20px;
      font-size: 20px;
    }
    .el-tabs{
      .el-tab-pane{
        margin-top: 10px;
        height: 200px;
        .el-input{
          width: 220px;
          margin: 0 auto;
          display: block;
        }
        .codeinput{
          display: inline-block;
          width: 120px;
          margin-left: 40px;
        }
        #btn{
          margin: 0px;
          margin-left: 10px;
          width: 90px;
          padding-left: 5px;
        }
      }
      .btns{
        margin-top: 30px;
        display: flex;
        .el-button{
          margin-left: 95px;
          margin-right: -15px;
        }
        #loginbtn{
          width: 230px;
          margin-left: 90px;

        }
      }
      .register{
        cursor: pointer;
        margin: 10px 10px;
        color: rgb(75, 164, 236);
      }
    }
}

</style>
