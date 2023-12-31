import { h } from "../../lib/my-mini-vue.esm.js";
import { Foo } from "./Foo.js";

export default {
  name: "App",
  setup() {},

  render() {
    return h("div", {}, [
      h("div", {}, "App"),
      h(Foo, {
        onAdd(a, b) {
          console.log("onAdd", a, b);
        },
        onAddFoo() {
          console.log("onAddFoo");
        }
      }),
    ]);
  },
};
