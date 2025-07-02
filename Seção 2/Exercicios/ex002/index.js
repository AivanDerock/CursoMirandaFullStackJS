const nomeUser = "Ivan"
const sobreNomeUser = "Rocha"
const idadeUser = 19
const anoDeNacismentoUser = 2005
let peso = 70
let altura = 1.87
let imc = peso / (altura * altura)

console.log(`Olá, meu nome é ${nomeUser} ${sobreNomeUser}, tenho ${idadeUser} anos, nasci em ${anoDeNacismentoUser}, e meu IMC é ${imc}.`)

if (imc < 18.5) {
  console.log("Você está abaixo do peso ideal.")
} else if (imc < 24.9) { 
  console.log("Você está no peso ideal.")
} else {
  console.log("Você está acima do peso ideal.")
}