function enviar() {
  console.log('executando enviar')
  const form = document.querySelector("form.formInfoUser")
  const result = document.querySelector("div#result")

  const pessoas = []

  form.addEventListener("submit", function(evento) {
    evento.preventDefault()

    const nome = form.querySelector(".nomeUser").value
    const sobrenome = form.querySelector(".sobrenomeUser").value
    const peso = form.querySelector(".pesoUser").value
    const altura = form.querySelector(".alturaUser").value

    pessoas.push({
      nome,
      sobrenome,
      peso,
      altura
    })

    console.log(pessoas)

    result.innerHTML += `<p>${nome} ${sobrenome} ${peso} ${altura}</p>`
  })
}

enviar()
