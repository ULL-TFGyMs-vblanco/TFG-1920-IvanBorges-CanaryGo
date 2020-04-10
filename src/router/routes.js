
const routes = [
  {
    path: '/',
    exact: true,
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', redirect: '/home' },
      { path: '/home', component: () => import('pages/Index.vue') },
      { path: '/login', component: () => import('pages/Login.vue') },
      { path: '/signup', component: () => import('pages/SignUp.vue') },
      { path: '/events', component: () => import('pages/Eventos.vue') },
      { path: '/new', component: () => import('pages/NuevoEvento.vue') }

    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
