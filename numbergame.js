const rand = cap => Math.floor(Math.random() * cap) + 1
let goalNum
let currNum = 0
let isFinished = false
const init = _ => {
  isFinished = false
  goalNum = rand(100)
 
  currNum = 0

  document.querySelector('#goalNum').textContent = goalNum

  document.querySelector('#currNum').textContent = 0

  document.querySelector('#buttons').innerHTML = ''

  document.querySelector('#result').textContent = 'Click A Button to get closer to the number displayed.'

  for (let i = 0; i < 3; i++) {
    let btn = document.createElement('button')
    btn.className = 'someNum'
    btn.textContent = '???'
    btn.setAttribute('data-value', rand(20))
    document.querySelector('#buttons').append(btn)
  }
}

const reset = _ => {
  if (isFinished) {
    init()
  }
}

const check = _ => {
  if (currNum === goalNum) {
    isFinished = true
    document.querySelector('#result').textContent = 'Congratulations! You Matched The Number!'
  } else if (currNum > goalNum) {
    isFinished = true
    document.querySelector('#result').textContent = 'Oh No! You seriously suck at this!'
  } else {
    document.querySelector('#result').textContent = 'Keep Going...'
  }
}

document.addEventListener('click', e => {
  if (e.target.className === 'someNum' && !isFinished) {
    currNum += parseInt(e.target.dataset.value)
    document.querySelector('#currNum').textContent = currNum
    check()
  }
})

init()

Given code from class rewriten. 