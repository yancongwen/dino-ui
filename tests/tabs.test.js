const expect = chai.expect
import Vue from 'vue'
import Tabs from '../src/tabs/tabs'
import TabsHead from '../src/tabs/tabs-head'
import TabsBody from '../src/tabs/tabs-body'
import TabsItem from '../src/tabs/tabs-item'
import TabsPane from '../src/tabs/tabs-pane'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

  let vm = null

  before( () => {
    Vue.component('d-tabs', Tabs)
    Vue.component('d-tabs-head', TabsHead)
    Vue.component('d-tabs-body', TabsBody)
    Vue.component('d-tabs-item', TabsItem)
    Vue.component('d-tabs-pane', TabsPane)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <d-tabs value="2" animated>
        <d-tabs-head>
          <d-tabs-item name="1" disabled>时政</d-tabs-item>
          <d-tabs-item name="2">军事</d-tabs-item>
        </d-tabs-head>
        <d-tabs-body>
          <d-tabs-pane name="1">
            <p>时政</p>
          </d-tabs-pane>
          <d-tabs-pane name="2">
            <p>军事</p>
          </d-tabs-pane>
        </d-tabs-body>
      </d-tabs>
    `
    vm = new Vue({
      el: div
    })
  })

  after( () => {
    vm.$el.remove()
    vm.$destroy()
  })

  it('exist', () => {
    expect(Tabs).to.exist
    expect(TabsHead).to.exist
    expect(TabsBody).to.exist
    expect(TabsItem).to.exist
    expect(TabsPane).to.exist
  })

  it('value', (done) => {
    setTimeout(()=> {
      const items = vm.$el.querySelectorAll('.d-tabs-item')
      expect(items[1].classList.contains('active')).to.eq(true)
      const body = vm.$el.querySelector('.d-tabs-body')
      expect(body.style.transform).to.eq('translateX(-100%)')
      done()
    })
  })

  it('animated', (done) => {
    setTimeout(()=> {
      const body = vm.$el.querySelector('.d-tabs-body')
      expect(body.style['transition-duration']).to.eq('0.3s')
      done()
    })
  })

  it('disabled', (done) => {
    setTimeout(()=> {
      const items = vm.$el.querySelectorAll('.d-tabs-item')
      expect(items[0].classList.contains('disabled')).to.eq(true)
      done()
    })
  })
})