<template>
  <div class='d-tabs-body' :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DinoTabsBody',
  inject: ['eventBus'],
  data() {
    return {
      currentIndex: 0
    }
  },
  computed: {
    styles() {
      let duration = this.eventBus.animated ? 0.3 : 0
      return {
        'transform': `translateX(-${this.currentIndex*100}%)`,
        'transition-duration': `${duration}s`
      }
    }
  },
  mounted() {
    this.eventBus.$on('change', value => {
      this.$children.forEach( (vm, index) => {
        if (vm.name === value) {
          this.currentIndex = index
        }
      })
    })
  }
}
</script>

<style lang='scss' scoped>
.d-tabs-body {
  position: relative;
  display: flex;
  transition: transform .3s ease-in-out;
}
</style>
