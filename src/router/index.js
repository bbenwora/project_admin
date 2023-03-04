import Vue from 'vue'
import VueRouter from 'vue-router'
import MessageView from '../views/MessageView.vue'
import CustomerView from '../views/CustomerView.vue'
import BilView from '../views/BilView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MessageView
  },
  {
    path: '/customer',
    component: CustomerView
  },
  {
    path: '/bil',
    component: BilView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router



