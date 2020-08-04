import * as vca from 'vue-tsx-support/lib/vca'
import { TabDefinition } from '../../../types/mainTypes'
import p from 'vue-strict-prop'

interface ScopedSlotArgs {
  default: { tab: TabDefinition }
}

export default vca.component({
  props: {
    tabs: p.ofRoArray<TabDefinition>().required
  },
  name: 'NjTabs',
  setup(p, ctx: vca.SetupContext<{}, ScopedSlotArgs>) {
    return () => {
      const { tabs } = p
      const renderTab = ctx.slots.default
      return (
        <div class="">
          {tabs.map((tab, index) => (
            <div>
              {renderTab({ tab })}
            </div>
          ))}
        </div>
      )
    }
  }
})
