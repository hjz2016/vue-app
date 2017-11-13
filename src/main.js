// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import VueLazyLoad from 'vue-lazyload'


// 公共样式
import './style/common.scss'

// 
import 'animate.css'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueAwesomeSwiper);
Vue.use(VueLazyLoad,{
   
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
