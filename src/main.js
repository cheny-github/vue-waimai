import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/Header/Header.vue';
import store from './store';
import { ValidationProvider } from 'vee-validate';
import './validator'
import { Button } from 'mint-ui'


Vue.config.productionTip = false

// 全局注册Header组件，以供不同的content动态的使用slot。
Vue.component("Header",Header)
Vue.component("ValidationProvider",ValidationProvider)
Vue.component(Button.name,Button)


new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
