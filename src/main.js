import Vue from 'vue'
import App from './App.vue'
import { Icon } from 'element-ui'
import 'element-ui/lib/theme-chalk/icon.css';

Vue.component(Icon.name, Icon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
