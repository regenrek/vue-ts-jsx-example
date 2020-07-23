import * as vca from 'vue-tsx-support/lib/vca'
import 'vue-tsx-support/enable-check'
// import { useToggle } from '@nujek/composables'
import { css } from 'emotion'
import Vue, { VNode } from 'vue'
import { Component } from 'vue-property-decorator'

const style = {
  button: css`
    background-color: red;
  `
}

@Component
export class NjBurger extends Vue {
  render(): VNode {
    return (
      <button>ASDF</button>
    )
  }
}

// export default vca.component({
//   name: 'NjBurger',
//   props: {
//     active: {
//       type: Boolean,
//       default: false
//     }
//   },
//   setup(props, { attrs, emit }) {
//     return (): VNode => {
//       return (
//         <div
//           id="burger"
//           class={['menu-button menu-toggle md:hidden burger', style.button]}
//           // :class="{ 'active': active }"
//           // on={$listeners}
//           // {...{ on: this.$listeners }}
//           // on={this.$listeners}
//         >
//           <slot>
//             <button type="button" class="relative block z-999 border-0 cursor-pointer focus:outline-none" title="Menu">
//               <span class="burger-bar--1" />
//               <span class="burger-bar--2" />
//               <span class="burger-bar--3" />
//                 BURGER
//             </button>
//           </slot>
//         </div>
//       )
//     }
//   }
// })
