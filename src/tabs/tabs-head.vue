<template>
  <div class='d-tabs-head'>
    <slot></slot>
    <div class="line" ref="line" :style="lineStyles"></div>
  </div>
</template>

<script>
export default {
  name: 'DinoTabsHead',
  inject: ['eventBus'],
  data() {
    return {
      lineStyles: {
        left: 0,
        width: 0
      }
    }
  },
  mounted() {
    this.eventBus.$on('change', (value, vm) => {
      let praentLeft = this.$el.getBoundingClientRect().left
      let { width, left } = vm.$el.getBoundingClientRect()
      this.lineStyles.left = `${left-praentLeft}px`
      this.lineStyles.width = `${width}px`
    })
  }
}
</script>

<style lang='scss' scoped>
.d-tabs-head {
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #ddd;
  .line {
    position: absolute;
    bottom: -1px;
    border-bottom: 2px solid rgb(72, 153, 230);
    transition: all 350ms;
  }
}
</style>
