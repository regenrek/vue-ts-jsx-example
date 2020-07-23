import Vue from 'vue'
import * as vca from 'vue-tsx-support/lib/vca'
import AppPage from './App'
import VueCompositionApi, { h } from '@vue/composition-api'
import { VueEmotion } from '@egoist/vue-emotion'

Vue.config.productionTip = false
Vue.use(VueCompositionApi)
Vue.use(VueEmotion)

const App = vca.component({
  name: 'App',
  setup() {
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
