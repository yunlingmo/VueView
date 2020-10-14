import Vue from 'vue'
import router from './router'
import App from './App.vue'
import './assets/style/reset.css';
import './assets/style/common.less';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
