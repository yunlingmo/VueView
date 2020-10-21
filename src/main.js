import Vue from 'vue'
import ElementUI from 'element-ui';
import moment from 'moment';
import echarts from 'echarts' //全局引入Echarts
import MyIcon from'./components/fontIcon';
import Panel from './components/panel.vue'
import router from './router'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/style/reset.css';
import './assets/style/common.less';

// 全局组件fontIcon、Panel
Vue.component('my-icon', MyIcon)
Vue.component('Panel', Panel)

moment.locale('zh-cn');
Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false

Vue.use(ElementUI)
// Vue.use(Panel)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
