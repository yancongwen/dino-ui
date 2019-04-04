<template>
  <div class="demo">
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
.demo {
  padding: 20px 0;
}
</style>
