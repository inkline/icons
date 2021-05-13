import { INode as Svg } from "svgson";
interface IIconController {
    icons: {
        [key: string]: Svg;
    };
    add(name: string, icon: Svg): void;
    addMultiple(icons: {
        [key: string]: Svg;
    }): void;
}
export declare const IconController: IIconController;
export default IconController;
