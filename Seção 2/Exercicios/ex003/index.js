const primeiroNumero = Number(prompt(`Digite um número`))
const segundoNumero = Number(prompt(`Digite outro número`))

const soma = primeiroNumero + segundoNumero
const subtração = primeiroNumero - segundoNumero
const multiplicação = primeiroNumero * segundoNumero
const divisão = primeiroNumero / segundoNumero
const resto = primeiroNumero % segundoNumero
const exponencial = primeiroNumero ** segundoNumero

const resultado = alert(`
  Seus números são ${primeiroNumero} e ${segundoNumero}
  Seus números somados, é: ${primeiroNumero + segundoNumero}
  Seus números subtraidos, é: ${primeiroNumero - segundoNumero}
  Seus números multiplicados, é: ${primeiroNumero * segundoNumero}
  Seus números divididos, é: ${primeiroNumero / segundoNumero}
  Seus números sendo resto de divisão, é: ${primeiroNumero % segundoNumero}
  Seus números em exponencial, é: ${primeiroNumero ** segundoNumero}
  `)