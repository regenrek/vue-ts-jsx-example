import { SetupContext } from 'vue-demi';
import { VNode } from 'vue/types/umd';
export declare function evaluateSlot<CTX extends SetupContext, K extends keyof CTX['slots']>(ctx: CTX, slotName: K, ...args: Parameters<CTX['slots'][K]>): VNode | VNode[] | undefined;
