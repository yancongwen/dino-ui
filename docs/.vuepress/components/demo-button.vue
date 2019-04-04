<template>
  <div class="demo">
    <d-button>按钮</d-button>
    <d-button disabled>按钮</d-button>
    <d-button icon="setting">设置</d-button>
    <d-button icon="setting" icon-position="right">设置</d-button>
    <d-button :loading="true" icon-position="right">加载中</d-button>
    <d-button icon="download" :loading="loading" @click="changeLoading">点击切换状态</d-button>
  </div>
</template>

<script>
import { Button } from '../../../index.js'

export default {
  components: {
    'd-button': Button
  },
  data () {
    return {
      loading: false,
    }
  },
  methods: {
    changeLoading () {
      this.loading = !this.loading
    }
  }
}
</script>

<style scoped>
.demo {
  padding: 20px 0;
}
</style>
