<template>
  <div class="demo">
    <d-icon type="audio" :size="24"></d-icon>
    <d-icon type="zoomin" :size="24"></d-icon>
    <d-icon type="zoomout" :size="24"></d-icon>
    <d-icon type="loading" :size="24"></d-icon>
    <d-icon type="Dollar" :size="24"></d-icon>
    <d-icon type="download" :size="24" color="red"></d-icon>
    <d-icon type="comment" :size="24" @click="onclick" color="green"></d-icon>
  </div>
</template>

<script>
import { Icon } from '../../../index.js'

export default {
  name: 'DemoIcon',
  components: {
    'd-icon': Icon
  },
  methods: {
    onclick(value) {
      console.log(value)
    }
  }
}
</script>

<style scoped>
.demo {
  padding: 20px 0;
}
</style>
