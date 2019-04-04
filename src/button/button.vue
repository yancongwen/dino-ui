<template>
  <button class="d-button" :class="{'d-icon-right': iconPosition==='right'}" @click="handleClick">
    <d-icon type="loading" class="d-button-icon d-loadding" v-if="loading"></d-icon>
    <d-icon :type="icon" class="d-button-icon" v-else-if="icon"></d-icon>
    <slot></slot>
  </button>
</template>

<script>
import dIcon from '../icon/icon'

export default {
  name: 'DinoButton',
  components: {
    dIcon
  },
  props: {
    icon: String,
    iconPosition: {
      type: String,
      default: 'left',
      validator: function (value) {
        return ['left', 'right'].indexOf(value) !== -1
      }
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang='scss' scoped>
$button-height: 32px;
$font-size: 14px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
.d-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: $font-size;
  height: $button-height;
  padding: 0 0.8em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  vertical-align: middle;
  cursor: pointer;
  .d-loadding {
    animation: d-load-loop 1s linear infinite;
  }
  .d-button-icon {
    margin-right: 0.2em;
  }
  &.d-icon-right {
    .d-button-icon {
      order: 1;
      margin-right: 0;
      margin-left: 0.2em;
    }
  }
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
  &[disabled] {
    cursor: not-allowed;
  }
}
@keyframes d-load-loop {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
