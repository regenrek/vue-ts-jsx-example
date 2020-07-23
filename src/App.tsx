import * as vca from 'vue-tsx-support/lib/vca'
import { NjBurger } from '../packages/ui/NjBurger'
import 'tailwindcss/dist/base.min.css'

export default vca.component({
  name: 'App',
  components: {
    NjBurger
  },
  setup() {
    return () => {
      return (
        <div id="app">
          <NjBurger />
        </div>
      )
    }
  }
})
