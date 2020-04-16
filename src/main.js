import Vue from 'vue'
import App from './App.vue'
import Cell from './components/Cell.vue'

Vue.config.productionTip = false
Vue.component('Cell', Cell);

new Vue({
  render: h => h(App),
  Cell
}).$mount('#app')
