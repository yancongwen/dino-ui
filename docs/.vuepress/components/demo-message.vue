<template>
  <div class="demo">
    <d-button @click="showMessage1">顶部提示</d-button>
    <d-button @click="showMessage2">底部提示</d-button>
    <d-button @click="showMessage3">中间提示</d-button>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button, Message } from '../../../index.js'

Vue.use(Message)

export default {
  components: {
    'd-button': Button
  },
  methods: {
    showMessage1 () {
      this.$Message('文件上传成功！<a href="">链接</a>', {
        autoClose: false,
        enableHtml: true,
        position: 'top',
        closeButton: {
          text: '知道了',
          callback: (data) => {
            console.log(data)
          }
        }
      })
    },
    showMessage2 () {
      this.$Message('文件上传成功！<a href="">链接</a>', {
        autoClose: 5,
        enableHtml: false,
        position: 'bottom'
      })
    },
    showMessage3 () {
      this.$Message('文件上传成功！<a href="">链接</a>', {
        autoClose: 5,
        enableHtml: true,
        position: 'middle'
      })
    }
  }
}
</script>

<style scoped>
.demo {
  padding: 20px 0;
}
</style>
