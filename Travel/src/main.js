// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'   //解决部分移动端点击事件延迟300毫秒
import vueAwesomeSwiper from 'vue-awesome-swiper'
import store from './vuex/index.js'
import './assets/styles/reset.css'  //移动端默认样式
import './assets/styles/border.css' //移动端一像素边框
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false;
fastClick.attach(document.body);    //将fastClick绑定到body身上
Vue.use(vueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

