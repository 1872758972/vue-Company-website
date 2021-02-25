import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'

import announcement1 from '@/router/announcement/announcement1'
import announcement2 from '@/router/announcement/announcement2'
import announcement3 from '@/router/announcement/announcement3'
import announcement4 from '@/router/announcement/announcement4'

import news1 from '@/router/news/news1'
import news2 from '@/router/news/news2'
import news3 from '@/router/news/news3'
import news4 from '@/router/news/news4'

import guide1 from '@/router/guide/guide1'
import guide2 from '@/router/guide/guide2'
import guide3 from '@/router/guide/guide3'
import guide4 from '@/router/guide/guide4'

import culture1 from '@/router/culture/culture1'
import culture2 from '@/router/culture/culture2'
import culture3 from '@/router/culture/culture3'
import culture4 from '@/router/culture/culture4'

import contact1 from '@/router/contact/contact1'
import contact2 from '@/router/contact/contact2'
import contact3 from '@/router/contact/contact3'
import contact4 from '@/router/contact/contact4'
import articlel from '@/router/articlel'
import login from '@/router/login'
import management from '@/router/management'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/login'
    },
    {
      path: '/home/',
      name: 'home',
      component: home
    },{
      path:'/announcement1',
      name:'announcement1',
      component: announcement1,
      children:[
        {
          path:'/articlel',
          name:'articlel',
          component:articlel
        },
        {
          path:'/announcement2',
          name:'announcement2',
          component:announcement2
        },{
          path:'/announcement3',
          name:'announcement3',
          component:announcement3
        },{
          path:'/announcement4',
          name:'announcement4',
          component:announcement4
        }
      ]
    },{
      path:'/news1',
      name:'news1',
      component:news1,
      children:[
        {
          path:'/news2',
          name:'news2',
          component:news2
        },
        {
          path:'/news3',
          name:'news3',
          component:news3
        },
        {
          path:'/news4',
          name:'news4',
          component:news4
        }
      ]
    },{
      path:'/guide1',
      name:'guide1',
      component:guide1,
      children:[
        {
          path:'/guide2',
          name:'guide2',
          component:guide2
        },{
          path:'/guide3',
          name:'guide3',
          component:guide3
        },{
          path:'/guide4',
          name:'guide4',
          component:guide4
        }
      ]
    },
    {
      path:'/culture1',
      name:'culture1',
      component:culture1,
      children:[
        {
          path:'/culture2',
          name:'culture2',
          component:culture2
        },{
          path:'/culture3',
          name:'culture3',
          component:culture3
        },{
          path:'/culture4',
          name:'culture4',
          component:culture4
        }
      ]
    },{
      path:'/contact1',
      name:'contact1',
      component:contact1,
      children:[
        {
          path:'/contact2',
          name:'contact2',
          component:contact2
        },{
          path:'/contact3',
          name:'contact3',
          component:contact3
        },{
          path:'/contact4',
          name:'contact4',
          component:contact4
        }
      ]
    },{
      path:'/login',
      name:'login',
      component:login
    },{
      path:'/management',
      name:'management',
      component:management
    }
  ]
})
