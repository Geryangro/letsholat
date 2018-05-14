import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import AuthFacebook from '@/components/AuthFacebook'
import AuthFacebookCallback from '@/components/AuthFacebookCallback'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/home',
            name: 'Pendaftaran Lets Sholat',
            component: Home
        },
        {
            path: '/auth/facebook',
            name: 'Auth Facebook',
            component: AuthFacebook
        },
        {
            path: '/auth/facebook/callback',
            name: 'Auth Facebook Callback',
            component: AuthFacebookCallback
        }
    ]
})
