import { INode as Svg } from "svgson";

export interface IIconController {
    icons: { [key: string]: Svg };
    add(name: string, icon: Svg): void;
    addMultiple(icons: { [key: string]: Svg }): void;
}

export const IconController: IIconController = {
    icons: {},
    add(name, icon) {
        IconController.icons[name] = icon;
    },
    addMultiple(icons) {
        Object.keys(icons).forEach((iconName) => {
            IconController.icons[iconName] = icons[iconName];
        });
    }
};

export default IconController;
