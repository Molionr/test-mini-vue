import { h } from "../../lib/my-mini-vue.esm.js"

export const Foo = {
  setup(props, { emit }) {
    const emitAdd = () => {
      console.log('emit add')
      emit('add', 1, 2)
      emit('add-foo')
    }

    return {
      emitAdd
    }
  },
  render() {
    const btn = h('button', {
      onClick: this.emitAdd
    }, 'emitAdd')
    const foo = h('div', {}, 'foo')
    return h('div', {}, [
      foo,
      btn
    ])
  }
}