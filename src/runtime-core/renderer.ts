import { isObject } from "../shared";
import { ShapeFlags } from "../shared/ShapeFlags";
import { createComponentInstence, setupComponent } from "./component";

export function render(vnode, container) {
  patch(vnode, container);
}

function patch(vnode, container) {
  const { shapeFlags } = vnode;
  if (shapeFlags & ShapeFlags.ELEMENT) {
    processElement(vnode, container);
  } else if (shapeFlags & ShapeFlags.STATEFUL_COMPONENT) {
    processComponent(vnode, container);
  }
}

function processElement(vnode: any, container: any) {
  mountElement(vnode, container);
}

function mountElement(vnode: any, container: any) {
  const el = (vnode.el = document.createElement(vnode.type));

  const { children, props, shapeFlags } = vnode;

  if (shapeFlags & ShapeFlags.TEXT_CHILDREN) {
    el.textContent = children;
  } else if (shapeFlags & ShapeFlags.ARRAY_CHILDREN) {
    mountChildren(vnode, el);
  }

  for (const key in props) {
    const val = props[key];
    const isOn = (key: string) => /^on[A-Z]/.test(key);
    if (isOn(key)) {
      const event = key.slice(2).toLowerCase();
      el.addEventListener(event, val);
    } else {
      el.setAttribute(key, val);
    }
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
function mountComponent(initinalVNode: any, container) {
  const instence = createComponentInstence(initinalVNode);

  setupComponent(instence);
  setupRenderEffect(instence, initinalVNode, container);
}

function setupRenderEffect(instence: any, initinalVNode, container) {
  const { proxy } = instence;
  const subTree = instence.render.call(proxy);

  patch(subTree, container);

  initinalVNode.el = subTree.el;
}
