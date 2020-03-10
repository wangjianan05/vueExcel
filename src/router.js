/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-28 14:54:47
 * @LastEditTime: 2020-03-10 10:58:56
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import Router from 'vue-router'
import login from './views/login.vue'
import index from './views/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    }

  ]
})
