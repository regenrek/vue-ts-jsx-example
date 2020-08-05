import 'vue-tsx-support/enable-check'
import { css } from 'emotion'
import { themeContainer } from '../../composables/useTheme'
import { useToggle } from '../../composables/useToggle'
import { defineComponent, computed } from 'vue-demi'

const styles = {
  burger: (theme: any) => css`    
    /* default */
    > button {
      position: relative;
      display: block;
      z-index: 999;
      border: 0;
      cursor: pointer;
      outline: 0;
      height: ${theme.burgerSize};
      width: ${theme.burgerSize};
      transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
      > span {
        background-color: ${theme.burgerColor};
        position: absolute;
        top: 50%;
        right: ${theme.burgerX};
        left: ${theme.burgerX};
        height: ${theme.burgerThickness};
        width: auto;
        margin-top: -1px;
        transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1),
          opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1),
          background-color 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
      }
      .burger-bar--1 {
        transform: translateY(calc(-1 * ${theme.burgerX}));
      }
      .burger-bar--2 {
        transform-origin: 100% 50%;
        transform: scaleX(0.8);
      }
      .burger-bar--3 {
        transform: translateY(${theme.burgerX});
      }
    }
    /* hover */
    > button:hover {
      .burger-bar--2 {
        transform: scaleX(1);
      }
    }
    /* active */
    &.active {
      .burger-button {
        transform: rotate(-180deg);
      }
      .burger-bar {
        background-color: ${theme.burgerColor};
      }
      .burger-bar--1 {
        transform: rotate(45deg);
      }
      .burger-bar--2 {
        opacity: 0;
      }
      .burger-bar--3 {
        transform: rotate(-45deg);
      }
    }
  `
}

export default defineComponent({
  setup(props, { attrs, emit }) {
    const { theme } = themeContainer.useContainer()
    const { active, toggle } = useToggle()
    console.log('test')
    const inputListeners = computed(() => {
      // `Object.assign` merges objects together to form a new object
      return Object.assign({},
        // We add all the listeners from the parent
        attrs.$listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
          async click(event) {
            emit('click', event.target.value)
            await toggle()
            // const { valid } = await refs.provider.validate(event)
            // if (valid) { emit('input', event.target.value) }
          }
        }
      )
    })

    // const classes = computed(() => ({

    // }));

    return {
      theme,
      active,
      inputListeners
    }
  },
  render(this: any) {
    const {
      theme,
      active,
      inputListeners
    } = this

    return (
      <div
        id="burger"
        // :class="{ 'active': active }"
        class={[styles.burger(theme.burger), { active }]}
        {...{ on: inputListeners }}
      >
        <button type="button" class="" title="Menu">
          <span class="burger-bar--1" />
          <span class="burger-bar--2" />
          <span class="burger-bar--3" />
        </button>
      </div>
    )
  }
})
