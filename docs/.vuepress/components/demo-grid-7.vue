<template>
  <div class="demo">
    <d-row>
      <d-col :xs="24" :sm="12" :md="8" :lg="4">
        <div class="col-content">1</div>
      </d-col>
      <d-col :xs="24" :sm="12" :md="8" :lg="4">
        <div class="col-content">1</div>
      </d-col>
    </d-row>
    <d-row>
      <d-col
        :xs="{span:12, offset:4}"
        :sm="{span:8, offset:4}"
        :md="{span:4, offset:1}"
        :lg="{span:4, offset:1}"
      >
        <div class="col-content">1</div>
      </d-col>
      <d-col
        :xs="{span:12, offset:4}"
        :sm="{span:8, offset:4}"
        :md="{span:4, offset:1}"
        :lg="{span:4, offset:1}"
      >
        <div class="col-content">1</div>
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
