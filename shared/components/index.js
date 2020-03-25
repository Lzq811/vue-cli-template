import GlobalComponent from './global-component'

const components = {
}

// 注册全局方法
const install = function (Vue, opts = {}) {
  if (install.installed) return

  // 注册全局组件
  for (let name in components) {
    Vue.component(name, components[name])
  }

  // 注册实例方法
  // Vue.prototype.$YTest = new GlobalComponent(YDemo, Vue)
}

export default {
  install
}