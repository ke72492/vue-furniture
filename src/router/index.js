import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import StepOneView from '@/views/StepOneView.vue';
import StepTwoView from '@/views/StepTwoView.vue';
import StepThreeView from '@/views/StepThreeView.vue';
import StepFourView from '@/views/StepFourView.vue';
import LoginView from '@/views/LoginView.vue';

const title='家具商城';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return {
      top: 0,
    };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: `${title}`,
      },
    },
    {
      path: '/step-1',
      name: 'step-1',
      component: StepOneView,
      meta: {
        title: `${title}-第一步`,
      },
    },
    {
      path: '/step-2',
      name: 'step-2',
      component: StepTwoView,
      meta: {
        title: `${title}-第二步`,
      },
    },
    {
      path: '/step-3',
      name: 'step-3',
      component: StepThreeView,
      meta: {
        title: `${title}-第三步`,
      },
    },
    {
      path: '/step-4',
      name: 'step-4',
      component: StepFourView,
      meta: {
        title: `${title}-第四步`,
      },
    },
    {
      path: '/Login',
      name: 'Login',
      component: LoginView,
      meta: {
        title: `${title}-第四步`,
      },
    },
  ],
});

export default router;
