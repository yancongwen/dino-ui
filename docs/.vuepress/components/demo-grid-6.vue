<template>
  <div class="demo">
    <span>top</span>
    <d-row justify="center" align="top">
      <d-col span="4">
        <div class="col-content" style="height: 80px">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content" style="height: 30px">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content" style="height: 100px">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content" style="height: 60px">col-4</div>
      </d-col>
    </d-row>
    <span>bottom</span>
    <d-row justify="center" align="bottom">
      <d-col span="4">
        <div class="col-content" style="height: 80px">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content" style="height: 30px">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content" style="height: 100px">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content" style="height: 60px">col-4</div>
      </d-col>
    </d-row>
    <span>middle</span>
    <d-row justify="center" align="middle">
      <d-col span="4">
        <div class="col-content" style="height: 80px">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content" style="height: 30px">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content" style="height: 100px">col-4</div>
      </d-col>
      <d-col span="4">
        <div class="col-content" style="height: 60px">col-4</div>
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
