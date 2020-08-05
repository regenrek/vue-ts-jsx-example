import { defineComponent } from 'vue-demi'
import { themeContainer } from '../../composables/useTheme'
import { css, injectGlobal } from 'emotion'

injectGlobal`
  .theme-dark:before {
    opacity: 1 !important;
  }
`
export const anim = css`
  background-size: 100%;
  position: relative;
  z-index: 100;
  &:before {
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0; left: 0;
    opacity: 0;
    width: 100%;
    z-index: -100;
    transition: opacity 0.45s;
  }
`

export default defineComponent({
  name: 'NjThemeProvider',
  setup(p, ctx) {
    // const { themeVariant } = themeContainer.useContainer()
    console.log('THEM_CONTAINER', themeContainer)
    const themeVariant = 'light'
    themeContainer.provide({
      initialState: { themeVariant }
    })

    return {
      themeVariant
    }
  },
  render(this: any) {
    const {
      themeVariant
    } = this

    return (
      <div
        class={[
          anim,
          `theme-${themeVariant}`
        ]}>{this.$slots.default}</div>
    )
  }
})
