const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')
const play = document.querySelector('#play')

let result = 0
let hitPosition
let timerId = null
let currentTime = 60
let countDownTimerId;

function randomSquare() {
    square.forEach(square => {
        square.classList.remove('mole')
    })

    let randomPosition = square[Math.floor(Math.random() * 9 )]
    randomPosition.classList.add('mole')

    //assign the id of the randomPosition to hitPosition for us to use later

    hitPosition = randomPosition.id

}

square.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id === hitPosition){
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 600)
    countDownTimerId = setInterval(countDown, 1000)
    play.style.visibility = 'hidden'
}

play.addEventListener('click', moveMole)


function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime === 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your final score is: ' + result )
    }
}

