import Vue from 'vue'
import Icon from './icon/icon'
import Button from './button/button'
import ButtonGroup from './button/button-group'

Vue.component('d-icon', Icon)
Vue.component('d-button', Button)
Vue.component('d-button-group', ButtonGroup)

 new Vue({
  el: '#app',
  data() {
    return {
      loading: false
    }
  },
  methods: {
    changeLoading() {
      this.loading = !this.loading
    }
  }
})