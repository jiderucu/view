import Vue from 'vue'
import Router from 'vue-router'
/* import Hello from '@/components/Hello' */
import Opinion from '@/container/Opinion'
import Opinionrecord from '@/container/Opinionrecord'
import Acitvity from '@/container/Acitvity'
Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Opinion',
      component: Opinion
    },
    {
      path: '/opinionrecord',
      name: 'Opinionrecord',
      component: Opinionrecord
    },
    {
      path: '/activity',
      name: 'Activity',
      component: Acitvity
    },
    {
      path: '/opinion',
      name: 'Opinion',
      component: Opinion
    }
  ]
})
global.router = router
export default router
