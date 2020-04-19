import Vue from 'vue'
import App from './App.vue'

// Imported the Vue's All Ant design component
import Antd from 'ant-design-vue';

// CSS separatel needs to import
import 'ant-design-vue/dist/antd.css';

// Need to tell vue js to use AntDesign
Vue.use(Antd);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

