import { h } from "vue";
export const renderChildren = (children) => children
    .map((child) => child.type === 'element'
    ? h(child.name, child.attributes, renderChildren(child.children))
    : child.value);
//# sourceMappingURL=renderChildren.js.map