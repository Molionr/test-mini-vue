import { h,renderSlots } from "../../lib/my-mini-vue.esm.js"

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
    const foo = h('p', {}, 'foo')
    return h('div', {}, [
      renderSlots(this.$slots, 'header', {
        age: 1
      }),
      foo,
      renderSlots(this.$slots, 'footer'),
    ])
  }
}