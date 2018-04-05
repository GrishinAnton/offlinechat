import Vue from 'vue'
import Router from 'vue-router'


import singin from '@/components/singIn/singIn'
import chat from '@/components/chat/chat'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: singin
    },
    {
      path: '/chat',
      component: chat
    }
  ]
})
