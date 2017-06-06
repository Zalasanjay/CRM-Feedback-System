import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Login'
import Forgot from '@/components/Forgot'
import Registration from '@/components/registration'
import Dashboard from '@/components/dashboard'
import editprofile from '@/components/editprofile'
import myfeedback from '@/components/myfeedback'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale'
import lang from 'element-ui/lib/locale/lang/en'

Vue.use(Element)
Vue.use(Element, { locale })
locale.use(lang)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'myprofile',
      component: Dashboard
    },
    {
      path: '/editprofile',
      name: 'editprofile',
      component: editprofile
    },
    {
      path: '/myfeedback',
      name: 'myfeedback',
      component: myfeedback
    },
    {
      path: '/forgot',
      name: 'Forgot',
      component: Forgot
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    }
  ]
})
