import Vue from 'vue'
import Icon from './icon/icon'
import Button from './button/button'
import ButtonGroup from './button/button-group'
import Input from './input/input'
import Row from './grid/row'
import Col from './grid/col'

Vue.component('d-icon', Icon)
Vue.component('d-button', Button)
Vue.component('d-button-group', ButtonGroup)
Vue.component('d-input', Input)
Vue.component('d-row', Row)
Vue.component('d-col', Col)

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
