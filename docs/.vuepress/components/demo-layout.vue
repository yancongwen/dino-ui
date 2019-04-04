<template>
  <div class="demo">
    <d-layout class="layout">
      <d-header class="header"></d-header>
      <d-content class="content"></d-content>
      <d-footer class="footer"></d-footer>
    </d-layout>
  </div>
</template>

<script>
import { Layout, Header, Sider, Content, Footer } from '../../../index.js'

export default {
  components: {
    'd-layout': Layout,
    'd-header': Header,
    'd-sider': Sider,
    'd-content': Content,
    'd-footer': Footer
  }
}
</script>

<style scoped>
.demo {
  padding: 20px 0;
}
.layout {
  margin: 10px 0;
}
.header {
  height: 50px;
  background: rgba(100, 100, 200, 0.2);
}
.footer {
  height: 50px;
  background: rgba(100, 100, 200, 0.2);
}
.sider {
  width: 100px;
  background: rgba(200, 100, 100, 0.2);
}
.content {
  height: 200px;
  background: rgba(0, 200, 200, 0.2);
}
</style>
