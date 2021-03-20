<template>
<div class="registerBox">
     <el-card>
         <div class="title">欢迎注册</div>
    <el-form :model="regForm" :rules="registerFormRules">
    <!-- 用户名 -->
    <el-form-item prop="username" label="用户名">
    <el-input v-model="regForm.username" prefix-icon="el-icon-user-solid" placeholder="请输入用户名"></el-input>
  </el-form-item >
  <!-- 密码 -->
   <el-form-item prop="password"  label="密 码">
    <el-input class="space" v-model="regForm.password" type="password" prefix-icon="el-icon-lock" placeholder="请输入密码"></el-input>
  </el-form-item>
   <!-- 邮箱 -->
    <el-form-item  prop="email" class="lab" label="邮 箱">
    <el-input class="space" v-model="regForm.email"  placeholder="请输入邮箱地址"></el-input>
  </el-form-item >
  <!-- 验证码 -->
   <el-form-item prop="mailcode" label="验证码">
    <el-input class="cinput" v-model="regForm.mailcode" placeholder="请输入验证码"></el-input>
    <el-button id="rbtn" :type="sbtntype" @click="getCode" >
      <span v-show="show">获取验证码</span>
      <span v-show="!show">{{count}}s后获取</span>
    </el-button>
     </el-form-item>
     <!-- 按钮 -->
    <el-form-item >
      <el-button id="signbtn" :type="lbtntype" @click="register" >注册</el-button>
      </el-form-item>
        </el-form>
     </el-card>
     </div>
</template>
<script>

export default {
  data () {
    return {
      regForm: {
        username: '',
        password: '',
        email: '',
        mailcode: ''
      },
      show: true,
      count: '60',
      sbtntype: 'primary',
      lbtntype: 'info',
      timmer: null,
      registerFormRules: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }],
        password: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
        email: [{ required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }],
        mailcode: [{ min: 6, max: 6, message: '请输入6位数字验证码', trigger: 'blur' }]
      }
    }
  },
  methods: {
    // 获取验证码
    async getCode () {
      const isEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
      if (this.show === false || !isEmail.test(this.regForm.email)) return
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
      const { data: res } = await this.$http.get('/sendmailcode', { params: { email: this.regForm.email } })
      // console.log(data)
      if (!res.code || res.code !== 200) return this.$message.error('发送验证失败')
      this.$message.success(res.msg)
    },
    async register () {
      if (this.show === '' || this.regForm.mailcode === '' || this.regForm.username === '' || this.regForm.password === '') return
      const { data: res } = await this.$http.post('/register', {
        username: this.regForm.username,
        password: this.regForm.password,
        mailcode: this.regForm.mailcode,
        email: this.regForm.email
      })
      if (res.code !== 200) return this.$message.error(res.msg)
      this.$message.success(res.msg)
      return this.$router.push('/login')
    }
  }
}
</script>
<style lang="less" scoped>
 .registerBox{
    width: 100vw;
    height: 100vh;
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    .el-card{
     width: 400px;
     height: 500px;
     .title{
         height: 20px;
      text-align: center;
      color: rgb(103, 179, 250);
      line-height: 20px;
      font-size: 20px;
      margin-top: 10px;
      margin-bottom: 30px;

     }
     .el-input{
         width: 210px;
         margin-bottom: 12px;
     }
     .space{
        margin-left: 10px;
     }
     .cinput{
         margin-left: 10px;
         margin-right: 10px;
         width: 120px;
     }
     #rbtn{
         width: 80px;
          padding-left: 3px;
     }
     #signbtn{
         margin-left: 60px;
         width: 220px;
     }
}
}

</style>
