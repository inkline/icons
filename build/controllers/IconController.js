export const IconController = {
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
//# sourceMappingURL=IconController.js.map