'use strict'

var gBall1Size = 100
var gBall2Size = 100

function onBallClick(maxDiameter) {
  var elBall1 = document.querySelector('.ball')

  gBall1Size += getRandomInt(20, 60)
  if (gBall1Size > maxDiameter) gBall1Size = 100

  elBall1.style.width = gBall1Size + 'px'
  elBall1.style.height = gBall1Size + 'px'
  elBall1.innerText = gBall1Size
  elBall1.style.backgroundColor = getRandomColor()
}

function onBall2Click(maxDiameter) {
  var elBall2 = document.querySelector('.ball_2')

  gBall2Size += getRandomInt(20, 60)
  if (gBall2Size > maxDiameter) gBall2Size = 100

  elBall2.style.width = gBall2Size + 'px'
  elBall2.style.height = gBall2Size + 'px'
  elBall2.innerText = gBall2Size
  elBall2.style.backgroundColor = getRandomColor()
}
