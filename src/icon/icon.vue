<template>
  <svg
    class="d-icon"
    aria-hidden="true"
    :style="styles"
  >
    <use :xlink:href="`#icon-${type}`"></use>
  </svg>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },
    color: String,
    size: Number
  },
  computed: {
    styles() {
      let style = {}
      if (this.size) {
        style.width = this.size + 'px'
        style.height = this.size + 'px'
      }
      if (this.color) {
        style.color = this.color
      }
      return style
    }
  }
}
</script>

<style lang='scss' scoped>
.d-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
