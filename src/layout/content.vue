<template>
  <div class="d-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DinoContent'
}
</script>

<style lang='scss' scoped>
.d-content {
  flex: 1;
  width: 100%;
}
</style>
