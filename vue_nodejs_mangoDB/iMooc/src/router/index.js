import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from './../views/GoodsList.vue'
import Car from './../views/car.vue'
import House from './../views/house.vue'
import User from './../views/user.vue'

Vue.use(Router)

export let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/goods',
      name: 'GoodsList',
      components: {
        default: GoodsList,
        car: Car,
        house: House
      }
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: User
    }
  ]
})
