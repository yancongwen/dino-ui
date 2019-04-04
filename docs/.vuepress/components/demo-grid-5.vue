<template>
  <div class="demo">
    <span>center</span>
    <d-row justify="center">
      <d-col span="4">
        <div class="col-content">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content">col-4</div>
      </d-col>
    </d-row>
    <span>start</span>
    <d-row justify="start">
      <d-col span="4">
        <div class="col-content">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content">col-4</div>
      </d-col>
    </d-row>
    <span>end</span>
    <d-row justify="end">
      <d-col span="4">
        <div class="col-content">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content">col-4</div>
      </d-col>
    </d-row>
    <span>space-around</span>
    <d-row justify="space-around">
      <d-col span="4">
        <div class="col-content">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content">col-4</div>
      </d-col>
    </d-row>
    <span>space-between</span>
    <d-row justify="space-between">
      <d-col span="4">
        <div class="col-content">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content">col-4</div>
      </d-col>
    </d-row>
  </div>
</template>

<script>
import { Row, Col } from '../../../index.js'

export default {
  components: {
    'd-row': Row,
    'd-col': Col
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.demo {
  padding: 20px 0;
}
.demo >>> .d-col {
  margin-top: 5px;
}
.demo >>> .d-col > .col-content {
  line-height: 32px;
  text-align: center;
  background: rgba(0, 255, 0, 0.1);
}
.demo >>> .d-col:nth-child(odd) > .col-content {
  background: rgba(255, 0, 0, 0.1);
}
</style>
