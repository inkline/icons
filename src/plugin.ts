import { Plugin } from 'vue';
import { IconController } from "./controllers";
import { Svg } from './types';
import { IIcon } from "./components";

export type InklineIconsPlugin = Plugin & {
    add(icons: { [key: string]: Svg }): void;
};

export interface PluginOptions {
    registerComponent?: boolean;
}

const defaultOptions: PluginOptions = {
    registerComponent: true
};

export const InklineIcons: InklineIconsPlugin = {
    add(icons) {
        IconController.addMultiple(icons);
    },
    install(app, options= {}) {
        options = {
            ...defaultOptions,
            ...options
        };

        app.provide('inklineIcons', IconController);

        if (options.registerComponent) {
            app.component(IIcon.name, IIcon);
        }
    }
};

export default InklineIcons;
