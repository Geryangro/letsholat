import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Candidate from '@/components/candidate'
import Profile from '@/components/profile'

Vue.use(Router)

export default new Router({
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
      path: '/candidate',
      name: 'Preview Peserta',
      component: Candidate
    },
    {
      path: '/profile',
      name: 'Profile Peserta',
      component: Profile
    }
  ]
})
