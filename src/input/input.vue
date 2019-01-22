<template>
  <div class="d-input-wrapper">
    <input
      :type="type"
      :value="currentValue"
      :disabled="disabled"
      :placeholder="placeholder"
      :readonly="readonly"
      :id="elementId"
      :style="{width: `${width}px`}"
      @input="handleInput"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
      @keyup.enter="handleEnter"
      @keyup="handleKeyup"
      @keypress="handleKeypress"
      @keydown="handleKeydown"
    >
    <d-icon 
      class="clear-icon"
      type="close-circle"
      :size="18"
      @click="clear"
      v-if="clearable && value"
      color="rgb(100, 100, 100)"
    ></d-icon>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    type: {
      default: 'text',
      validator: function (value) {
        return ['text', 'textarea', 'password'].indexOf(value) !== -1
      }
    },
    value: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    elementId: {
      type: String
    },
    width: {
      type: [Number, String],
      default: 160
    }
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  methods: {
    clear() {
      this.currentValue = ''
      this.$emit('input', '')
      this.$emit('change', { target: { value: '' } })
    },
    handleInput(event) {
      let value = event.target.value
      this.currentValue = value
      this.$emit('input', value)
      this.$emit('change', event)
    },
    handleChange(event) {
      this.$emit('input-change', event)
    },
    handleFocus(event) {
      this.$emit('focus', event)
    },
    handleBlur(event) {
      this.$emit('blur', event)
    },
    handleEnter(event) {
      this.$emit('key-enter', event)
    },
    handleKeyup(event) {
      this.$emit('key-up', event)
    },
    handleKeypress(event) {
      this.$emit('key-press', event)
    },
    handleKeydown(event) {
      this.$emit('key-down', event)
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    }
  }
}
</script>

<style lang='scss' scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 14px;
$box-shadow-color: rgba(66, 66, 66, 0.5);
$red: rgb(252, 67, 57);
.d-input-wrapper {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: $font-size;
  vertical-align: middle;
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &:hover {
      border-color: $border-color-hover;
    }
    &[disabled] {
      cursor: not-allowed;
    }
    &[readonly] {
      &:focus {
        box-shadow: none;
      }
    }
  }
  > .clear-icon {
    position: absolute;
    right: 4px;
    visibility: hidden;
  }
  &:hover {
    > .clear-icon {
      visibility: visible;
    }
  }
}
</style>
