import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Vendedores'
import regVendedores from './components/Registro'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: regVendedores
    },
    {
      path: '/vendedores',
      component: Home
    }
  ]
})
