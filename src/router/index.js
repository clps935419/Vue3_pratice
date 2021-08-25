import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/rwd',
        name: 'rwd',
        component: () => import('../views/Rwd.vue'),
    },
    {
        path: '/vue',
        name: 'vue',
        component: () => import('../views/Vuejs.vue'),
    },
    {
        path: '/recat',
        name: 'recat',
        component: () => import('../views/Recat.vue'),
    },
    {
        path: '/html',
        name: 'html',
        component: () => import('../views/Html.vue'),
    },
    {
        path: '/node',
        name: 'node',
        component: () => import('../views/Node.vue'),
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
