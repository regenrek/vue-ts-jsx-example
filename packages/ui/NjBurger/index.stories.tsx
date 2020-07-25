import 'vue-tsx-support/enable-check'
import { storiesOf } from '@storybook/vue'
import { NjBurger, NjThemeProvider } from '../'
import Vue, { VNode } from 'vue'

storiesOf('UI', module)
  .add('NjBurger', () => {
    return Vue.extend({
      render(): VNode {
        return (
          <div>
            <div id='demo'>
              <NjThemeProvider>
                <NjBurger />
              </NjThemeProvider>
            </div>
          </div>
        )
      }
    })
  })
