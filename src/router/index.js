import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import GiftView from '../views/GiftView.vue';
import VenueView from '../views/VenueView.vue';
import ProgramView from '../views/ProgramView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import EntourageView from '../views/EntourageView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: "Home",
    }
  },


  {
    path: '/venue',
    name: 'Venue',
    component: VenueView,
    meta: {
      title: "Venue",
    }
  },

  {
    path: '/program',
    name: 'Program',
    component:ProgramView,
    meta: {
      title: "Program",
    }
  },

  {
    path: '/gift',
    name: 'Gift',
    component:GiftView,
    meta: {
      isAdmin: true,
      title: "Gift ",
    }
  },
  {
    path: '/entourage',
    name: 'Entourage',
    component: EntourageView,
    meta: { 
      title: "Entourage ",
    }
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundView,
    meta: {
      title: "404 - Page not found",
    }
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});


export default router;
