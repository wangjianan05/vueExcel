/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-28 14:54:47
 * @LastEditTime: 2020-03-10 15:45:04
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import ElementUI from 'element-ui'
import ElementUI from './utils/element'
import 'element-ui/lib/theme-chalk/index.css' // elementUI的样式

Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
