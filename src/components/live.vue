<template>
        <div class="dplayer">
            <VueDPlayer :options="options" v-if="canlive"></VueDPlayer>
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
  watch: {
    playUrl (newval, oldval) {
      this.options.video.url = newval
      this.canlive = true
    }
  },
  data () {
    return {
      canlive: false,
      options: {
        video: {
          url: '',
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
