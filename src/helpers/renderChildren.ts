import { INode as Svg } from "svgson";
import { h, VNode } from "vue";

export const renderChildren = (children: Svg[]): (VNode | string)[] => children
    .map((child) => child.type === 'element'
        ? h(child.name, child.attributes, renderChildren(child.children))
        : child.value
    )
