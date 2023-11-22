import { PublicInstanceProxyHandlers } from "./componentPublicInstance";

export function createComponentInstence(vnode: any) {
  const component = {
    vnode,
    type: vnode.type,
    setupState: {},
  };

  return component;
}

export function setupComponent(instance) {
  // initProps(instance, instance.vnode.props);
  // initSlots(instance, instance.vnode.children);

  setupStatefulComponent(instance);
}

function setupStatefulComponent(instance: any) {
  const Component = instance.type;

  // ctx
  instance.proxy = new Proxy({ _: instance }, PublicInstanceProxyHandlers);

  const { setup } = Component;
  if (setup) {
    const setupResult = setup();
    handleSetupResult(instance, setupResult);
  }
}

function handleSetupResult(instance: any, setupResult: any) {
  if (typeof setupResult === "object") {
    instance.setupState = setupResult;
  }

  finshComponentSetup(instance);
}

function finshComponentSetup(instance: any) {
  const Component = instance.type;

  instance.render = Component.render;

  // if (Component.render) {
  //   instance.render = Component.render;
  // }
}
