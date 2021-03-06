import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index.vue'
import Detail from '@/pages/detail/detail.vue'
import Search from '@/pages/search/search.vue'
import List from '@/pages/list/list.vue'
import Login from '@/pages/login/login.vue'
import Wode from '@/pages/wode/wode.vue'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/wode',
      name: 'wode',
      component: Wode
    }
  ]
})
