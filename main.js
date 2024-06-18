'use strict'

var gBall1Size = 100

function onBallClick() {
  var elBall1 = document.querySelector('.ball')

  gBall1Size += getRandomInt(20, 60)
  if (gBall1Size > 400) gBall1Size = 100

  elBall1.style.width = gBall1Size + 'px'
  elBall1.style.height = gBall1Size + 'px'
  elBall1.innerText = gBall1Size
}
