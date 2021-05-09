<template>
    <div class="box">
    <div class="left">
        <h1>请使用OBS工具推流</h1>
        <h2 style="font-size:14px;color:#4fc1e9">官网地址: https://obsproject.com</h2>
        <p style="margin:14px 0px">推流密地址: rtmp://localhost/live</p>
        <p style="padding-top:12px">推流密钥: {{userInfo.uid}}</p>
    </div>
    <div class="right"></div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {

  }

}
</script>
<style lang="less" scoped>
.box{
    display: flex;

 .left{
     padding: 24px;
        width: 430px;
         font-size: 24px;
    color: #999;
    line-height: 33px;
    font-weight: 400;
    min-height: 260px;
    }
}

</style>
