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
               <div class="shang">{{liver.title||'无标题'}}</div>
               <div class="xia">
                <div class="zuo">
                  <div><i class="iconfont icon-UPzhu" style="color: #5896de;;font-size: 18px;"></i>{{liver.name||'恩七不甜'}}</div>
                  <div><i class="iconfont icon-gift-fill" style="color:#fb7299;font-size: 22px;"></i>{{liver.gift||2.2}}万</div>
                  <div><i class="iconfont icon-icranking" style="color:#bf4;font-size: 22px;"></i>NO.{{liver.no||999}}</div>
                </div>
                <div class="you">
                  <div><i class="iconfont icon-heart"></i>关注</div>
                  <div>{{liver.fans||1.2}}万</div>
                </div>
               </div>
             </div>
             </div>
          <div class="leftmain">
            <div v-show="liver.isLive"><liveplayer :playUrl="liver.playUrl"></liveplayer></div>
          </div>
          <div class="leftshopping">
            <div class="shoppinglogo" @click="goshopping">
              <i class="iconfont icon-shopping-cart1" style="font-size: 28px;color:#fff"></i>
              <span style="padding:4px;color:#fff">立即购买</span>
            </div>
          </div>
      </div>
      <!-- 右容器弹幕位置 -->
      <div class="boxright">
        <div style="text-align:center;height:25px;width:300px;line-height: 25px;font-size: 14px;
                    color: #333;">前方高能</div>
        <div class="danmutop"></div>
        <div class="danmuctx">
          <div class="msg">系统提示：原子带货直播内容及互动评论须严格遵守直播规范，严禁传播违法违规、低俗血暴、吸烟酗酒、造谣诈骗等不良有害信息。如有违规，平台将进行封禁直至永久封停账号哦！</div>
          <div class="itemctx" ref="danmu">
          <div class="items" v-for="(danmsg,index) in message" :key="index">
            <span class="username">{{danmsg.username||'恩七不甜 : '}}</span>
            <span class="danmumsg">{{danmsg.msg||''}}</span>
          </div>
          </div>
        </div>
        <div class="danmubuttom">
         <div class="inputmsg">
  <el-input
  type="textarea"
  :rows="2"
  placeholder="请输入弹幕内容"
  v-model="danmumsg">
</el-input></div>
<div class="senddanmu"><el-button type="primary" @click="senddanmu">发送</el-button>
</div>
        </div>
      </div>
        </div>
        <div class="catalog">
          <div class="first">TA的简介</div>
          <div class="logbox">{{liver.catalog}}</div>
        </div>
        <div class="zoom">
          <div class="first">TA的动态</div>
          <div class="zoombox">
            <div style="width:70px;padding:6px">
               <el-avatar :src="HeaderUrl" icon="el-icon-user-solid" :size="65"></el-avatar>
            </div>
            <div class="zoomctx">
            <div>{{liver.name||'恩七不甜'}}</div>
            <div class="date">1.31</div>
            <div class="text">内容区</div>
            </div>
          </div>
        </div>
        </div>
  <div class="right"></div>
  </div>
