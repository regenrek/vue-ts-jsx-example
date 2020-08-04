import 'vue-tsx-support/enable-check'
import { storiesOf } from '@storybook/vue'
import { NjThemeProvider, NjButton } from '../'
import Vue, { VNode } from 'vue'

storiesOf('UI', module)
  .add('NjTextInput', () => {
    return Vue.extend({
      render(): VNode {
        return (
          <div>
            <div id='demo'>
              <NjThemeProvider>
                <NjButton href="https://www.google.at" target="_blank">
                    Weiter
                </NjButton>
              </NjThemeProvider>
            </div>
          </div>
        )
      }
    })
  })
