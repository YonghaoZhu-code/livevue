<template>
<div style="background-color:rgb(225,237,225)">
 <div class="container">
  <div class="box">
  <div class="left"></div>
    <div class="main">
        <div class="mainbox">
            <!-- 左容器播放页面等位置 -->
      <div class="boxleft">
          <div class="lefttop">
              <!-- 左边头像位置 -->
             <div class="himg">
               <el-avatar :src="HeaderUrl" icon="el-icon-user-solid" :size="60"></el-avatar>
             </div>
             <div class="content">
               <div class="shang">TITLE</div>
               <div class="xia">
                <div class="zuo">
                  <div>恩七不甜</div>
                  <div><i class="iconfont icon-gift-fill" style="color:#ff0066;font-size: 22px;"></i>30万</div>
                  <div>NO：>1000</div>
                </div>
                <div class="you">
                  <div><i class="iconfont icon-heart"></i>关注</div>
                  <div>26万</div>
                </div>
               </div>
             </div>
             </div>
          <div class="leftmain">
            <div></div>
          </div>
      </div>
      <!-- 右容器弹幕位置 -->
      <div class="boxright">
        <div style="text-align:center;height:25px;width:300px;line-height: 25px;font-size: 14px;
                    color: #333;">前方高能</div>
        <div class="danmutop"></div>
        <div class="danmuctx">
          <div class="items"></div>
        </div>
        <div class="danmubuttom"></div>
      </div>
        </div>
        <div class="catalog">
          <div >TA的简介</div>
          <div class="logbox"></div>
        </div>
        <div class="zoom">
          <div >TA的动态</div>
          <div class="zoombox"></div>
        </div>
        </div>
  <div class="right"></div>
  </div>
</div>
</div>
</template>
<script>
export default {
  data () {
    return {
      HeaderUrl: ''
    }
  }
}
</script>
<style lang="less" scoped>
.container{
    width: 100%;
    min-height: 100vh;
    background: url('./onlivebg.jpg');
    background-repeat: no-repeat;
    background-size:115%;
    background-position:-90px -120px;
}

.box{
width:100%;
display:flex;
margin:0 auto;
}

.left{
width:72px;
min-height:500px;
}
.right{
 width:72px;
 min-height:500px;
}
.main{
flex:1;
min-height:500px;
.mainbox{
    display: flex;
    padding-top: 14px;
    .boxleft{
        width:905px;
        height: 734px;
        background-color:#fff;
        border-radius: 14px;
        overflow: hidden;
        .lefttop{
            width: 100%;
            height: 98px;
            background-color: #ffff;
            display: flex;
            align-items: center;
             .himg{
             margin-left: 18px;
             margin-right: 18px;
             height:58.84px;
             }
            .content{
             width:782px;
             height:58.84px;
             .shang{
               height:20.84;
             }
             .xia{
               display:flex;
               justify-content: space-between;
               min-height: 26px;
               margin-top: 12px;
               .zuo{
                 width: 300px;
                 display: flex;
                 justify-content: space-between;
                 :first-child{
                   text-align: left;
                 }
                 div{
                   text-align: center;
                   line-height: 26px;
                   width: 80px;
                   font-size: 12px;
                    color: #999;
                 }
               }
               .you{
                 display: flex;
                 width: 126px;
                 margin-right: 22px;
                 :first-child{
                   cursor: pointer;
                   background-color: #23ade5;
                   border-radius: 4px 0 0 4px;
                   color: #fff;
                 }
                 div{
                   border: 1px solid #e9eaec;
                   width: 63px;
                   display: flex;
                   color: #999;
                   font-size: 12px;
                   justify-content: center;
                   align-items: center;
                   border-radius: 0 4px 4px 0;
                 }
               }
             }
            }
        }
        .leftmain{
          background: #000;
          height: 510px;
        }
    }
    .boxright{
        margin-left:12px;
        width: 302px;
        height: 734px;
        background-color: #fff;
        border-radius: 14px;
        overflow: hidden;
        .danmutop{
          background: url('./danmubg.jpg');
          height: 96px;
          width: 300px;
          margin-bottom: 10px;
        }
        .danmuctx{
          background-color: #f8f8f8;
          height: 450px;
          overflow-y: overlay;
        }
        .danmubuttom{
          background-color: #f8f8f8;
          height: 153px;
        }
    }
}
.catalog{
  width: 905px ;
  margin-top: 50px;
  :first-child{
    width: 60px;
    color:#5cf ;
    font-size: 14px;
    margin-left: 30px;
    border-bottom: 2px solid #5cf;;
  }
  .logbox{
    box-sizing: border-box;
    border-radius: 14px;
    background-color: #fff;
    height: 149px;
    padding: 24px;
  }
}

.zoom{
      width: 905px ;
      min-height: 905px;
      margin-top: 50px;
  :first-child{
    width: 60px;
    color:#5cf ;
    font-size: 14px;
    margin-left: 30px;
    border-bottom: 2px solid #5cf;;
  }
  .zoombox{
    border-radius: 14px;
    background-color: #fff;
    box-sizing: border-box;
    height: 149px;
    padding: 24px;
  }
    }
}

</style>
