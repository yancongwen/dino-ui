<template>
  <button class="d-button" :class="{'d-icon-right': iconPosition==='right'}" @click="handleClick">
    <d-icon type="loading" class="d-button-icon d-loadding" v-if="loading"></d-icon>
    <d-icon :type="icon" class="d-button-icon" v-else-if="icon"></d-icon>
    <slot></slot>
  </button>
</template>

<script>
export default {
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
    handleClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang='scss' scoped>
.d-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 .8em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
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
    border-color: var(--border-color-hover);
  }
  &:active {
    background-color: var(--button-active-bg);
  }
  &:focus {
    outline: none;
  }
}
@keyframes d-load-loop {
  from { transform: rotate(0deg);}
  50%  { transform: rotate(180deg);}
  to   { transform: rotate(360deg);}
}
</style>
