import Vue from 'vue'
import App from './App'

/* 路由 */
import router from './router'

// 引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


/* swiper */
import 'swiper/dist/css/swiper.min.css';

/* 重置样式 */
import './assets/css/reset.min.css'

/* commont样式 */
import './assets/css/commont.css'


/* jquery */
import 'jquery'

/* bootstarp */
// import './assets/css/bootstrap.min.css'
// import './assets/js/bootstrap.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

/* animate.css */
import 'animate.css'



/* 头部组件 */
import Header from './components/Header'
Vue.component(Header.name, Header)


/* 尾部组件 */
import Footer from './components/Footer'
Vue.component(Footer.name, Footer)

/* 回到顶部 */
import GoTop from './components/GoTop'
Vue.component(GoTop.name, GoTop)



Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//     if (to.meta.title) {
//         document.title = to.meta.title
//     }
//     next();
// })

console.log("11111111111111")


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')