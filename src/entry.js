/* global Vue */

/* weex initialized here, please do not move this line */
const vuex = require('vuex');
Vue.use(vuex);

const router = require('./router');
const store = require('@/store');
const App = require('@/index.vue');

/* eslint-disable no-new */
new Vue(Vue.util.extend({ el: '#root', router, store }, App));
router.push('/');
