<template>
  <div class='d-tabs-pane' :class="{active: isActive}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DinoTabsPane',
  inject: ['eventBus'],
  props: {
    name: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  created() {
    this.eventBus.$on('change', value => {
      this.isActive = value === this.name
    })
  }
}
</script>

<style lang='scss' scoped>
.d-tabs-pane {
  flex-shrink: 0;
  width: 100%;
  position: relative;
  padding: 6px;
  visibility: hidden;
  &.active {
    visibility: visible;
  }
}
</style>
