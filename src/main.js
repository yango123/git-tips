import Vue from 'vue'
import App from './App.vue'
import prompt from '@/plugins/index'

Vue.prototype.$prompt = prompt.install;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
