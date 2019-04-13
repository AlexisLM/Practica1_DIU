import Vue from 'vue'
import Router from 'vue-router'
import Practica1 from '@/components/Practica1'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Practica1',
      component: Practica1
    }
  ]
})
