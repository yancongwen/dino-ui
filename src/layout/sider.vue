<template>
  <transition name="d-slide">
    <div
      class="d-sider"
      v-if="visible"
    >
      <slot></slot>
      <button @click="visible=false">close</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'DinoSider',
  data() {
    return {
      visible: true
    }
  }
}
</script>

<style lang='scss' scoped>
.d-sider {
  position: relative;
  > button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.d-slide-enter-active,
.d-slide-leave-active {
  transition: all 0.5s;
}
.d-slide-enter,
.d-slide-leave-to {
  margin-left: -100px;
}
</style>
