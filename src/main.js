import Vue from 'vue'
import App from './App'

/* 路由 */
import router from './router'

// import ElementUI from 'element-ui';
// 按需引入element-ui
import { Pagination, Row, Col } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Pagination);
Vue.use(Row);
Vue.use(Col);


// 进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


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

router.beforeEach((to, from, next) => {
    NProgress.start()
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next();
})
router.afterEach(() => {
    NProgress.done()
})



new Vue({
    router,
    render: h => h(App)
}).$mount('#app')