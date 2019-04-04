<template>
  <div class="demo">
    <d-row>
      <d-col span="4">
        <div class="col-content">4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content">4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content">4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content">4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content">4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content">4</div>
      </d-col>
      <d-col span="8">
        <div class="col-content">8</div>
      </d-col>
      <d-col span="8">
        <div class="col-content">8</div>
      </d-col>
      <d-col span="8">
        <div class="col-content">8</div>
      </d-col>
      <d-col span="12">
        <div class="col-content">12</div>
      </d-col>
      <d-col span="12">
        <div class="col-content">12</div>
      </d-col>
      <d-col span="24">
        <div class="col-content">24</div>
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
