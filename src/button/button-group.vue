<template>
  <div class="d-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DinoButtonGroup',
  mounted () {
    if (this.$children.length < this.$el.children.length) {
      console.warn(`DinoButtonGroup 的子元素应该全是 DinoButton`)
      return
    }
    for (let child of this.$children) {
      let name = child.$options.name
      if (name !== 'DinoButton') {
        console.warn(`DinoButtonGroup 的子元素应该全是 DinoButton`)
        return
      }
    }
  }
}
</script>

<style lang='scss' scoped>
$border-radius: 4px;
.d-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .d-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
