import { reactive, toRefs, computed, watch } from 'vue-demi';
import { createContainer } from 'vue-unstated';
import { defaultTheme } from './defaultTheme';
export { defaultTheme };
// const twConfig = resolveConfig(tailwindConfig)
// import resolveConfig from 'tailwindcss/resolveConfig'
// import tailwindConfig from '../../tailwind.config'
const useTheme = (initialState = { themeVariant: 'light' }) => {
    const state = reactive(initialState);
    const switchThemeVariant = (variant) => {
        state.themeVariant = variant;
    };
    const toggleDarkLightMode = () => {
        state.themeVariant = state.themeVariant === 'light' ? 'dark' : 'light';
    };
    const isDarkTheme = computed(() => state.themeVariant === 'dark');
    // const tw: object = twConfig.theme
    // const themeVariants = computed(() => twConfig.theme.themeVariants)
    console.log('defaultTheme', defaultTheme);
    watch(isDarkTheme, () => console.log(state.themeVariant));
    return Object.assign(Object.assign({}, toRefs(state)), { theme: defaultTheme, switchThemeVariant,
        toggleDarkLightMode,
        // tw,
        // themeVariants,
        isDarkTheme });
};
export const themeContainer = createContainer(useTheme);
//# sourceMappingURL=index.js.map