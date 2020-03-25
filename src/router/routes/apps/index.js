const apps = r => require.ensure([], () => r(require('@/views/apps')), 'apps')

export default [{
  path: '/',
  redirect: 'apps'
}, {
  path: '/apps',
  component: apps
}]
