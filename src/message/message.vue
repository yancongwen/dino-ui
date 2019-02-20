<template>
  <div
    class="d-message"
    :class="messageClasses"
  >
    <div
      class="d-message-content"
      ref="content"
    >
      <span
        v-if="enableHtml"
        v-html="$slots.default[0]"
      ></span>
      <slot v-else></slot>
    </div>
    <div
      class="d-message-line"
      v-if="closeButton"
      ref="line"
    ></div>
    <div
      class="d-message-close"
      v-if="closeButton"
      @click="onClickClose"
    >
      {{closeButton.text}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'DinoMessage',
  props: {
    autoClose: {
      type: [Boolean, Number],
      default: false,
      validator(value) {
        return value === false || typeof value === 'number'
      }
    },
    closeButton: {
      type: Object
    },
    enableHtml: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'middle', 'bottom'].indexOf(value) >= 0
      }
    }
  },
  computed: {
    messageClasses() {
      return {
        [`d-message-position-${this.position}`]: true
      }
    }
  },
  mounted() {
    this.execAutoClose()
    this.updateStyles()
  },
  methods: {
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoClose * 1000)
      }
    },
    close() {
      this.$el.remove()
      this.$emit('close')
      this.$destroy()
    },
    onClickClose() {
      this.close()
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this)
      }
    },
    updateStyles() {
      this.$nextTick(() => {
        if (this.$refs.line) {
          this.$refs.line.style.height =
            `${this.$refs.content.getBoundingClientRect().height}px`
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
$font-size: 14px;
$message-min-height: 40px;
$message-bg: rgba(0, 0, 0, 0.75);
$message-line-color: rgba(100, 100, 100, 0.6);
$animation-duration: 300ms;

@keyframes message-slide-up {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0%);
  }
}
@keyframes message-slide-down {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0%);
  }
}
@keyframes message-fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.d-message {
  display: flex;
  align-items: center;
  font-size: $font-size;
  min-height: $message-min-height;
  line-height: 1.8;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  background: $message-bg;
  color: white;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding: 0 16px;
  &.d-message-position-top {
    top: 10px;
    animation: message-slide-down $animation-duration;
  }
  &.d-message-position-middle {
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    animation: message-fade-in $animation-duration;
  }
  &.d-message-position-bottom {
    bottom: 10px;
    animation: message-slide-up $animation-duration;
  }
  .d-message-content {
    padding: 8px 0;
  }
  .d-message-line {
    border-left: 1px solid $message-line-color;
    margin: 0 12px;
  }
  .d-message-close {
    cursor: pointer;
  }
}
</style>
