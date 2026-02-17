import { createRouter, createWebHistory } from 'vue-router'
import UserView from '@/views/UserView.vue'
import AppHome from '@/views/AppHome.vue'
import Search from '@/views/Search.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/user/:id',
      name: 'user',
      component: UserView,
      /* children: [
        {
          path: 'profile',
          component: UserProfile,
        },
        {
          path: 'posts',
          component: UserPosts,
        },
      ], */
    },
  ],
})

export default router
