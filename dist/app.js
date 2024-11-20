//Selecionar os elementos de numeros
const qtdNumbers = document.querySelector('[data-js="qtd_numbers"]');
const initalValue = document.querySelector('[data-js="initial_value"]');
const endValue = document.querySelector('[data-js="end_value"]');

//Selecionar os elementos de repetição e botão de sorteio
const repeatNumbers = document.querySelector('[data-js="repeat_numbers"]');
const btnRaffle = document.querySelector("[data-js='btn_raffle']");

//Selecionando o formulario de sorteio
const raffleForm = document.querySelector('[data-js="raffle_form"]');

function raffle(qtdNumbers, initalValue, endValue, repeatNumbers) {
  const drawn = []

  while (drawn.length < qtdNumbers){
    const value  = Math.floor(Math.random() * (endValue - initalValue + 1) + initalValue)
    if (!repeatNumbers && drawn.includes(value)) continue

    drawn.push(value)
  }
  return drawn
}

function updateWindow(drawn){
  raffleForm.style.display = "none"

  const container = document.createElement("div")
  container.classList.add("flex", "items-center", "justify-center", "gap-4", "flex-wrap")
  for (const item of drawn){
    const element = document.createElement("div")
    element.classList.add("text-[rgb(197,141,231)]","text-3xl", "font-bold", "px-[30px]")
    element.innerText = item
    container.appendChild(element)
  }

  raffleForm.parentElement.insertAdjacentElement("beforeend", container)
}


btnRaffle.addEventListener("click", () => {
  const  drawn = raffle(
    Number(qtdNumbers.textContent),
    Number(initalValue.textContent),
    Number(endValue.textContent),
    !repeatNumbers.checked
  )

  updateWindow(drawn)

})

