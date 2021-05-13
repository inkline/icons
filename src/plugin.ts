import { Plugin } from 'vue';
import { IconController } from "./controllers";
import { Svg } from './types';
import { IIcon } from "./components";

export interface PluginOptions {
    registerComponent?: boolean;
}

const defaultOptions = {
    registerComponent: true
};

export const InklineIcons: Plugin = {
    add(icons: { [key: string]: Svg }) {
        IconController.addMultiple(icons);
    },
    install(app, options: PluginOptions = {}) {
        options = {
            ...defaultOptions,
            ...options
        };

        if (options.registerComponent) {
            app.component(IIcon.name, IIcon);
        }
    }
} as Plugin;

export default InklineIcons;
