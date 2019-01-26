const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/button/button'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {

  it('exist', () => {
    expect(Button).to.exist
  })

  it('icon', () => {
    const MyComponent = Vue.extend(Button)
    const vm = new MyComponent({
      propsData: {
        icon: 'setting'
      }
    }).$mount()
    const useElement = vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.equal('#icon-setting')
    vm.$destroy()
  })

  it('loading', () => {
    const MyComponent = Vue.extend(Button)
    const vm = new MyComponent({
      propsData: {
        icon: 'setting',
        loading: true
      }
    }).$mount()
    const useElements = vm.$el.querySelectorAll('use')
    expect(useElements.length).to.equal(1)
    expect(useElements[0].getAttribute('xlink:href')).to.equal('#icon-loading')
    vm.$destroy()
  })

  it('iconPosition', () => {
    // 必须将测试元素挂载到 document 中 CSS 才会生效
    const div = document.createElement('div')
    document.body.appendChild(div)
    const MyComponent = Vue.extend(Button)
    const vm = new MyComponent({
      propsData: {
        icon: 'setting',
        iconPosition: 'right'
      }
    }).$mount(div)
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
  })

  it('click', () => {
    const MyComponent = Vue.extend(Button)
    const vm = new MyComponent().$mount()
    // 利用间谍函数检测按钮的点击事件
    const callback = sinon.fake()
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.been.called
    vm.$el.remove()
    vm.$destroy()
  })
})