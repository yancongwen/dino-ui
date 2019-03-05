<template>
  <div class="d-tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'DinoTabs',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: [String, Number]
    },
    animated: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      eventBus: new Vue()
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  mounted() {
    let valid = this.validator()
    if (!valid) {
      console.warn('DinoTabs 组件的子元素不合法')
    }
    this.eventBus.$on('change', value => {
      this.$emit('change', value)
    })
    this.eventBus.animated = this.animated
    this.init()
  },
  methods: {
    init() {
      // 初始化组件时向触发一次事件以向下传递数据
      let current = this.value
      if (current === undefined) {
        current = this.$children[0].$children[0].name
      }
      this.$children.forEach( vm => {
        if (vm.$options.name === 'DinoTabsHead') {
          vm.$children.forEach( childVm => {
            if (childVm.$options.name === 'DinoTabsItem'
              && childVm.name === current) {
              // 本没必要传递 childVm 对象，为了实现 DinoTabsHead 组件中标签切换动画而传递
              this.eventBus.$emit('change', current, childVm)
            }
          })
        }
      })
    },
    // 检查子元素是否合规
    validator() {
      let valid = true
      if ( this.$children.length !==2 || this.$children.length < this.$el.children.length) {
        valid = false
      }
      for (let child of this.$children) {
        let name = child.$options.name
        if (['DinoTabsHead', 'DinoTabsBody'].indexOf(name) === -1) {
          valid = false
        }
      }
      return valid
    }
  }
}
</script>

<style lang='scss' scoped>
.d-tabs {
  position: relative;
  overflow: hidden;
}
</style>
