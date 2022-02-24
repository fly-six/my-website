import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)



const routes = [{
    path: '/',
    name: 'PageView',
    component: () =>
        import ('../view/PageView.vue'),
    children: [{
            path: '/',
            redirect: '/home'
        }, {
            path: '/home',
            name: 'home',
            component: () =>
                import ('../view/HomePage.vue'),
            meta: {
                title: '首页'
            }
        }, {
            path: '/service',
            name: 'service',
            component: () =>
                import ('../view/Service'),
            meta: {
                title: 'AloT管理平台'
            }
        },
        {
            path: '/jobchance',
            name: 'jobchance',
            component: () =>
                import ('../view/JobChance'),
            meta: {
                title: '企业案例'
            }
        },
        {
            path: '/newsinformation',
            name: 'newsinformation',
            component: () =>
                import ('../view/NewsInformation'),

            meta: {
                title: '新闻媒体'
            }
        }, {
            path: '/companyintroduction',
            name: 'companyintroduction',
            component: () =>
                import ('../view/CompanyIntroduction'),

            meta: {
                title: '招商代理'
            }
        }, {
            path: '/contactus',
            name: 'contactus',
            component: () =>
                import ('../view/ContactUs'),

            meta: {
                title: '关于中南'
            }
        }, {
            path: '/projectCases',
            name: 'projectCases',
            component: () =>
                import ('../view/projectCases'),

            meta: {
                title: '企业案例'
            }
        }, {
            path: '/newsHy',
            name: 'newsHy',
            component: () =>
                import ('../view/newsHy'),

            meta: {
                title: '行业资讯'
            }
        }, {
            path: '/newsQy',
            name: 'newsQy',
            component: () =>
                import ('../view/newsQy'),

            meta: {
                title: '企业动态'
            }
        }
    ]
}]

// export default new Router({
//     routes: [{
//         path: '*',
//         redirect: '/'
//     }, {
//         path: '/',
//         name: 'PageView',
//         component: resolve => require(['@/view/PageView'], resolve),
//         children: [{
//                 path: '/',
//                 redirect: '/home'
//             }, {
//                 path: '/home',
//                 name: 'home',
//                 component: resolve => require(['@/view/HomePage'], resolve),
//                 meta: {
//                     title: '首页'
//                 }
//             }, {
//                 path: '/service',
//                 name: 'service',
//                 component: resolve => require(['@/view/Service'], resolve),
//                 meta: {
//                     title: 'AloT管理平台'
//                 }
//             },
//             {
//                 path: '/jobchance',
//                 name: 'jobchance',
//                 component: resolve => require(['@/view/JobChance'], resolve),
//                 meta: {
//                     title: '企业案例'
//                 }
//             },
//             {
//                 path: '/newsinformation',
//                 name: 'newsinformation',
//                 component: resolve => require(['@/view/NewsInformation'], resolve),
//                 meta: {
//                     title: '新闻媒体'
//                 }
//             }, {
//                 path: '/companyintroduction',
//                 name: 'companyintroduction',
//                 component: resolve => require(['@/view/CompanyIntroduction'], resolve),
//                 meta: {
//                     title: '招商代理'
//                 }
//             }, {
//                 path: '/contactus',
//                 name: 'contactus',
//                 component: resolve => require(['@/view/ContactUs'], resolve),
//                 meta: {
//                     title: '关于中南'
//                 }
//             }, {
//                 path: '/projectCases',
//                 name: 'projectCases',
//                 component: resolve => require(['@/view/projectCases'], resolve),
//                 meta: {
//                     title: '企业案例'
//                 }
//             }, {
//                 path: '/newsHy',
//                 name: 'newsHy',
//                 component: resolve => require(['@/view/newsHy'], resolve),
//                 meta: {
//                     title: '行业资讯'
//                 }
//             }, {
//                 path: '/newsQy',
//                 name: 'newsQy',
//                 component: resolve => require(['@/view/newsQy'], resolve),
//                 meta: {
//                     title: '企业动态'
//                 }
//             }
//         ]
//     }]
// })

const router = new VueRouter({
    routes
})


export default router