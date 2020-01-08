// 定义最大的屏幕宽度
// const MAX_SCREEN_WIDTH = 420
const MAX_FONT_SIZE = 75

document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize
  html.style.fontSize = fontSize + 'px'
})
