import Vue from 'vue'
import App from './App.vue'
//import  './components/Header.vue' 

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
