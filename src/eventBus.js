// const listeners = {}
//
// export default {
//   // 监听某一个事件
//   $on (eventName, handeler) {
//     if (!listeners[eventName]) {
//       listeners[eventName] = new Set()
//     }
//   },
//   $off (eventName, handeler) {
//     if (!listeners[eventName]) {
//       return
//     }
//     listeners[eventName].delete(handeler)
//   },
//   $emit (eventName, handeler) {
//     if (!listeners[eventName]) {
//
//     }
//     for (const handeler of listeners[eventName]) {
//       handeler(...args)
//     }
//   }
// }
import Vue from 'vue'
const app = new Vue({})

Vue.prototype.$bus = app
export default app
