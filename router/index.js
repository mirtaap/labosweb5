// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import MealPage from '../views/MealPage.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/meal/:id', component: MealPage, name: 'meal', props: true }, // Dynamic routing
  { path: '/lazy', component: () => import('../components/LazyComponent.vue'), name: 'lazy' }, // 11. Lazy loading
  { path: '/:catchAll(.*)', component: NotFound, name: 'notfound' }, // 7. Catch-all route for 404
];

const router = createRouter({
  history: createWebHistory(), // 7. Bookmarkable links
  routes,
});

export default router;
