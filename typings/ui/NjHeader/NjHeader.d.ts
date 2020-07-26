import Vue from 'vue';
declare const _default: import("vue").ComponentOptions<Vue, {
    [x: string]: unknown;
} & {
    [key: string]: unknown;
}, {}, {}, {
    logo: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    logoAlt: {
        type: StringConstructor;
        default: string;
    };
    isFixed: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {} & {
    logo?: any;
    logoAlt?: string | undefined;
    isFixed?: boolean | undefined;
}> & import("vue").VueConstructor<Vue> & (new (...args: any[]) => import("vue-demi").ComponentRenderProxy<{
    logo: any;
    logoAlt: string;
    isFixed: boolean;
} & {}, {
    [x: string]: unknown;
}, {} & {
    logo?: any;
    logoAlt?: string | undefined;
    isFixed?: boolean | undefined;
}, {}, {}, {
    logo: any;
    logoAlt: string;
    isFixed: boolean;
} & {}>);
export default _default;
