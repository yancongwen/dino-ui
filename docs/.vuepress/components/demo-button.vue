<template>
  <div class='demo'>
    <d-button>按钮</d-button>
    <d-button disabled>按钮</d-button>
    <d-button icon="setting">设置</d-button>
    <d-button icon="setting" icon-position="right">设置</d-button>
    <d-button :loading="true" icon-position="right">加载中</d-button>
    <d-button icon="download" :loading="loading" @click="changeLoading">点击切换状态</d-button>
    <d-button-group>
      <d-button>上一页</d-button>
      <d-button>更多</d-button>
      <d-button>下一页</d-button>
    </d-button-group>
  </div>
</template>

<script>
import { Button, ButtonGroup } from '../../../index.js'

export default {
  components: {
    'd-button': Button,
    'd-button-group': ButtonGroup
  }
}
</script>

<style scoped>
</style>
