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

    it('span', () => {
      const ColComponent = Vue.extend(Col)
      const vm = new ColComponent({
        propsData: {
          span: 6
        }
      }).$mount()
      expect(vm.$el.classList.contains('d-col-span-6')).to.eq(true)
      vm.$destroy()
    })

    it('offset', () => {
      const ColComponent = Vue.extend(Col)
      const vm = new ColComponent({
        propsData: {
          offset: 6
        }
      }).$mount()
      expect(vm.$el.classList.contains('d-col-offset-6')).to.eq(true)
      vm.$destroy()
    })

    it('order', () => {
      const ColComponent = Vue.extend(Col)
      const vm = new ColComponent({
        propsData: {
          order: 1
        }
      }).$mount()
      expect(vm.$el.classList.contains('d-col-order-1')).to.eq(true)
      vm.$destroy()
    })

    it('xs, sm, md, lg', () => {
      const ColComponent = Vue.extend(Col)
      const vm = new ColComponent({
        propsData: {
          xs: {
            span: 1,
            offset: 1,
            order: 1
          },
          sm: {
            span: 2,
            offset: 2,
            order: 2
          },
          md: {
            span: 3,
            offset: 3,
            order: 3
          },
          lg: {
            span: 4,
            offset: 4,
            order: 4
          }
        }
      }).$mount()
      expect(vm.$el.classList.contains('d-col-xs-span-1')).to.eq(true)
      expect(vm.$el.classList.contains('d-col-xs-offset-1')).to.eq(true)
      expect(vm.$el.classList.contains('d-col-xs-order-1')).to.eq(true)
      expect(vm.$el.classList.contains('d-col-sm-span-2')).to.eq(true)
      expect(vm.$el.classList.contains('d-col-sm-offset-2')).to.eq(true)
      expect(vm.$el.classList.contains('d-col-sm-order-2')).to.eq(true)
      expect(vm.$el.classList.contains('d-col-md-span-3')).to.eq(true)
      expect(vm.$el.classList.contains('d-col-md-offset-3')).to.eq(true)
      expect(vm.$el.classList.contains('d-col-md-order-3')).to.eq(true)
      expect(vm.$el.classList.contains('d-col-lg-span-4')).to.eq(true)
      expect(vm.$el.classList.contains('d-col-lg-offset-4')).to.eq(true)
      expect(vm.$el.classList.contains('d-col-lg-order-4')).to.eq(true)
      vm.$destroy()
    })
  })
})