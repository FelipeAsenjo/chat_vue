import { createRouter, createWebHistory } from 'vue-router'
import store from './store'

const Chat = () => import('./views/Chat.vue')
const Login = () => import('./views/Login.vue')
const NotFound = () => import('./views/NotFound.vue')

const router = createRouter({
    history: createWebHistory(),
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


const isAuthenticated = store.state.isAuthenticated

router.beforeEach((to, from, next) => {
    if(to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })

    else next()
})

export default router