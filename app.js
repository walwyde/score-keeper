const p1Display = document.querySelector("#p1Display")
const p2Display = document.querySelector("#p2Display")
const p1button = document.querySelector("#p1")
const p2button = document.querySelector("#p2")
const resetButton = document.querySelector("#reset")
const input = document.querySelector("input")
const scoreDisplay = document.querySelector("#scoreDisplay")
var p1Score = 0
var p2Score = 0
gameOver = false
var winningScore = 5

input.addEventListener("change", () => {
 inputEvent()
})

p1button.addEventListener("click", () => {
  p1ButtonAction()
})
p2button.addEventListener("click", () => {
  p2ButtonAction()
})
resetButton.addEventListener('click', () => {
  reset()
})


const reset = () => {
  p1Score = 0
  p2Score = 0
  gameOver = false
  p1Display.classList.remove("winner")
  p1Display.classList.remove("leader")
  p1Display.classList.remove("loser")

  p2Display.classList.remove("winner")
  p2Display.classList.remove("leader")
  p2Display.classList.remove("loser")


  p1Display.textContent = p1Score
  p2Display.textContent = p2Score
}
const p1ButtonAction = () => {
  if(!gameOver){
    p1Score++
    console.log(p1Score)
    
  } if (p1Score === winningScore){
    gameOver = true
    p1Display.classList.add("winner")
    p2Display.classList.add("loser")
    p1Display.classList.remove("leader")
    p2Display.classList.remove("leader")

  } if (p1Score > p2Score & p1Score < winningScore) {
p1Display.classList.add("leader")
p2Display.classList.remove('leader')
  }
  p1Display.textContent = p1Score
}
const p2ButtonAction = () => {
  if(!gameOver){
    p2Score++
    
  } if (p2Score === winningScore){
    gameOver = true
    p2Display.classList.add("winner")
    p1Display.classList.add("loser")
    p2Display.classList.remove("leader")
    p1Display.classList.remove("leader")


  } if (p2Score > p1Score & p2Score < winningScore) {
    p2Display.classList.add("leader")
    p1Display.classList.remove("leader")
  }
  p2Display.textContent = p2Score
  console.log(p2Display)
}
const inputEvent = () => {
  scoreDisplay.textContent = input.value
  winningScore = Number(input.value)
  console.log(winningScore)
}
