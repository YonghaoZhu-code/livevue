<template>
<div>
<div class="top">
  <div class="bg">
    <div>
 <el-carousel :interval="3000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item" >
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
    </div>
  </div>
</div>
<div class="box">
<div class="left"></div>
<div class="main">
  <div class="seller">
    <div class="title">
      <h2>热门主播</h2>
      <a>
        <span>更多主播</span>
        <span class="el-icon-arrow-right"></span>
        </a>
    </div>
    <div class="ctx">
      <router-link :to="seller.dd" v-for="seller in sellers" :key="seller">
      <div class="show" >
        <div class="show-pic" :style="`background-image:url(${seller.imgurl}) `"></div>
        <div class="show-title">{{seller.title}}</div>
        <div class="show-mine">
          <div class="show-mine-name">{{seller.user}}</div>
          <div class="show-mine-see"><i class="iconfont icon-team"></i>2.6万</div>
        </div>
      </div>
      </router-link>
    </div>
  </div>
</div>
<div class="right"></div>
</div>
</div>
</template>
<script>
export default {
  data () {
    return {
      sellers: [
        {
          user: '奥迪',
          dd: '/login',
          imgurl: 'https://wallpaperm.cmcm.com/1ef12434060e9db21d8cb2917d6fafcb.jpg',
          title: 'RS7发布会'
        },
        {
          user: '宝马',
          dd: '/register',
          imgurl: 'https://wallpaperm.cmcm.com/d35a7602dacc4a4009d85a9896c146c1.jpg',
          title: '新品发布会'
        },
        {
          user: '奔驰',
          dd: '/login',
          imgurl: 'https://wallpaperm.cmcm.com/a4ed799f867feb1eebda7acdabd326d1.jpg',
          title: '新品发布会'
        },
        {
          user: '宾利',
          dd: '/login',
          imgurl: 'https://wallpaperm.cmcm.com/1ef12434060e9db21d8cb2917d6fafcb.jpg',
          title: 'RS7发布会'
        },
        {
          user: '布加迪',
          dd: '/login',
          imgurl: 'https://wallpaperm.cmcm.com/d35a7602dacc4a4009d85a9896c146c1.jpg',
          title: '新品发布会'
        },
        {
          user: '迈凯伦',
          dd: '/login',
          imgurl: 'https://wallpaperm.cmcm.com/a4ed799f867feb1eebda7acdabd326d1.jpg',
          title: '新品发布会'
        },
        {
          user: '迈凯伦',
          dd: '/login',
          imgurl: 'https://wallpaperm.cmcm.com/a4ed799f867feb1eebda7acdabd326d1.jpg',
          title: '新品发布会'
        }

      ]
    }
  }
}
</script>
<style lang="less" scoped>
.top{
  height: 612px;
  width: 100%;
  background-color: rgb(121, 86, 159);
  .bg{
    height: 565px;
    background-image: url('../assets/homebg.webp');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    div{
    width: 995px;
    height:493px;
    }
  }
  .el-carousel__item:nth-child(3) {
    background-image: url('../assets/3.jpg');
     background-size: cover;
  }
  .el-carousel__item:nth-child(4) {
    background-image: url('../assets/4.jpg');
     background-size: cover;
  }

  .el-carousel__item:nth-child(5) {
    background-image: url('../assets/1.jpg');
    background-size: cover;
  }
  .el-carousel__item:nth-child(6) {
    background-image: url('../assets/2.jpg');
     background-size: cover;
  }

}
.box{
width:100%;
display:flex;
margin:0 auto;
}

.left{
width:175px;
min-height:500px;
// background-color:skyblue;
}
.right{
 width:190px;
 min-height:500px;
//  background-color:pink;
}
.main{
flex:1;
min-height:500px;
.seller{
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

}

</style>
