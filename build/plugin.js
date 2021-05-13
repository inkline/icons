import { IconController } from "./controllers";
import { IIcon } from "./components";
const defaultOptions = {
    registerComponent: true
};
export const InklineIcons = {
    add(icons) {
        IconController.addMultiple(icons);
    },
    install(app, options = {}) {
        options = {
            ...defaultOptions,
            ...options
        };
        if (options.registerComponent) {
            app.component(IIcon.name, IIcon);
        }
    }
};
export default InklineIcons;
//# sourceMappingURL=plugin.js.map