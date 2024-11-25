import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const routes = [{
    path: '/',
    name: 'PageView',
    component: () => import('../view/PageView.vue'),
    children: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('../view/HomePage.vue'),
            meta: {
                title: 'Home'
            }
        },
        {
            path: '/Colorant',
            name: 'Colorant',
            component: () => import('../view/Pigments.vue'),
            meta: {
                title: 'Colorant'
            },
            children: [
                {
                    path: 'Pigments',
                    name: 'Pigments',
                    component: () => import('../view/Pigments.vue'),
                }
            ]
        },
        {
            path: '/Cosmetic',
            name: 'Cosmetic',
            component: () => import('../view/FinalProduct.vue'),
            meta: {
                title: 'Colorant'
            },
            children: [
                {
                    path: 'FinalProduct',
                    name: 'FinalProduct',
                    component: () => import('../view/FinalProduct.vue'),
                }
            ]
        },
    ]
}]


const router = new VueRouter({
    routes
})


export default router