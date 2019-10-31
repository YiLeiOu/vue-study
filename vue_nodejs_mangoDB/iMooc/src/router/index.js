import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from './../views/GoodsList.vue'

Vue.use(Router)

export let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      component: GoodsList
    }
  ]
})
