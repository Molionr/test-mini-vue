import { isObject } from "../shared";
import { createComponentInstence, setupComponent } from "./component";

export function render(vnode, container) {
  patch(vnode, container);
}

function patch(vnode, container) {
  console.log(vnode.type);
  if (typeof vnode.type === "string") {
    processElement(vnode, container);
  } else if (isObject(vnode.type)) {
    processComponent(vnode, container);
  }
}

function processElement(vnode: any, container: any) {
  mountElement(vnode, container);
}

function mountElement(vnode: any, container: any) {
  const el = document.createElement(vnode.type);

  const { children, props } = vnode;

  if (typeof children === "string") {
    el.textContent = children;
  } else if (Array.isArray(children)) {
    mountChildren(vnode, el);
  }

  for (const key in props) {
    const val = props[key];
    el.setAttribute(key, val);
  }

  container.append(el);
}

function mountChildren(vnode: any, container: any) {
  vnode.children.forEach((child) => {
    patch(child, container);
  });
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
