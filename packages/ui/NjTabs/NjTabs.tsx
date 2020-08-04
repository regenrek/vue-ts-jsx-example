import * as vca from 'vue-tsx-support/lib/vca'

interface ScopedSlotArgs {
  default: { tab: TabDefinition }
}

export default vca.component({
  name: 'NjTabs',
  setup(p, ctx: vca.SetupContext<{}, ScopedSlotArgs>) {
    return () => {
      const renderTab = ctx.slots.default
      return (
        <div class="">
          {renderTab()}
        </div>
      )
    }
  }
})
