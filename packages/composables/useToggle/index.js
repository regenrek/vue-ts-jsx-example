import { ref } from 'vue-demi';
export function useToggle() {
    const active = ref(false);
    const toggle = () => {
        active.value = !active.value;
    };
    return { active, toggle };
}
//# sourceMappingURL=index.js.map