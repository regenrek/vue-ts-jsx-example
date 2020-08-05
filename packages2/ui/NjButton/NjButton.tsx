import { modifiers as m, ofType } from 'vue-tsx-support'
import * as vca from 'vue-tsx-support/lib/vca'
import p from 'vue-strict-prop'
import Vue from 'vue'
import { css } from 'emotion'

const styles = {
  button: css`
      cursor: pointer;
      outline: 0;
      padding: 1rem 2rem;
    `
}

export const BaseButton = ofType<
{
  href?: string
  type?: string
  disabled?: boolean
},
{
  onClick: MouseEvent
}
>().convert(Vue.component('BaseButton'))

export default vca.component({
  name: 'NjButton',
  props: {
    href: String,
    tooltip: String,
    mini: Boolean,
    raised: Boolean,
    disabled: Boolean,
    primary: Boolean,
    accent: Boolean,
    action: p.ofFunction<() => void>().required
  },
  setup(p, ctx) {
    return () => {
      return (
        <BaseButton
          class={styles.button}
          href={p.href}
          disabled={p.disabled}
          onClick={m.stop(p.action)}
        >
          {ctx.slots.default()}
        </BaseButton>
      )
    }
  }
})
