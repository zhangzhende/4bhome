import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import register from '@/components/register'
import main from '@/components/main'
import main_zhonger from '@/components/main_zhonger'
import $ from 'jquery'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    }, {
      path: '/register',
      name: 'registerUrl',
      component: register
    }, {
      path: '/main',
      name: 'mainUrl',
      component: main
    }, {
      path: '/zhonger',
      name: 'zhonger',
      component: main_zhonger
    }
  ]
})
