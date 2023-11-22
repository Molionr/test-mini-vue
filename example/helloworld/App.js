import { h } from '../../lib/my-mini-vue.esm.js'

export const App = {
  render() {
    return h('div', {
      id: "root",
      class: ['red', 'hard']
    }, [
      h('p', { class: 'red' }, 'hi'),
      h('p', { class: 'blue' }, 'hello'),
    ])
  },
  setup() {

    return {
      msg: 'Hello, World!'
    }
  }
}