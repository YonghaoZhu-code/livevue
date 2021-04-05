<template>
    <div>
      <div v-for="item in items" :key="item">
        <div>{{item.url}}</div>
        <div>{{item.name}}</div>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      items: [{
        url: 'http://',
        name: 'admin'
      },
      {
        url: 'http://',
        name: 'admin'
      }]
    }
  }
}
</script>
<style lang="less" scoped>

</style>
