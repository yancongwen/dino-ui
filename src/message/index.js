import Message from './message'
let currentMessage

function createMessage ({Vue, message, propsData, onClose}) {
  let MessageComponent = Vue.extend(Message)
  let messageInstance = new MessageComponent({propsData})
  messageInstance.$slots.default = [message]
  messageInstance.$mount()
  messageInstance.$on('close', onClose)
  document.body.appendChild(messageInstance.$el)
  return messageInstance
}

export default {
  install (Vue, options) {
    Vue.prototype.$Message = function (message, messageOptions) {
      if(currentMessage) {
        currentMessage.close()
      }
      currentMessage = createMessage({
        Vue,
        message,
        propsData: messageOptions,
        onClose: () => {
          currentMessage = null
        }
      })
    }
  }
}