import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import iconComponent from './components/svgSprites/Icon'
Vue.component('icon', iconComponent)


new Vue({
  render: h => h(App),
}).$mount('#app')
