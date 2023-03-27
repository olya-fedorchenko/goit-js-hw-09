function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const start = document.querySelector(`button[data-start]`)
const stop = document.querySelector(`button[data-stop]`)
let timerRandomBodyColor = null

start.addEventListener(`click`, () => {
  start.setAttribute(`disabled`, ``)
  timerRandomBodyColor = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor()
  }, 1000)  
})

stop.addEventListener(`click`, () => {
  clearInterval(timerRandomBodyColor)
  start.removeAttribute(`disabled`)
})
