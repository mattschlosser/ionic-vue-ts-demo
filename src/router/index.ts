import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ProfilePage from '../views/ProfilePage.vue'
import SearchPage from '../views/SearchPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/users/:username',
    name: 'user',
    component: ProfilePage,
    props: true
  },
  {
    path: '/search',
    name: 'search',
    component: SearchPage,
    props: ({query}) => ({query: query.id})
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router