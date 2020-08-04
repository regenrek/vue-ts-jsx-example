import 'vue-tsx-support/enable-check'
import { storiesOf } from '@storybook/vue'
import { NjThemeProvider, NjTextInput } from '../'
import Vue, { VNode } from 'vue'

storiesOf('UI', module)
  .add('NjTextInput', () => {
    return Vue.extend({
      render(): VNode {
        return (
          <div>
            <div id='demo'>
              <NjThemeProvider>
                <NjTextInput
                  name="Password"
                  label="label"
                  placeholder="placeholder"
                  rules="required"
                  type="password"
                />
              </NjThemeProvider>
            </div>
          </div>
        )
      }
    })
  })
