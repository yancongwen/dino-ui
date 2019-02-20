const expect = chai.expect;
import Vue from 'vue'
import Message from '../src/message/message'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Message', () => {

  it('exist', () => {
    expect(Message).to.exist
  })

  describe('props', function () {
    it('autoClose', (done) => {
      let div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Message)
      const vm = new Constructor({
        propsData: {
          autoClose: 1,
        }
      }).$mount(div)
      vm.$on('close', () => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      })
    })

    it('closeButton', () => {
      const callback = sinon.fake()
      const Constructor = Vue.extend(Message)
      const vm = new Constructor({
        propsData: {
          closeButton: {
            text: '关闭吧',
            callback,
          },
        }
      }).$mount()
      let closeButton = vm.$el.querySelector('.d-message-close')
      expect(closeButton.textContent.trim()).to.eq('关闭吧')
      closeButton.click()
      expect(callback).to.have.been.called
    })

    it('enableHtml', () => {
      const Constructor = Vue.extend(Message)
      const vm = new Constructor({
        propsData: {enableHtml: true}
      })
      vm.$slots.default = ['<strong id="test">hi</strong>']
      vm.$mount()
      let strong = vm.$el.querySelector('#test')
      expect(strong).to.exist
    })

    it('position', () => {
      const Constructor = Vue.extend(Message)
      const vm = new Constructor({
        propsData: {
          position: 'bottom'
        }
      }).$mount()
      expect(vm.$el.classList.contains('d-message-position-bottom')).to.eq(true)
    })
  })
})