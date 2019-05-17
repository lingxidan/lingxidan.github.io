import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import main from '@/components/pages/main'
import login from '@/components/pages/login'
import registe from '@/components/pages/registe'
import search from '@/components/pages/search'
import chat from '@/components/pages/chat'

import lunbo from '@/components/common/carousel'
// import topNav from '@/components/common/nav'

Vue.use(Router)

const router = new Router({
    routes: [{
            // 主页
            path: '/',
            name: 'main',
            component: main
        },
        // {
        //  // 主页
        //   path: '/',
        //   name: 'nav',
        //   component: nav
        // },
        {
            // 登录页面
            path: '/login',
            name: 'login',
            component: login
        },
        {
            // 注册页面
            path: '/registe',
            name: 'registe',
            component: registe
        },
        {
            // 搜索页面
            path: '/search',
            name: 'search',
            component: search
        },
        {
            // 聊天室
            path: '/chat',
            name: 'chat',
            component: chat
        },
        {
            // 轮播页面
            path: '/lunbo',
            name: 'lunbo',
            component: lunbo
        }
    ]
});
export default router;