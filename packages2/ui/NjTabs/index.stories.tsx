import 'vue-tsx-support/enable-check'
import { storiesOf } from '@storybook/vue'
import { NjThemeProvider, NjTabs } from '../'
import Vue, { VNode } from 'vue'

const getTabs = [
  {
    key: '1',
    text: 'text lala'
  },
  {
    key: '2',
    text: 'text mmmm'
  },
  {
    key: '3',
    text: 'text xyxy'
  }
]

storiesOf('UI', module)
  .add('NjTabs', () => {
    return Vue.extend({
      render(): VNode {
        return (
          <div>
            <div id='demo'>
              <NjThemeProvider>
                <NjTabs
                  tabs={getTabs}
                  scopedSlots={{
                    default: ({ tab }) => (
                      <div>A</div>
                    )
                  }}
                />
              </NjThemeProvider>
            </div>
          </div>
        )
      }
    })
  })
