import * as vca from 'vue-tsx-support/lib/vca'
// import { NjBurger } from '../packages/ui/NjBurger'
import { NjBurger, NjThemeProvider } from '../dist/ui'
import 'tailwindcss/dist/base.min.css'
// import { themeContainer } from '../dist/composables'
export default vca.component({
  name: 'App',
  components: {
    NjBurger,
    NjThemeProvider
  },
  setup() {
    return () => {
      return (
        <NjThemeProvider>
          <div id="app">
            <NjBurger />
          </div>
        </NjThemeProvider>
      )
    }
  }
})
