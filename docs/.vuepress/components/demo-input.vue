<template>
  <div class="demo">
    <d-input v-model="data" clearable class="item"></d-input>
    <d-input v-model="data" class="item"></d-input>
    <span class="item">双向绑定：{{data}}</span>
    <d-input type="password" placeholder="密码" element-id="test-id" class="item"></d-input>
    <d-input placeholder="禁止" disabled width="100" class="item"></d-input>
    <d-input placeholder="readonly" readonly width="100" class="item"></d-input>
  </div>
</template>

<script>
import { Input } from '../../../index.js'

export default {
  components: {
    'd-input': Input
  },
  data () {
    return {
      data: 1234
    }
  }
}
</script>

<style scoped>
.demo {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  padding: 20px 0;
}
.item {
  margin: 5px;
}
</style>
