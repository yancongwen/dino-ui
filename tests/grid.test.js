const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/grid/row'
import Col from '../src/grid/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Grid', () => {

  describe('Row', () => {
    it('exist', () => {
      expect(Row).to.exist
    })

    it('gutter', (done) => {
      Vue.component('d-row', Row)
      Vue.component('d-col', Col)
      const div = document.createElement('div')
      document.body.appendChild(div)
      div.innerHTML = `
        <d-row gutter="20">
          <d-col span="12"></d-col>
          <d-col span="12"></d-col>
        </d-row>
      `
      const vm = new Vue({
        el: div
      })
      // Vue 渲染实例是异步的，需要等待渲染后再测试。
      // 考虑将测试放入 mounted 的钩子里，但是会karma限制了2000ms的最长等待时间
      setTimeout(()=> {
        const row = vm.$el.querySelector('.d-row')
        const col = vm.$el.querySelector('.d-col')
        expect(getComputedStyle(row).marginLeft).to.eq('-10px')
        expect(getComputedStyle(row).marginRight).to.eq('-10px')
        expect(getComputedStyle(col).paddingRight).to.eq('10px')
        expect(getComputedStyle(col).paddingLeft).to.eq('10px')
        done()
        vm.$el.remove()
        vm.$destroy()
      })
    })

    it('justify', () => {
      const div = document.createElement('div')
      document.body.appendChild(div)
      const RowComponent = Vue.extend(Row)
      const vm = new RowComponent({
        propsData: {
          justify: 'center'
        }
      }).$mount(div)
      const element = vm.$el
      expect(getComputedStyle(element).justifyContent).to.equal('center')
      div.remove()
      vm.$destroy()
    })
  })

  it('align', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const RowComponent = Vue.extend(Row)
    const vm = new RowComponent({
      propsData: {
        align: 'middle'
      }
    }).$mount(div)
    const element = vm.$el
    expect(getComputedStyle(element).alignItems).to.equal('center')
    div.remove()
    vm.$destroy()
  })

  describe('Col', () => {
    it('exist', () => {
      expect(Row).to.exist
    })
  })
})