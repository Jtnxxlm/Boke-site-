import Vue from 'vue'
import App from './App.vue'
import './styles/global.less'
import router from './router'
import showMessage from '@/Utils/showMessage'
import store from '@/store'
import './eventBus'
import './mock'
// 注册全局组件
import vLoading from './directives/loading'
import vLayz from './directives/lazy'
Vue.prototype.$showMessage = showMessage
Vue.directive('loading', vLoading)
Vue.directive('Layz', vLayz)
store.dispatch('setting/fetchSetting')
window.showMessage = showMessage
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
