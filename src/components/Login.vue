<template>
    <div class="login-container">
    <el-card class="box-card">
      <div class="loginTitle">请登录</div>
      <el-form :model="loginForm"  class="login-form" :rules="loginFormRules" ref="loginFormRef">
    <el-tabs value="first" stretch="true">
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
 <div class="register"><a>没有账号？点击注册</a></div>
  </el-tabs>
  </el-form>
  </el-card>
    </div>
</template>
<script>
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
  methods: {
    // 通过密码发送登录验证
    async login () {
      if (this.loginForm.loginid === '' || this.loginForm.password === '') return
      const data = await this.$http.post('/loginbypw', { loginid: this.loginForm.loginid, password: this.loginForm.password })
      console.log(data)
    },
    reset () { this.$refs.loginFormRef.resetFields() },
    async  codelogin () {
      if (this.lbtntype === 'info' || this.loginForm.code === '' || this.loginForm.email === '') return
      const data = await this.$http.get('loginbymail', { params: { email: this.loginForm.email, code: this.loginForm.code } })
      console.log(data)
    },
    // 请求发送验证码
    async getCode () {
      if (this.show === false || this.loginForm.email === '') return
      this.show = false
      this.sbtntype = 'info'
      this.lbtntype = 'primary'
      // 通过验证码登录
      const data = await this.$http.get('/sendmailcode', { params: { email: this.loginForm.email } })
      console.log(data)
      this.timmer = setInterval(() => { this.count-- }, 1000)
      setTimeout(() => {
        this.show = true
        this.count = 60
        this.sbtntype = 'primary'
        this.lbtntype = 'info'
        clearInterval(this.timmer)
      }, 60000)
    }
  }
}
</script>
<style lang="less" scoped>
.login-container{
    background-color: aqua;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box-card{
    width: 450px;
    height: 400px;
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
        margin: 10px 10px;
      }
    }
}

</style>
