const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {

  it('exist', () => {
    expect(Input).to.exist
  })

  describe('props', () => {
    const MyComponent = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })

    it('type', () => {
      vm = new MyComponent({
        propsData: {
          type: 'text'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.getAttribute('type')).to.equal('text')
    })

    it('value', () => {
      vm = new MyComponent({
        propsData: {
          value: 'abcd'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('abcd')
    })

    it('placeholder', () => {
      vm = new MyComponent({
        propsData: {
          placeholder: 'please input'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.getAttribute('placeholder')).to.equal('please input')
    })

    it('disabled', () => {
      vm = new MyComponent({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
    })

    it('readonly', () => {
      vm = new MyComponent({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true)
    })

    it('elementId', () => {
      vm = new MyComponent({
        propsData: {
          elementId: 'testId'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.id).to.equal('testId')
    })

    it('width', () => {
      vm = new MyComponent({
        propsData: {
          width: 100
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.style.width).to.equal('100px')
    })

    it('clearable', () => {
      vm = new MyComponent({
        propsData: {
          clearable: true,
          value: 'abc'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('.clear-icon')
      expect(inputElement).to.exist
    })
  })

  describe('events', () => {
    const MyComponent = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })

    // 几个原生的事件
    it('focus, blur, keyup, keypress, keydown', () => {
      ['focus', 'blur', 'keyup', 'keypress', 'keydown']
      .forEach(eventName => {
        vm = new MyComponent({}).$mount()
        const callback = sinon.fake()
        vm.$on(eventName, callback)
        // 模拟事件
        let event = new Event(eventName)
        let inputElement = vm.$el.querySelector('input')
        inputElement.dispatchEvent(event)
        // 确定函数是否是调用且传递了参数
        expect(callback).to.have.been.calledWith(event)
      })
    })

    // keyenter 事件
    it('keyenter', () => {
      vm = new MyComponent({}).$mount()
      const callback = sinon.fake()
      vm.$on('keyenter', callback)
      let event = new Event('keyup')
      Object.defineProperty(
        event, 'keyCode', {
          value: 13
        }
      )
      let inputElement = vm.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith(event)
    })

    // input 事件
    it('input', () => {
      vm = new MyComponent({}).$mount()
      const callback = sinon.fake()
      vm.$on('input', callback)
      let event = new Event('input')
      Object.defineProperty(
        event, 'target', {
          value: { value: 'testValue' },
          enumerable: true
        })
      let inputElement = vm.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith('testValue')
    })

    // change 事件
    it('change', () => {
      vm = new MyComponent({}).$mount()
      const callback = sinon.fake()
      vm.$on('change', callback)
      let event = new Event('input')
      let inputElement = vm.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith(event)
    })

    // input-change 事件
    it('input-change', () => {
      vm = new MyComponent({}).$mount()
      const callback = sinon.fake()
      vm.$on('input-change', callback)
      let event = new Event('change')
      let inputElement = vm.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      expect(callback).to.have.been.calledWith(event)
    })
  })
})