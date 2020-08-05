import 'vue-tsx-support/enable-check'
import { storiesOf } from '@storybook/vue'
import { NjThemeProvider, NjButton } from '../'
import Vue, { VNode } from 'vue'

storiesOf('UI', module)
  .add('NjButton', () => {
    return Vue.extend({
      render(): VNode {
        const onOk = async() => {
          alert('hey')
        }

        return (
          <div>
            <div id='demo'>
              <NjThemeProvider>
                <NjButton action={onOk}>
                    Weiter
                </NjButton>
              </NjThemeProvider>
            </div>
          </div>
        )
      }
    })
  })
