<template>
  <div class='d-tabs-item' :class="classes" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DinoTabsItem',
  inject: ['eventBus'],
  props: {
    name: {
      type: [String, Number],
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      active: false
    }
  },
  computed: {
    classes() {
      return {
        disabled: this.disabled,
        active: this.active
      }
    }
  },
  created() {
    this.eventBus.$on('change', (value) => {
      this.active = this.name === value
    })
  },
  methods: {
    handleClick() {
      if (!this.disabled) {
        this.eventBus.$emit('change', this.name, this)
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.d-tabs-item {
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 8px 12px;
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
  cursor: pointer;
  &.active {
    color: rgb(72, 153, 230);
  }
  &.disabled {
    cursor: not-allowed;
    color: #888;
  }
}
</style>
