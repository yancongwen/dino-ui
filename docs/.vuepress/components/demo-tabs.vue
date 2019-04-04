<template>
  <div class="demo">
    <d-tabs v-model="currentTab" animated>
      <d-tabs-head>
        <d-tabs-item name="1">时政</d-tabs-item>
        <d-tabs-item name="2">军事</d-tabs-item>
        <d-tabs-item name="3">国际</d-tabs-item>
        <d-tabs-item name="4" disabled>娱乐</d-tabs-item>
      </d-tabs-head>
      <d-tabs-body>
        <d-tabs-pane name="1">
          <p>时政时政时政时政时政时政时政时政</p>
          <p>时政时政时政时政时政时政时政时政</p>
        </d-tabs-pane>
        <d-tabs-pane name="2">
          <p>军事军事军事军事军事军事军事军事</p>
          <p>军事军事军事军事军事军事军事军事</p>
        </d-tabs-pane>
        <d-tabs-pane name="3">
          <p>国际国际国际国际国际国际国际国际</p>
          <p>国际国际国际国际国际国际国际国际</p>
        </d-tabs-pane>
        <d-tabs-pane name="4">
          <p>娱乐娱乐娱乐娱乐娱乐娱乐娱乐娱乐</p>
          <p>娱乐娱乐娱乐娱乐娱乐娱乐娱乐娱乐</p>
        </d-tabs-pane>
      </d-tabs-body>
    </d-tabs>
  </div>
</template>

<script>
import { Tabs, TabsHead, TabsBody, TabsItem, TabsPane } from '../../../index.js'

export default {
  components: {
    'd-tabs': Tabs,
    'd-tabs-head': TabsHead,
    'd-tabs-body': TabsBody,
    'd-tabs-item': TabsItem,
    'd-tabs-pane': TabsPane
  },
  data () {
    return {
      currentTab: '1'
    }
  }
}
</script>

<style scoped>
.demo {
  padding: 20px 0;
}
</style>
