import { defineComponent } from 'vue-demi'

export default defineComponent({
  name: 'NjHeaderNavItem',
  render(this: any) {
    return (
      <div v-on="$listeners">{this.$slots.default}</div>
    )
  }
})
