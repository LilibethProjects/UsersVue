import Vue from 'vue'
import VueRouter from 'vue-router'
import Editar from '../views/Editar.vue'
import User from '../views/User.vue'
import Home from '../views/Home.vue'
import Nuevo from '../views/Nuevo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: Editar
  },
  {
    path: '/nuevo',
    name: 'Nuevo',
    component: Nuevo
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
