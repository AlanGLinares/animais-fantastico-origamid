export default function DebounceScroll (callback,delay) {
  let timer
    return (...args) => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout (() => {
        callback(...args)
        timer = null
      }, delay)
    };
  }
