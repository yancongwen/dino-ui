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

import chai from 'chai'
const expect = chai.expect

// 单元测试
// 检查 icon 是否生效
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'setting'
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#icon-setting')
  vm.$el.remove()
  vm.$destroy()
}

// 检查 loading 是否生效
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'setting',
      loading: true
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#icon-loading')
  vm.$el.remove()
  vm.$destroy()
}

// 检查 iconPosition 是否生效
{
  // 必须将测试元素挂载到 document 中 CSS 才会生效
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let { order } = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  vm.$el.remove()
  vm.$destroy()
}

// 检查 click 是否生效
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
    }
  })
  vm.$mount()
  vm.$on('click', function () {
    // 怎样检查这里是否执行了？
    expect(1).to.eq(1)
  })
  let button = vm.$el
  button.click()
}