</div>
</div>
</template>
<script>
import liveplayer from '../../components/live'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      ws: {},
      HeaderUrl: '',
      liver: {},
      danmumsg: '',
      message: []
    }
  },
  components: { liveplayer },
  methods: {
    async getliverInfo () {
      const uid = this.$route.params.uid || ''
      const { data: res } = await this.$http.get('/getliverinfo', { params: { uid } })
      if (res.code !== 200) return this.$message.error('获取主播数据失败')
      this.liver = res.liver
    },
    senddanmu () {
      if (this.ws.readyState !== WebSocket.OPEN) {
        console.log('连接未建立，还不能发送消息')
        return
      }
      if (this.userInfo.username === undefined) {
        this.$message.error('请先登录')
        return
      }
      if (this.danmumsg) {
        this.ws.send(JSON.stringify({ username: this.userInfo.username + ' : ', msg: this.danmumsg }))
        console.log('发送弹幕成功')
      }
    },
    initWebSocket () {
      const wsurl = 'ws://localhost:8383/' + this.$route.params.uid
      this.ws = new WebSocket(wsurl)
      this.ws.addEventListener('open', function (event) {
        console.log('连接成功，可以实时通讯')
      })
      this.ws.addEventListener('message', (event) => {
        this.message.push(JSON.parse(event.data))
        console.log(this.message)
        // 解决弹幕信息自动滚动最低端
        this.$nextTick(() => {
          this.$refs.danmu.scrollTop = this.$refs.danmu.scrollHeight
        })
      })
    },
    async getHeaderurl () {
      const uid = this.$route.params.uid || ''
      const { data: res } = await this.$http.get('/getheaderurl', { params: { uid } })
      this.HeaderUrl = this.$baseURL + res.HeaderUrl
      console.log(this.HeaderUrl)
    },
    goshopping () {
      if (this.liver.shopping) {
        window.open(this.liver.shopping)
      } else {
        this.$message.error('主播未上架商品')
      }
    },
    toinroom () {
      if (this.ws.readyState !== WebSocket.OPEN) {
        console.log('连接未建立')
        return
      }
      if (this.userInfo.username !== undefined) {
        this.ws.send(JSON.stringify({ username: this.userInfo.username + ' ', msg: '进入直播间' }))
        console.log(this.userInfo)
      }
    }
  },
  beforeMount () {
    this.initWebSocket()
    console.log('---挂载前--')
  },
  mounted () {
    window.scroll(0, 0)
    this.getliverInfo()
    this.getHeaderurl()
    setTimeout(() => {
      this.toinroom()
    }, 1000)
  },
  computed: {
    ...mapState(['userInfo'])
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
        .leftshopping{
          width: 100%;
          height: 120px;
          display: flex;
          justify-content: center;
          align-items: center;
          .shoppinglogo{
            background-color:#ff5000;
            width: 150px;
            height: 60px;
            border-radius: 12px;
            padding: 8px;
            font-size:28px;
            line-height: 48px;
            cursor: pointer;
          }
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
           .msg{
            margin: 0 auto;
            width: 90%;
            padding: 5px;
            font-size: 12px;
             line-height: 1.5;
             color: #fb7299;}
             .itemctx{
             margin: 0 auto;
              width: 90%;
              padding: 5px;
              height: 350px;
              overflow-x: hidden;
              overflow-y:auto;
              .items{
              max-height: 68px;
              overflow: hidden;
              font-size: 12px;
              width: 280px;
              padding: 5px;
              .username{
                color: #999;
                font-size: 14px;
              }
              .danmumsg{
                color: #646c7a;
               word-wrap: break-word;
               white-space: normal;
              }
             }   }
        }
        .danmubuttom{
          height: 153px;
           background-color: #f8f8f8;
          .inputmsg{
            margin: 0 auto;
            // padding-top: 30px;
            width:235px ;
          }
          .senddanmu{
            padding: 5px;
           margin-left: 195px;
          }
        }
    }
}
.first{
    width: 60px;
    color:#5cf ;
    font-size: 14px;
    margin-left: 30px;
    border-bottom: 2px solid #5cf;;
  }
.catalog{
  width: 905px ;
  margin-top: 50px;
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
  .zoombox{
    border-radius: 4px;
    background-color: #fff;
    box-sizing: border-box;
    height: 240px;
    padding: 12px;
    display:flex;
    .zoomctx{
      width: 534px;
      :first-child{
        color: #fb7299;
        font-size: 16px;
        margin-top: 10px;
        padding: 3px;
      }
      .date{
        color: #99a2aa;
        font-size: 12px;
        padding: 3px;
      }
      .text{
        margin-top: 8px;
        padding: 3px;
        width: 524px;
        height: 54px;
      }
    }
  }
    }
}

</style>
