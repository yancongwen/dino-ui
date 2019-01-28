<template>
  <div class="d-layout" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DinoLayout',
  data() {
    return {
      classes: {
        hasSider: false
      }
    }
  },
  mounted() {
    this.$children.forEach(child => {
      if(child.$options.name === 'DinoSider') {
        this.classes.hasSider = true
      }
    })
  }
}
</script>

<style lang='scss' scoped>
.d-layout {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  &.hasSider {
    flex-direction: row;
  }
}
</style>
