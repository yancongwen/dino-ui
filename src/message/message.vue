<template>
  <div class="d-message">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DinoMessage',
  props: {
    type: {
      type: String
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style lang='scss' scoped>
.d-message {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  height: 50px;
  width: 200px;
  border: 1px solid red;
}
</style>
