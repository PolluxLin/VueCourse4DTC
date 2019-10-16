import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component:  () => import('./views/Home.vue') },
    { path: '/about', name: 'about', component: () => import('./views/About.vue') },
    { path: '/Ch01/Sc01', name: 'cs0101', component:  () => import('./views/Ch01/Sc01.vue') },
    { path: '/Ch01/Sc02', name: 'cs0102', component:  () => import('./views/Ch01/Sc02.vue') },
    { path: '/Ch01/Sc03', name: 'cs0103', component:  () => import('./views/Ch01/Sc03.vue') },
    { path: '/Ch01/Sc04', name: 'cs0104', component:  () => import('./views/Ch01/Sc04.vue') },
    { path: '/Ch01/Sc05', name: 'cs0105', component:  () => import('./views/Ch01/Sc05.vue') },
    { path: '/Ch01/Sc06', name: 'cs0106', component:  () => import('./views/Ch01/Sc06.vue') },
  ]
})
