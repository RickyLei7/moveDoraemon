import string from './css'

const player = {
  id: undefined,
  time: 50,
  ui: {
    doraemon: document.querySelector('#doraemon'),
    showText: document.querySelector('#showText')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnFast': 'fast',
  },
  n: 1,
  init: () => {
    player.ui.doraemon.innerText = string.substr(0, player.n)
    player.ui.innerHTML = string.substr(0, player.n)
    player.play()
    player.bindEvents()
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key]
        document.querySelector(key).onclick = player[value]
      }
    }
  },
  run: () => {
    player.n += 1
    if (player.n > string.length) {
      window.clearInterval(player.id)
      return
    }
    player.ui.doraemon.innerText = string.substr(0, player.n)
    player.ui.showText.innerHTML = string.substr(0, player.n)
    player.ui.doraemon.scrollTop = player.ui.doraemon.scrollHeight
  },
  play: () => {
    player.id = setInterval(player.run, player.time)
  },
  pause: () => {
    return window.clearInterval(player.id)
  },
  slow: () => {
    player.pause()
    player.time = 100
    player.play()
  },
  fast: () => {
    player.pause()
    player.time = 0
    player.play()
  }
}

player.init()


