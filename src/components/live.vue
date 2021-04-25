<template>
        <div class="dplayer">
            <VueDPlayer :options="options"></VueDPlayer>
        </div>
</template>
<script>
import VueDPlayer from 'vue-dplayer'
import 'vue-dplayer/dist/vue-dplayer.css'
export default {
  components: {
    VueDPlayer
  },
  props: {
    playUrl: String
  },
  data () {
    return {
      options: {
        video: {
          url: this.playUrl,
          type: 'flv'
        },
        live: true,
        danmaku: false
      }
    }
  }
}
</script>
<style lang="less" scoped>
.dplayer{
    width: 100%;
    height: 100%;
}
</style>
