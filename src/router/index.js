import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: 'history'
    // base: process.env.VUE_ROUTER_BASE
  })

  return Router
}

// Configurar Firebase

import firebase from 'firebase'

// Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCciIEIxvTIkLFdP0cutu6WD3La0kZGBgY',
  authDomain: 'canarygo-f725d.firebaseapp.com',
  databaseURL: 'https://canarygo-f725d.firebaseio.com',
  projectId: 'canarygo-f725d',
  storageBucket: 'canarygo-f725d.appspot.com',
  messagingSenderId: '622261513235',
  appId: '1:622261513235:web:9a4d69491a04572dfb63e6',
  measurementId: 'G-GKNFVEPYQZ'
}

// Inicio de Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()
