//Selecionar os elementos de numeros
const qtdNumbers = document.querySelector('[data-js="qtd_numbers"]')
const initalValue = document.querySelector('[data-js="initial_value"]')
const endValue = document.querySelector('[data-js="end_value"]')

//Selecionar os elementos de repetição e botão de sorteio
const repeatNumbers = document.querySelector('[data-js="repeat_numbers"]')
const btnRaffle = document.querySelector("[data-js='btn_raffle']")

//Selecionando o formulario de sorteio
const raffleForm = document.querySelector('[data-js="raffle_form"]')
const raffleResult = document.querySelector('[data-js="raffle_result"]')
const timesDrawn = document.querySelector('[data-js="times_drawn"]')

const drawnNumbesElement = document.querySelector('[data-js="drawn_numbres"]')

const drawAgainButtonElement = document.querySelector(
  '[data-js="draw_again_button"]'
)

function raffle(qtdNumbers, initalValue, endValue, repeatNumbers) {
  const drawn = []

  while (drawn.length < qtdNumbers) {
    const value = Math.floor(
      Math.random() * (endValue - initalValue + 1) + initalValue
    )
    if (!repeatNumbers && drawn.includes(value)) continue

    drawn.push(value)
  }
  return drawn
}
function updateWindow(drawn) {
  raffleForm.style.display = 'none'
  raffleResult.style.display = 'block'

  const container = document.createElement('div')
  container.classList.add(
    'flex',
    'items-center',
    'justify-center',
    'gap-4',
    'flex-wrap'
  )

  drawnNumbesElement.innerHTML = ''

  for (const item of drawn) {
    const element = document.createElement('div')
    element.classList.add(
      'text-[rgb(197,141,231)]',
      'text-3xl',
      'font-bold',
      'px-[10px]',
      'py-[10px]'
    )
    element.innerText = item
    container.appendChild(element)
  }

  drawnNumbesElement.appendChild(container)
}

btnRaffle.addEventListener('click', () => {
  const drawn = raffle(
    Number(qtdNumbers.textContent),
    Number(initalValue.textContent),
    Number(endValue.textContent),
    !repeatNumbers.checked
  )

  updateWindow(drawn)
})

let i = 1

drawAgainButtonElement.addEventListener('click', () => {
  const drawn = raffle(
    Number(qtdNumbers.textContent),
    Number(initalValue.textContent),
    Number(endValue.textContent),
    !repeatNumbers.checked
  )

  updateWindow(drawn)

  i++

  timesDrawn.innerText = `${i}º RESULTADO`
})