<template>
  <div class='d-collapse'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DinoCollapse',
  props: {
    value: {
      type: [Array, String]
    },
    accordion: {
      type: Boolean,
      default: false
    },
    simple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  mounted() {
    this.setActive()
  },
  watch: {
    value() {
      this.currentValue = this.value
    },
    currentValue() {
      this.setActive()
    }
  },
  methods: {
    setActive() {
      const activeKey = this.getActiveKey()
      this.$children.forEach((child, index) => {
        const name = child.name || index.toString()
        child.isActive = activeKey.indexOf(name) > -1
        child.index = index
      })
    },
    getActiveKey() {
      let activeKey = this.currentValue || []

      if (!Array.isArray(activeKey)) {
        activeKey = [activeKey]
      }

      if (this.accordion && activeKey.length >= 1) {
        activeKey = [activeKey[0]]
      }

      for (let i = 0; i < activeKey.length; i++) {
        activeKey[i] = activeKey[i].toString()
      }
      return activeKey
    },
    toggle(data) {
      let { name, isActive } = data
      let newActiveKey = []
      if (this.accordion) {
        if (isActive) {
          newActiveKey = []
        } else {
          newActiveKey = [name]
        }
      } else {
        let activeKey = this.getActiveKey()
        const nameIndex = activeKey.indexOf(name)
        if (isActive) {
          if (nameIndex > -1) {
            activeKey.splice(nameIndex, 1)
          }
        } else {
          if (nameIndex < 0) {
            activeKey.push(name)
          }
        }
        newActiveKey = activeKey
      }
      this.currentValue = newActiveKey
      this.$emit('input', newActiveKey)
      this.$emit('on-change', newActiveKey)
    }
  }
}
</script>

<style lang='scss' scoped>
.d-collapse {
  position: relative;
  background-color: #f7f7f7;
  color: #666;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
