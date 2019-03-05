<template>
  <div class='d-collapse-item'>
    <div class="d-collapse-header" @click="handleClick">
      <d-icon type="right" class="d-icon" v-if="!hideArrow" :class="{down: isActive}"></d-icon>
      <slot></slot>
    </div>
    <div class="d-collapse-content" v-if="isActive">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import dIcon from '../icon/icon'

export default {
  name: 'DinoCollapseItem',
  components: {
    dIcon
  },
  props: {
    name: {
      type: String
    },
    hideArrow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      index: 0,
      isActive: false
    }
  },
  methods: {
    handleClick() {
      this.$parent.toggle({
        name: this.name || this.index,
        isActive: this.isActive
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.d-collapse-item {
  position: relative;
  border-top: 1px solid #ccc;
  .d-collapse-header {
    padding: 0 6px;
    line-height: 36px;
    cursor: pointer;
    .d-icon {
      transition: transform .2s ease-in-out;
      &.down {
        transform: rotate(90deg);
      }
    }
  }
  .d-collapse-content {
    line-height: 26px;
    padding: 6px;
    background: #fff;
    border-top: 1px solid #ccc;
  }
  &:nth-child(1) {
    border-top: 0;
  }
  &:last-child {
    .d-collapse-content {
      border-radius: 0 0 4px 4px;
    }
  }
}
</style>
