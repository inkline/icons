import { h, inject, computed, defineComponent, onMounted } from 'vue';
import { renderChildren, toCamelCase } from '../../helpers';
import { IIconController } from "../../controllers";

export default defineComponent({
    name: 'IIcon',
    props: {
        /**
         * @description The icon to be displayed
         * @type String
         * @default
         */
        name: {
            type: String,
            default: ''
        },
        /**
         * @description The size variant of the icon
         * @type sm | md | lg
         * @default md
         */
        size: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const controller = inject('inklineIcons', {
            icons: {}
        } as IIconController);

        const iconName = computed(() => toCamelCase(props.name));
        const icon = computed(() => controller.icons[iconName.value]);
        const classes = computed(() => ({
            'inkline-icon': true,
            [`-${props.size}`]: Boolean(props.size)
        }));

        onMounted(() => {
            if (iconName.value && !controller.icons[iconName.value]) {
                throw new Error(`The icon ${iconName.value} is not registered.`)
            }
        });

        return () => h(
            'svg',
            {
                class: classes.value,
                ...icon.value?.attributes
            },
            renderChildren(icon.value?.children || [])
        );
    }
});
