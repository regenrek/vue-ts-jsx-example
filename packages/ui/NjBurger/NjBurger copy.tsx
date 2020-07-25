import 'vue-tsx-support/enable-check'
import { css } from 'emotion'
import Vue, { VNode } from 'vue'
import { Component } from 'vue-property-decorator'

const styles = theme => ({
  burger: css`    
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
})

@Component
export class NjBurger2 extends Vue {
  render(): VNode {
    const style = styles({
      burgerSize: '50px',
      burgerColor: '#FF0000',
      burgerX: '9px',
      burgerThickness: '3px'
    })

    return (
      <div
        id="burger"
        // :class="{ 'active': active }"
        class={style.burger}
        on={this.$listeners}
      >
        <button type="button" class="" title="Menu">
          <span class="burger-bar--1" />
          <span class="burger-bar--2" />
          <span class="burger-bar--3" />
        </button>
      </div>
    )
  }
}
