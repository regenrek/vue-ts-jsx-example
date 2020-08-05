import 'vue-tsx-support/enable-check'
import { storiesOf } from '@storybook/vue'
import { NjThemeProvider, NjHeader, NjBurger } from '../'
import Vue, { VNode } from 'vue'

storiesOf('UI', module)
  .add('NjHeader', () => {
    return Vue.extend({
      render(): VNode {
        const x = 'x'
        const y = 'y'

        return (
          <div>
            <div id='demo'>
              <NjThemeProvider>
                <NjHeader>
                  <template slot="logo">
                  </template>
                  <template slot="burger">
                    <NjBurger />
                  </template>
                </NjHeader>
              </NjThemeProvider>
            </div>
          </div>
        )
      }
    })
  })
