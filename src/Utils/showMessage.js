import getComponentRootDom from '@/Utils/getComponentRootDom'
import Icon from '@/components/Icon'
import styles from './showMessage.module.less'

export default function (options = {}) {
  const content = options.content || ''
  const type = options.type || 'info'
  const duration = options.duration || 2000
  const container = options.container || document.body
  // 创建消息元素
  const div = document.createElement('div')
  const iconDom = getComponentRootDom(Icon, {
    type
  })
  div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`
  // 设置样式
  const typeClassName = styles[`message-${type}`]
  div.className = `${styles.message} ${typeClassName}`
  // 容器的position是否改动过
  if (options.container) {
    if (getComputedStyle(container).position === 'static') {
      container.style.position = 'relative'
    }
  }
  container.appendChild(div)
  // eslint-disable-next-line no-unused-expressions
  div.clientHeight
  div.style.opacity = 1
  div.style.transform = 'translate(-50%,-50%)'

  setTimeout(() => {
    div.style.opacity = 0
    div.style.transform = 'translate(-50%,-50%) translateY(-25px)'
    div.addEventListener('transitionend', function () { div.remove() }, { once: true })
    options.callback && options.callback()
  }, duration)
}
