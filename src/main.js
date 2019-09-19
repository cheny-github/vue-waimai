import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/Header/Header.vue';
Vue.config.productionTip = false
// 全局注册Header组件，以供不同的content动态的使用slot。
Vue.component("Header",Header)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
