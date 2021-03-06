import Vue from 'vue'
import * as vca from 'vue-tsx-support/lib/vca'
import AppPage from './App'
import VueCompositionApi, { h } from '@vue/composition-api'
import { VueEmotion } from '@egoist/vue-emotion'
// import { themeContainer } from '../dist/composables'

Vue.config.productionTip = false
Vue.use(VueCompositionApi)
Vue.use(VueEmotion)

const App = vca.component({
  name: 'App',
  setup() {
    // @TODO: read preferred theme from system or existing cookie
    // const themeVariant = 'light'
    // themeContainer.provide({
    //   initialState: { themeVariant }
    // })

    return () => {
      return h(
        AppPage
      )
    }
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')
