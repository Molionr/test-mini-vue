import { createComponentInstence, setupComponent } from "./component";

export function render(vnode, container) {
  patch(vnode, container);
}

function patch(vnode, container) {
  processComponent(vnode, container);
}

function processComponent(vnode: any, container: any) {
  mountComponent(vnode, container);
}
function mountComponent(vnode: any, container) {
  const instence = createComponentInstence(vnode);

  setupComponent(instence);
  setupRenderEffect(instence, container);
}

function setupRenderEffect(instence: any, container) {
  const subTree = instence.render();

  patch(subTree, container);
}
