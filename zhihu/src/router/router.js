import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home"
import Detail from "../components/Detail"
Vue.use(Router)
const router = new Router({
  mode: 'hash',
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/detail',
    name: 'detail',
    component: Detail
  }, {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  }, {
    path: '*',
    redirect: '/'
  }]
});
export default router