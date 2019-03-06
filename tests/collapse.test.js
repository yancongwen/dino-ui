const expect = chai.expect
import Vue from 'vue'
import Collapse from '../src/collapse/collapse'
import CollapseItem from '../src/collapse/collapse-item'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

  let vm = null

  before( () => {
    Vue.component('d-collapse', Collapse)
    Vue.component('d-collapse-item', CollapseItem)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
    <d-collapse value="a">
      <d-collapse-item name="a">
        a
        <p slot="content">内容a</p>
      </d-collapse-item>
      <d-collapse-item name="b" hide-arrow>
        b
        <p slot="content">内容b</p>
      </d-collapse-item>
    </d-collapse>
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
    expect(Collapse).to.exist
    expect(CollapseItem).to.exist
  })

  it('value', (done) => {
    setTimeout(()=> {
      const items = vm.$el.querySelectorAll('.d-collapse-item')
      const header = items[0].querySelector('.d-collapse-header')
      const content = items[0].querySelector('.d-collapse-content')
      const arrow = header.querySelector('.d-icon')
      expect(arrow.classList.contains('down')).to.eq(true)
      expect(content.classList.contains('show')).to.eq(true)
      done()
    })
  })

})