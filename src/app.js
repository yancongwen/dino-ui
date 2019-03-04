import Vue from 'vue'
import Icon from './icon/icon'
import Button from './button/button'
import ButtonGroup from './button/button-group'
import Input from './input/input'
import Row from './grid/row'
import Col from './grid/col'
import Layout from './layout/layout'
import Header from './layout/header'
import Footer from './layout/footer'
import Content from './layout/content'
import Sider from './layout/sider'
import Message from './message'
import Tabs from './tabs/Tabs'
import TabsHead from './tabs/tabs-head'
import TabsBody from './tabs/tabs-body'
import TabsItem from './tabs/tabs-item'
import TabsPane from './tabs/tabs-pane'

Vue.component('d-icon', Icon)
Vue.component('d-button', Button)
Vue.component('d-button-group', ButtonGroup)
Vue.component('d-input', Input)
Vue.component('d-row', Row)
Vue.component('d-col', Col)
Vue.component('d-layout', Layout)
Vue.component('d-header', Header)
Vue.component('d-footer', Footer)
Vue.component('d-content', Content)
Vue.component('d-sider', Sider)
Vue.component('d-tabs', Tabs)
Vue.component('d-tabs-head', TabsHead)
Vue.component('d-tabs-body', TabsBody)
Vue.component('d-tabs-item', TabsItem)
Vue.component('d-tabs-pane', TabsPane)
Vue.use(Message)

new Vue({
  el: '#app',
  data() {
    return {
      loading: false,
      data: 123,
      currentTab: '1'
    }
  },
  methods: {
    changeLoading() {
      this.loading = !this.loading
    },
    change(value) {
      console.log(value)
    },
    showMessage1() {
      this.$Message('文件上传成功！<a href="">链接</a>', {
        autoClose: false,
        enableHtml: true,
        position: 'top',
        closeButton: {
          text: '知道了',
          callback: (data) => {
            console.log(data)
          }
        }
      })
    },
    showMessage2() {
      this.$Message('文件上传成功！<a href="">链接</a>', {
        autoClose: 5,
        enableHtml: false,
        position: 'bottom'
      })
    },
    showMessage3() {
      this.$Message('文件上传成功！<a href="">链接</a>', {
        autoClose: false,
        enableHtml: true,
        position: 'middle'
      })
    }
  }
})
