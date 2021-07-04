export default function (fn, duration = 1000) {
  let timer = null
  return (...obj) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...obj)
    }, duration)
  }
}
