import { h } from '../../lib/my-mini-vue.esm.js'

export const App = {
  render() {
    return h('div', 'Hello, World!' + this.msg)
  },
  setup() {

    return {
      msg: 'Hello, World!'
    }
  }
}