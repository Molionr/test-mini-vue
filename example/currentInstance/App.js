import { h, createTextVNode, getCurrentInstance } from "../../lib/my-mini-vue.esm.js";
import { Foo } from "./Foo.js";

export default {
  name: "App",
  render() {

    const app = h("div", {}, "App");
    const foo = h(Foo, {}, {
      header: ({ age }) => [h("p", {}, "header" + age),
      createTextVNode('你好呀')],
      footer: () => h("p", {}, "footer")
    });

    return h("div", {}, [h("div", {}, 'currentInstance demo'), h(Foo)]);
  },
  setup() {
    const instance = getCurrentInstance();
    console.log('App', instance)
  },
};
