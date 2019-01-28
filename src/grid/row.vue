<template>
  <div
    class="d-row"
    :class="classes"
    :style="styles"
  >
    <slot></slot>
  </div>
</template>

<script>
const prefixCls = 'd-row'

export default {
  name: 'DinoRow',
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    // 水平轴对齐方式，默认左对齐
    justify: {
      default: 'start',
      validator(value) {
        return ['start', 'end', 'center', 'space-around', 'space-between'].includes(value)
      }
    },
    // 垂直轴对齐方式，默认顶部对齐
    align: {
      default: 'top',
      validator(value) {
        return ['top', 'middle', 'bottom', 'baseline', 'stretch'].includes(value)
      }
    }
  },
  computed: {
    classes() {
      return [`${prefixCls}-align-${this.align}`, `${prefixCls}-justify-${this.justify}`]
    },
    styles() {
      let style = {}
      if (this.gutter !== 0) {
        style = {
          marginLeft: this.gutter / -2 + 'px',
          marginRight: this.gutter / -2 + 'px'
        }
      }
      return style
    }
  },
  methods: {
    // 将 gutter 传递给子组件
    updateGutter() {
      for (let child of this.$children) {
        let name = child.$options.name
        if ('DinoCol' === name) {
          child.gutter = this.gutter
        }
      }
    },
    validateChildren() {
      let valid = true
      if (this.$children.length < this.$el.children.length) {
        valid = false
      }
      for (let child of this.$children) {
        let name = child.$options.name
        if (!['DinoRow', 'DinoCol'].includes(name)) {
          valid = false
        }
      }
      valid || console.warn(`DinoRow 的子元素应该全是 DinoCol 或者 DinoRow 组件`)
    }
  },
  mounted() {
    this.validateChildren()
    this.updateGutter()
  },
  watch: {
    gutter() {
      this.updateGutter()
    }
  }
}
</script>

<style lang='scss' scoped>
.d-row {
  display: flex;
  flex-flow: row wrap;
  &.d-row-justify-left {
    justify-content: flex-start;
  }
  &.d-row-justify-right {
    justify-content: flex-end;
  }
  &.d-row-justify-center {
    justify-content: center;
  }
  &.d-row-justify-space-around {
    justify-content: space-around;
  }
  &.d-row-justify-space-between {
    justify-content: space-between;
  }
  &.d-row-align-top {
    align-items: flex-start;
  }
  &.d-row-align-bottom {
    align-items: flex-end;
  }
  &.d-row-align-middle {
    align-items: center;
  }
  &.d-row-align-baseline {
    align-items: baseline;
  }
  &.d-row-align-stretch {
    align-items: stretch;
  }
}
</style>
