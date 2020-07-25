import { configure, addParameters, addDecorator } from '@storybook/vue'
import Vue from 'vue'
import 'github-markdown-css'
import './base16-gruvbox.dark.css'
// import './style.css'
import theme from './theme'
import VueCompositionApi from '@vue/composition-api'
Vue.use(VueCompositionApi)

addParameters({
  options: {
    theme,
    hierarchySeparator: /\//,
    hierarchyRootSeparator: /\|/
  }
})

// addDecorator(story => (
//   <NjThemeProvider>
//     {story()}
//   </NjThemeProvider>
// ))

configure(require.context('../packages', true, /\.stories\.tsx$/), module)
