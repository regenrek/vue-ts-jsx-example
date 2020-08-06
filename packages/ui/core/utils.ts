import { SetupContext } from 'vue-demi'
import { VNode } from 'vue/types/umd'

export function evaluateSlot<
  CTX extends SetupContext,
  K extends keyof CTX['slots']
>(
  ctx: CTX,
  slotName: K,
  ...args: Parameters<CTX['slots'][K]>
): VNode | VNode[] | undefined {
  const slot = ctx.slots[slotName as string]
  if (!slot)
    return undefined
  else
    return slot(...args)
}
