import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Technology from "../views/Technology";
import Note from "../views/Note";
import ArticleDetail from "../views/ArticleDetail";
import Comment from '../views/Comment'
import Log from '../views/Log';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/technology',
    name:'technology',
    component:Technology
  },
  {
    path:'/note',
    name:'note',
    component:Note
  },
  {
    path:'/article_detail',
    name:'article_detail',
    component:ArticleDetail
  },
  {
    path:'/log',
    name:'log',
    component: Log
  },
  {
    path:'/comment',
    name:'comment',
    component: Comment
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
