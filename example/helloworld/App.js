import { h } from '../../lib/my-mini-vue.esm.js'

window.self = null
export const App = {
  render() {
    window.self = this
    return h('div', {
      id: "root",
      class: ['red', 'hard'],
      onClick() {
        console.log('click')
      },
      onMousedown() {
        console.log('onMousedown')
      }
    },
      'hi ' + this.msg,
      // [
      // h('p', { class: 'red' }, 'hi'),
      // h('p', { class: 'blue' }, 'hello'),
      // ]
    )
  },
  setup() {

    return {
      msg: 'mini-vue-haha'
    }
  }
}