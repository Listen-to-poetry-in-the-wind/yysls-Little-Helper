import { routes } from './routes';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to, from) => {
  if (to.meta.menu) {
    to.meta.Mode = 'out-in';
    to.meta.Enter = 'onToRightEnter';
    to.meta.Leave = 'onToRightLeave';
  }

  window.scrollTo(0, 0);
});
export default router;
