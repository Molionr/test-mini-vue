'use strict';

function createComponentInstence(vnode) {
    const component = {
        vnode,
        type: vnode.type,
    };
    return component;
}
function setupComponent(instance) {
    // initProps(instance, instance.vnode.props);
    // initSlots(instance, instance.vnode.children);
    setupStatefulComponent(instance);
}
function setupStatefulComponent(instance) {
    const Component = instance.type;
    const { setup } = Component;
    if (setup) {
        const setupResult = setup();
        handleSetupResult(instance, setupResult);
    }
}
function handleSetupResult(instance, setupResult) {
    if (typeof setupResult === "object") {
        instance.setupState = setupResult;
    }
    finshComponentSetup(instance);
}
function finshComponentSetup(instance) {
    const Component = instance.type;
    instance.render = Component.render;
    // if (Component.render) {
    //   instance.render = Component.render;
    // }
}

function render(vnode, container) {
    patch(vnode);
}
function patch(vnode, container) {
    processComponent(vnode);
}
function processComponent(vnode, container) {
    mountComponent(vnode);
}
function mountComponent(vnode, container) {
    const instence = createComponentInstence(vnode);
    setupComponent(instence);
    setupRenderEffect(instence);
}
function setupRenderEffect(instence, container) {
    const subTree = instence.render();
    patch(subTree);
}

function createVNode(type, props, children) {
    const vnode = {
        type,
        props,
        children,
    };
    return vnode;
}

function createApp(rootComponent) {
    return {
        mount(rootContainer) {
            const vnode = createVNode(rootComponent);
            render(vnode);
        }
    };
}

function h(type, props, children) {
    return createVNode(type, props, children);
}

exports.createApp = createApp;
exports.h = h;
