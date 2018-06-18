/* global Vue */
import Router from 'vue-router';

import Identity from '@/pages/identity/index';
import Login from '@/pages/identity/login';
import Register from '@/pages/identity/register';
import ForgetPassword from '@/pages/identity/forget-password';

import Home from '@/pages/home/index';
import BookList from '@/pages/home/book-list/index';
import Message from '@/pages/home/message/index';
import Profile from '@/pages/home/profile/index';

import Book from '@/pages/book/index';

import Chat from '@/pages/chat/index';

import Sell from '@/pages/sell/index';

import Goods from '@/pages/goods/index';

Vue.use(Router);

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'identity',
      component: Identity,
      children: [{
        path: '/',
        redirect: 'login',
      }, {
        path: '/login',
        name: 'login',
        component: Login,
      }, {
        path: '/register',
        name: 'register',
        component: Register,
      }, {
        path: '/forget-password',
        name: 'forget-password',
        component: ForgetPassword,
      }],
    },
    {
      path: '/sell',
      component: Sell,
    },
    {
      path: '/goods/:state',
      component: Goods,
    },
    {
      path: '/chat/:room',
      component: Chat,
    },
    {
      path: '/book/:id',
      component: Book,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '',
          redirect: 'list',
        },
        {
          path: 'list',
          name: 'book-list',
          component: BookList,
        },
        {
          path: 'message',
          name: 'message',
          component: Message,
        },
        {
          path: 'profile',
          name: 'profile',
          component: Profile,
        },
      ],
    },
  ],
});
