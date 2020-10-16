import Vue from 'vue'
import ElementUI from 'element-ui';
import moment from 'moment';
import Panel from './components/panel/idnex.js'
import router from './router'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/style/reset.css';
import './assets/style/common.less';
moment.locale('zh-cn');

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Panel)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
