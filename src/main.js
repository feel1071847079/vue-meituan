// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from './app'
import router from './router'

import VueResource from 'vue-resource'
import VueScroller from 'vue-scroller'
import moment from 'moment'
import './mock/mockServer'
import './common/stylus/fonts.styl'

Vue.use(VueResource)
Vue.use(VueScroller)

Vue.filter('date-string',function(value){
  return moment(value).format('YYYY-MM-DD HH:mm:ss')
})


/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
new Vue({
  el:'#app',
  render:h =>h(app),
  router
})
