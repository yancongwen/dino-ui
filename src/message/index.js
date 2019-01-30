import Message from './message'

export default {
  install (Vue, options) {
    Vue.prototype.$Message = function (message) {
      let MessageComponent = Vue.extend(Message)
      let instance = new MessageComponent()
      instance.$slots.default = [message]
      instance.$mount()
      document.body.appendChild(instance.$el)
    }
  }
}