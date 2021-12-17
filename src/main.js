import Vue from 'vue'
import App from './App.vue'
import { Icon } from 'element-ui'
import { Modal }from 'ant-design-vue';
import 'element-ui/lib/theme-chalk/icon.css';

Modal.install(Vue)

Vue.component(Icon.name, Icon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
