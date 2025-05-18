import { createRouter, createWebHistory } from 'vue-router'
import store from './store'

const Chat = () => import('./views/Chat.vue')
const Login = () => import('./views/Login.vue')
const NotFound = () => import('./views/NotFound.vue')

const router = createRouter({
    history: createWebHistory('/demo/app/web/ephemeral-chat/'),
    routes: [
        {
            path: '/',
            redirect: '/login',
        },       
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/chat',
            name: 'Chat',
            component: Chat
        },
        { 
            path: '/:pathMatch(.*)*', 
            name: 'NotFound', 
            component: NotFound 
        },

    ]
})

let isAuthenticated = store.state.isAuthenticated

const unsubscribe = store.subscribe((mutation, state) => {
    if(mutation.type === 'login') {
        isAuthenticated = state.isAuthenticated
    }
})


router.beforeEach((to, from, next) => {
    if(to.name !== 'Login' && !isAuthenticated) return next('/login')
    if(to.name === 'Login' && isAuthenticated) return next('/chat')

    else next()
})

export default router
