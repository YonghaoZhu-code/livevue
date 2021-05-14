<template>
    <div class="box">
<div class="left"></div>
<div class="main">

     <div class="liver">
    <div class="title">
      <h2>正在直播</h2>
    </div>
    <div class="ctx">
      <router-link :to="`/onlive/${liver.uid || 0}`" v-for="(liver,index) in livers" :key="index">
      <div class="show" >
        <div class="show-pic" :style="`background-image:url(${liver.imgUrl || 0}) `"></div>
        <div class="show-title">{{liver.title || "用户闲置177"}}</div>
        <div class="show-mine">
          <div class="show-mine-name">{{liver.name || "恩七不甜"}}</div>
          <div class="show-mine-see"><i class="iconfont icon-team"></i>{{liver.fans || 1.2}}万</div>
        </div>
      </div>
      </router-link>
    </div>
  </div>
</div>
<div class="right"></div>
</div>
</template>
<script>

export default {

  data () {
    return {
      livers: {}
    }
  },
  methods: {
    // 获取正在直播的主播
    async getLivinglivers () {
      const { data: res } = await this.$http.get('/onliveing')
      if (res.code !== 200) return this.$message.error('当前没有主播正在直播')
      this.livers = res.livinglist
    }
  },
  mounted () {
    this.getLivinglivers()
  }
}
</script>
<style lang="less" scoped>
.box{
  min-height: 90vh;
  width: 100vw;
  background-color: #efe;
  display: flex;
}
.left{
  width: 175px;
  min-height: 90vh;
}
.main{
  min-height: 90vh;
  flex:1;
  min-height: 100%;
}
.right{
   min-height: 90vh;
  width: 175px;
}

.liver{
  margin-top: 10px;
  padding: 0 10px;
}
.title{
  margin: 0;
    font-size: 24px;
    color: #000;
    line-height: 33px;
    font-weight: 400;
    position: relative;
    a{
    font-size: 14px;
    color: #999;
    bottom: 2px;
    right: 10px;
    position: absolute;
    span{
     vertical-align: middle;
    }}
  }
 .ctx{font-size: 0;
    margin-top: 16px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    a{
      text-decoration:none
    }
    :hover{
      transform:scale(1.03);
    }
    .show {
      position: relative;
      width: 188px;
      height: 153px;
      background: #fff;
      border-radius: 10px;
      margin-bottom: 10px;
      .show-pic {
        position: relative;
        width: 188px;
        height: 105px;
        border-radius: 4px;
        background-size: cover;
        background-repeat: no-repeat;
        }
      .show-title {
        position: relative;
        width: 100%;
        height: 24px;
        line-height: 24px;
        padding-left: 3px;
        color: #333333;
        font-size: 14px;
        overflow: hidden;
      }
      .show-mine {
        position: relative;
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding-left: 3px;
        padding-right: 3px;
        margin-top: 3px;
        .show-mine-name {
          position: relative;
          width: 40%;
          display: inline;
          justify-content: start;
          color: #a6a6a6;
          font-size: 12px;
        }
        .show-mine-see {
          position: relative;
          width: 40%;
          display: inline;
          padding-right: 10px;
          text-align: right;
          color: #a6a6a6;
          font-size: 14px;
        }
      }
    }

    }
</style>
