import 'vue-tsx-support/enable-check'
import { storiesOf } from '@storybook/vue'
import { NjBurger } from '.'
import Vue, { VNode } from 'vue'

storiesOf('UI', module)
  .add('NjBurger', () => {
    return Vue.extend({
      render(): VNode {
        return (
          <div>
            <div id='demo'>
              <NjBurger />
            </div>
          </div>
        )
      }
    })
  })
