const expect = chai.expect;
import Vue from 'vue'
import Icon from '../src/icon/icon'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Icon', () => {

  it('exist', () => {
    expect(Icon).to.exist
  })

  it('type', () => {
    const MyComponent = Vue.extend(Icon)
    const vm = new MyComponent({
      propsData: {
        type: 'setting'
      }
    }).$mount()
    const useElement = vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.equal('#icon-setting')
    vm.$destroy()
  })

  it('color', () => {
    const MyComponent = Vue.extend(Icon)
    const vm = new MyComponent({
      propsData: {
        type: 'setting',
        color: 'red'
      }
    }).$mount()
    const svgElements = vm.$el
    expect(svgElements.style.color).to.equal('red')
    vm.$destroy()
  })

  it('size', () => {
    const MyComponent = Vue.extend(Icon)
    const vm = new MyComponent({
      propsData: {
        type: 'setting',
        size: 20
      }
    }).$mount()
    const svgElements = vm.$el
    expect(svgElements.style.width).to.equal('20px')
    expect(svgElements.style.height).to.equal('20px')
    vm.$destroy()
  })

  // 以下代码有问题， SVG 元素有点特殊，没有 click() 方法
  // it('click', () => {
  //   const MyComponent = Vue.extend(Icon)
  //   const vm = new MyComponent({
  //     propsData: {
  //       type: 'setting'
  //     }
  //   }).$mount()
  //   const callback = sinon.fake()
  //   vm.$on('click', callback)
  //   vm.$el.click()
  //   expect(callback).to.have.been.called
  //   expect(vm.$el.style.cursor).to.equal('pointer')
  //   vm.$destroy()
  // })
})