import { h, renderSlots } from "../../lib/my-mini-vue.esm.js";
import { Foo } from "./Foo.js";

export default {
  name: "App",
  setup() { },

  render() {
    
    const app = h("div", {}, "App");
    const foo = h(Foo, {}, {
      header: ({age}) => h("p", {}, "header" + age),
      footer: () => h("p", {}, "footer")
    });

    return h("div", {}, [
      app,
      foo
    ]);
  },
};
