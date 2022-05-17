import { createRouter, createWebHashHistory } from "vue-router";

import HomeEcharts from '../views/HomeEcharts.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeEcharts
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router
