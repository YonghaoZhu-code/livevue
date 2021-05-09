<template>
    <div class="box">
<div class="form">
     <el-form label-position="right" label-width="80px" :model="live" >
  <el-form-item label="上传封面" class="upsize">
      <el-upload
  action="http://127.0.0.1:9300/uploads/liveimg"
  :data="{uid:userInfo.uid}"
  name="liveimg"
  list-type="picture-card"
  limit=1
  >
    <i slot="default" class="el-icon-plus"></i>
    <div slot="file" slot-scope="{file}">
      <img
        class="el-upload-list__item-thumbnail"
        :src="file.url" alt=""
      >
      <span class="el-upload-list__item-actions">
        <span
          class="el-upload-list__item-preview"
          @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
    </div>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
  </el-form-item>
   <el-form-item label="直播标题" >
    <el-input v-model="live.title"></el-input>
  </el-form-item>
  <el-form-item label="商品链接">
   <el-input v-model="live.shopping"></el-input>
  </el-form-item>
  <el-form-item label="简介">
     <el-input type="textarea" v-model="live.catalog"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onnext">下一步</el-button>
  </el-form-item>
</el-form>
</div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      live: {
        title: '',
        catalog: '',
        shopping: ''
      }
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleRemove (file) {
      if (file) {
        const filePath = file.response.data.tmp_path
        const i = this.formData.pics.findIndex(x => x.pic === filePath)
        this.formData.splice(i, 1)
      }
    },
    async  onnext () {
      const { data: res } = await this.$http.get('/tolive', { params: { uid: this.userInfo.uid, title: this.live.title, catalog: this.live.catalog, shopping: this.live.shopping } })
      if (res.code !== 200) return this.$message.error('服务器故障')
      this.$router.push('toend')
    }
  }

}
</script>
<style lang="less" scoped>
.upsize{
    width: 300px;
     height: 100px;
       /deep/ .el-upload--picture-card{
                    width: 100px;
                    height: 100px;
                }
                /deep/ .el-upload{
                    width: 100px;
                    height: 100px;
                    line-height: 100px;
                }
                /deep/ .el-upload-list--picture-card .el-upload-list__item{
                    width: 100px;
                    height: 100px;
                    line-height: 100px;
                }
                /deep/ .el-upload-list--picture-card .el-upload-list__item-thumbnail{
                    width: 100px;
                    height: 100px;
                    line-height: 100px;
                }
                /deep/ .avatar{
                    width: 100px;
                    height: 100px;
                }
    }

.form{
    width: 600px;
    margin: 0 auto;
    padding-bottom: 6px;
    padding-top: 4px;

}
</style>
