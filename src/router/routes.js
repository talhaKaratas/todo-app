import Vue from 'vue'
import VueRouter from 'vue-router'
import state from '../store/state'
import { store } from '../store/store'

Vue.use(VueRouter)

export const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../pages/Home'),
      beforeEnter(to, from, next) {
        if (store.state.token) {
          state.error = null
          next()
        } else {
          next('/login')
        }
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../pages/Register'),
      beforeEnter(to, from, next) {
        if (store.state.token) {
          next('/')
        } else {
          state.error = null
          next()
        }
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../pages/Login'),
      beforeEnter(to, from, next) {
        if (store.state.token) {
          next('/')
        } else {
          state.error = null
          next()
        }
      }
    }
  ],
  mode: 'history'
})
