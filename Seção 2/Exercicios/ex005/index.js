let continha = document.querySelector("div#continha")
let numeroUser = Number(prompt(`Digite um numero:`))

continha.innerHTML += ``
continha.innerHTML += `Seu número é ${numeroUser} <br>`
continha.innerHTML += `A Raiz quadrada é: ${numeroUser ** 0.5} <br>`
continha.innerHTML += `${numeroUser} é inteiro: ${Number.isInteger(numeroUser)} <br>`
continha.innerHTML += `É NaN: ${Number.isNaN(numeroUser)} <br>`
continha.innerHTML += `Arredondando para baixo: ${Math.floor(numeroUser)} <br>`
continha.innerHTML += `Arredondando para cima: ${Math.ceil(numeroUser)} <br>`
continha.innerHTML += `Com duas casas decimais: ${numeroUser.toFixed(2)}`