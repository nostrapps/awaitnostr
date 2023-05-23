/**
 * Waits for the `nostr` object to be defined on the `window` object.
 * @returns {Promise<void>} A promise that resolves when `nostr` is defined or when the maximum elapsed time is reached.
 */
export default function awaitNostr () {
  return new Promise(resolve => {
    let intervalTime = 2
    const maxIntervalTime = 500
    const maxElapsedTime = 5000
    let elapsedTime = 0
    const intervalId = setInterval(() => {
      elapsedTime += intervalTime
      if (typeof window.nostr !== 'undefined') {
        clearInterval(intervalId)
        resolve()
      } else if (elapsedTime >= maxElapsedTime) {
        clearInterval(intervalId)
        resolve()
      } else {
        intervalTime = Math.min(intervalTime * 1.5, maxIntervalTime)
      }
    }, intervalTime)
  })
}
