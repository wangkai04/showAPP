import Vue from 'vue'
import App from './App.vue'

//使用MuseUI
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

//引用swiper轮播
require('swiper/dist/css/swiper.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
 
//引入VueResource
import VueResource from 'vue-resource'
Vue.use(VueResource)


//引入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//定义组件
import login from './components/login/login.vue'
import register from './components/login/register.vue'
import denglu from './components/login/denglu.vue'
import psd1 from './components/login/psd1.vue'
import psd2 from './components/login/psd2.vue'
import psd3 from './components/login/psd3.vue'

//定义局部组件
var router = new VueRouter({
			routes:[
					{path:"",component:login},
					{path:"/login",component:login},					
					{path:"/register",component:register},
					{path:"/denglu",component:denglu},
					{path:"/psd1",component:psd1},
					{path:"/psd2",component:psd2},
					{path:"/psd3",component:psd3},
			]
})	


new Vue({
  el: '#app',
  //挂载
  router:router,
  render: h => h(App)
})
