import Vue from 'vue'
import VueRouter from 'vue-router'
import goods from '../components/goods/goods.vue'
import ratings from '../components/ratings/ratings.vue'
import seller from '../components/seller/seller.vue'

Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass:'active',
  routes: [
    {
      path:'/',
      redirect:'goods'
    },
    {
      path:'/goods',
      component:goods
    },
    {
      path:'/ratings',
      component:ratings
    },
    {
      path:'/seller',
      component:seller
    }
  ]
})
