<template>
    <div class="box">
        <div class="dplayer">
            <VueDPlayer :options="options"></VueDPlayer>
        </div>
    </div>
</template>
<script>
import VueDPlayer from 'vue-dplayer'
export default {
  components: {
    VueDPlayer
  },
  data () {
    return {
      options: {
        video: {
          url: 'http://127.0.0.1:8989/live/fEdqWIASx.flv',
          type: 'flv'
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>

</style>
