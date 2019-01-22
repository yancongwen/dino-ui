import Vue from 'vue'
import Icon from './icon/icon'
import Button from './button/button'
import ButtonGroup from './button/button-group'
import Input from './input/input'

Vue.component('d-icon', Icon)
Vue.component('d-button', Button)
Vue.component('d-button-group', ButtonGroup)
Vue.component('d-input', Input)

new Vue({
  el: '#app',
  data() {
    return {
      loading: false,
      data: 123
    }
  },
  methods: {
    changeLoading() {
      this.loading = !this.loading
    },
    change(value) {
      console.log(value)
    }
  }
})
