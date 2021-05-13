import { Plugin } from 'vue';
import { Svg } from './types';
export declare type InklineIconsPlugin = Plugin & {
    add(icons: {
        [key: string]: Svg;
    }): void;
};
export interface PluginOptions {
    registerComponent?: boolean;
}
export declare const InklineIcons: InklineIconsPlugin;
export default InklineIcons;
