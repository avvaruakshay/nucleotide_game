import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import './theme/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.config.keyCodes = { A: 65, C: 67, G: 71, T: 84 }

new Vue({
  render: h => h(App),
}).$mount('#app')
