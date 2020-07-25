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
    isDarkTheme: import("vue-demi").ComputedRef<boolean>;
    themeVariant: import("vue-demi").Ref<string>;
}, {
    themeVariant: string;
}>;
