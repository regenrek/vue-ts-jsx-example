import { Ref } from 'vue-demi';
export declare function useToggle<T>(): {
    active: Ref<boolean>;
    toggle: () => void;
};
