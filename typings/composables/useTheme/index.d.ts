import { defaultTheme } from './defaultTheme';
export { defaultTheme };
export declare const themeContainer: import("vue-unstated").Container<{
    theme: {
        burger: {
            burgerX: string;
            burgerThickness: string;
            burgerColor: string;
            burgerSize: string;
        };
    };
    switchThemeVariant: (variant: any) => void;
    toggleDarkLightMode: () => void;
    isDarkTheme: import("@vue/composition-api").ComputedRef<boolean>;
    themeVariant: import("@vue/composition-api").Ref<string>;
}, {
    themeVariant: string;
}>;
