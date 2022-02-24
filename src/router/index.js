import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home', redirect: '/beers'
  },
  {
    path: '/calculator',
    name: 'calculator',
    component: () => import('../components/calculator/CalculatorComponent')
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: () => import('../components/heroes/HeroesComponent')
  },
  {
    path: '/apod',
    name: 'Apod',
    component: () => import('../components/apod/ApodComponent')
  },
  {
    path: '/beers',
    name: 'Beers',
    component: () => import('../components/beers/BeersComponent')
  }



]

const router = new VueRouter({
  routes
})

export default router
