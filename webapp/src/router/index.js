import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import  store from '../store';
let storeVar = store;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/no-access',
      name: 'noAccessPage',
      component: () => import('../views/NoAccessAppPage.vue')
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: async (to, from, next) => {
        try {
          const authorized = storeVar.state.globalUser.emailVerified;
          authorized ? next() : next({ name: 'noAccessPage' });
        } catch (error) {
          console.error('Error:', error);
          next({ name: 'errorPage' }); // Redirige a una página de error en caso de un error
        }
      }
    }
  ]
})

export default router
