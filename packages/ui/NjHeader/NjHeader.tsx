import { defineComponent } from 'vue-demi'
import Vue from 'vue'
import NjHeaderNavItem from './_sub/NjHeaderNavItem'
Vue.component('NjHeaderNavItem', NjHeaderNavItem)

export default defineComponent({
  name: 'NjHeader',
  props: {
    logo: {
      type: [String, Object],
      default: ''
    },
    logoAlt: {
      type: String,
      default: 'logo'
    },
    isFixed: {
      type: Boolean,
      default: true
    }
  },
  render(this: any) {
    const {
      logo,
      logoAlt,
      isFixed
    } = this

    return (
      <div class={['bg-red', { fixed: isFixed }]}>
        <header>
          <div slot="logo" v-slot="{logo,logoAlt}">
            <img src={logo} alt={logoAlt} />
          </div>
          {this.$slots.sidebar}
          {this.$slots.burger}
        </header>
      </div>
    )
  }
})
